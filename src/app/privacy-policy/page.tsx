import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { meta } from "@/lib/seo";
export const metadata = meta("Privacy Policy", "Privacy Policy for the Hundred Bit website.", "/privacy-policy");
export default function Page() {
  return (<><PageHero title="Privacy Policy" /><Section tone="white"><div className="mx-auto max-w-2xl space-y-5 text-lg leading-8 text-slate"><p>Hundred Bit collects only the information you submit through our enquiry form (name, email, phone, company, project details) and basic technical data needed to operate the site.</p><p>We use this information to respond to your enquiry and to provide our services. We do not sell your personal information. Enquiry data is stored securely and accessed only by Hundred Bit.</p><p>You may ask us to access, correct or delete your information by contacting us through the contact page.</p><p><em>This is a starter policy. Have it reviewed against your actual data practices and applicable law before launch.</em></p></div></Section></>);
}
