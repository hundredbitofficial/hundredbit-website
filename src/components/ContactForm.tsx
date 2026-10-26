import emailjs from "@emailjs/browser";
"use client";
import { useRef, useState } from "react";
const services = ["Website Development", "Web Application Development", "Custom Software", "E-commerce", "UI/UX Design", "Data Analytics", "Automation", "Maintenance", "Other"];
const budgets = ["Under ₹25,000", "₹25,000–₹50,000", "₹50,000–₹1,00,000", "₹1,00,000–₹5,00,000", "Above ₹5,00,000", "Not Sure Yet"];
const timelines = ["Immediately", "Within 1 Month", "Within 3 Months", "Flexible"];
type Errors = Record<string, string>;
const field = "mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3.5 text-base outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [msg, setMsg] = useState("");
  const started = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const f = new FormData(e.currentTarget); const v = Object.fromEntries(f.entries()) as Record<string, string>;
    const er: Errors = {};
    if (!v.name?.trim()) er.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email ?? "")) er.email = "Enter a valid email address, like name@company.com.";
    if (v.phone && !/^[+\d][\d\s()-]{6,18}$/.test(v.phone)) er.phone = "Enter a valid phone number.";
    if (!v.service) er.service = "Choose the service you need.";
    if (!v.message || v.message.trim().length < 10) er.message = "Describe your project in at least 10 characters.";
    setErrors(er);
    if (Object.keys(er).length) { (e.currentTarget.querySelector("[aria-invalid=true]") as HTMLElement | null)?.focus(); return; }
    setState("sending");
    try {
      const r = await fetch("/api/contact.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, elapsed: Date.now() - started.current }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong.");
      setState("ok"); (e.target as HTMLFormElement).reset();
    } catch (err) { setMsg(err instanceof Error ? err.message : "Something went wrong."); setState("fail"); }
  }
  if (state === "ok") return (
    <div role="status" className="rounded-2xl bg-mist p-10">
      <h2 className="text-2xl font-semibold">Enquiry sent</h2>
      <p className="mt-3 text-slate">Thank you. We have received your project details and will reply to your email.</p>
    </div>
  );
  const err = (k: string) => errors[k] ? <p id={`${k}-e`} className="mt-1.5 text-sm text-red-600">{errors[k]}</p> : null;
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-e` : undefined });
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div><label htmlFor="name" className="text-sm font-medium">Full name *</label><input id="name" name="name" autoComplete="name" className={field} {...a("name")} />{err("name")}</div>
      <div><label htmlFor="email" className="text-sm font-medium">Business email *</label><input id="email" name="email" type="email" autoComplete="email" className={field} {...a("email")} />{err("email")}</div>
      <div><label htmlFor="phone" className="text-sm font-medium">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} {...a("phone")} />{err("phone")}</div>
      <div><label htmlFor="company" className="text-sm font-medium">Company name</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
      <div><label htmlFor="service" className="text-sm font-medium">Service required *</label><select id="service" name="service" defaultValue="" className={field} {...a("service")}><option value="" disabled>Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select>{err("service")}</div>
      <div><label htmlFor="budget" className="text-sm font-medium">Project budget</label><select id="budget" name="budget" defaultValue="" className={field}><option value="">Select a range</option>{budgets.map((s) => <option key={s}>{s}</option>)}</select></div>
      <div className="sm:col-span-2"><label htmlFor="timeline" className="text-sm font-medium">Project timeline</label><select id="timeline" name="timeline" defaultValue="" className={field}><option value="">Select a timeline</option>{timelines.map((s) => <option key={s}>{s}</option>)}</select></div>
      <div className="sm:col-span-2"><label htmlFor="message" className="text-sm font-medium">Project description *</label><textarea id="message" name="message" rows={6} className={field} {...a("message")} />{err("message")}</div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">{state === "sending" ? "Sending…" : "Send Project Enquiry"}</button>
        {state === "fail" && <p role="alert" className="mt-4 text-sm text-red-600">{msg} Please try again, or contact us on WhatsApp.</p>}
        <p className="mt-4 text-xs text-slate">We use your details only to respond to your enquiry. See our privacy policy.</p>
      </div>
    </form>
  );
}
