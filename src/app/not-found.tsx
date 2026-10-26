import Link from "next/link";
import PageHero from "@/components/PageHero";
export default function NotFound() {
  return (<><PageHero title="This page has moved on." text="The page you were looking for does not exist or has been moved." /><div className="wrap py-20"><Link href="/" className="btn btn-primary">Back to home</Link></div></>);
}
