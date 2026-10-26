import Image from "next/image";
import Link from "next/link";
export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Hundred Bit — home" className={`inline-flex items-center ${className}`}>
      <Image src={light ? "/brand/logo-wordmark-light.png" : "/brand/logo-wordmark.png"} alt="Hundred Bit" width={1360} height={226} priority className="h-6 w-auto sm:h-7" />
    </Link>
  );
}
