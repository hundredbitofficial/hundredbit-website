import Image from "next/image";
import type { Project } from "@/data/projects";
export default function Mockup({ project, priority = false, sizes = "(min-width:1024px) 640px, 100vw" }: { project: Project; priority?: boolean; sizes?: string }) {
  const host = project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.title.toLowerCase().replace(/\s+/g, "");
  return (
    <div className="overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-lift">
      <div className="flex items-center gap-2 border-b border-charcoal/10 bg-[#f4f6fa] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-slate">{host}</span>
      </div>
      <div className="relative aspect-[16/10] bg-midnight">
        {project.imageReady ? (
          <Image src={project.coverImage} alt={`${project.title} website screenshot`} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-midnight to-navy p-6 text-center">
            <Image src="/brand/logo-mark-light.png" alt="" width={56} height={56} className="opacity-80" />
            <p className="text-xs font-semibold tracking-[0.2em] text-white/70">PROJECT PREVIEW COMING SOON</p>
            <p className="text-sm text-white/50">{project.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
