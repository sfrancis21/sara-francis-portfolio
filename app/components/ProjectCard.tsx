// Reusable card for each project section
import type { Project } from "@/app/data/portfolio";

// Turns a normal YouTube/Vimeo link into its embeddable URL.
// Accepts youtu.be/ID, youtube.com/watch?v=ID, /embed/ID, and vimeo.com/ID.
function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "player.vimeo.com") return url;
    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const embedUrl = project.video ? toEmbedUrl(project.video) : null;

  // Build the list of links. Two repos are labeled Frontend/Backend;
  // a single repo just says "View on GitHub".
  const links: { label: string; href: string }[] = [];
  if (project.github && project.github2) {
    links.push({ label: "Frontend →", href: project.github });
    links.push({ label: "Backend →", href: project.github2 });
  } else if (project.github) {
    links.push({ label: "View on GitHub →", href: project.github });
  }
  if (project.demo) links.push({ label: "Live demo →", href: project.demo });

  return (
    <article className="border-b border-zinc-200 py-10 dark:border-zinc-800">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          {project.name}
        </h2>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {project.tech && project.tech.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {embedUrl && (
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <iframe
            src={embedUrl}
            title={`${project.name} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      )}
    </article>
  );
}
