
"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { projectLink } from "@/data/projects";

type ProjectShowcaseProps = {
  items: Project[];
};

function ProjectPreview({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  const desktopImage = project.coverImage;
  const mobileImage = project.mobileImage || project.coverImage;

  if (!project.imageReady || !desktopImage || imageError) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-slate-200">
        <span className="text-sm text-slate-500">
          Project preview unavailable
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
      {/* Desktop / tablet image */}
      <Image
        src={desktopImage}
        alt={`${project.title} website preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        className={`object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] ${
          project.mobileImage ? "hidden sm:block" : ""
        }`}
        onError={() => setImageError(true)}
      />

      {/* Mobile image */}
      {project.mobileImage && (
        <Image
          src={mobileImage}
          alt={`${project.title} mobile website preview`}
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:hidden"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

export default function ProjectShowcase({
  items,
}: ProjectShowcaseProps) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-2xl border border-charcoal/10 bg-white p-8 text-center">
        <p className="text-slate">
          Projects will be showcased here soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {items.map((project) => (
        <article
          key={project.slug}
          className="group min-w-0"
        >
          <a
            href={projectLink(project)}
            className="block"
            aria-label={`View ${project.title} project`}
          >
            <ProjectPreview project={project} />
          </a>

          <div className="mt-6">
            <p className="text-sm font-medium text-electric">
              {project.industry}
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-charcoal">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-slate">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-charcoal/10 px-3 py-1 text-xs text-slate"
                >
                  {service}
                </span>
              ))}
            </div>

            <a
              href={projectLink(project)}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-electric transition-colors hover:text-royal"
            >
              View Project
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
