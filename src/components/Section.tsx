const tones = { white: "bg-white text-charcoal", mist: "bg-mist text-charcoal", navy: "bg-navy text-white", midnight: "bg-midnight text-white" };
export default function Section({ tone = "white", id, children, className = "" }: { tone?: keyof typeof tones; id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`relative py-20 sm:py-28 ${tones[tone]} ${className}`}><div className="wrap">{children}</div></section>;
}
export function Heading({ title, text, dark = false, className = "" }: { title: string; text?: string; dark?: boolean; className?: string }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="h-section">{title}</h2>
      {text && <p className={`mt-5 lead ${dark ? "!text-white/70" : ""}`}>{text}</p>}
    </div>
  );
}
