import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { meta } from "@/lib/seo";
export const metadata = meta("Terms and Conditions", "Terms and Conditions for the Hundred Bit website.", "/terms-and-conditions");
export default function Page() {
  return (<><PageHero title="Terms and Conditions" /><Section tone="white"><div className="mx-auto max-w-2xl space-y-5 text-lg leading-8 text-slate"><p>By using this website you agree to these terms. Content on this site is provided for general information and may change without notice.</p><p>Services are provided under a separate written agreement or quotation for each project. Project timelines, costs and ownership terms are agreed in writing.</p><p>Hundred Bit is not liable for losses arising from use of the website content. External links are provided for convenience and we are not responsible for third-party sites.</p><p><em>This is a starter document. Have it reviewed by a legal professional before launch.</em></p></div></Section></>);
}
