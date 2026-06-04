// About Section Styling and Organization
import { profile } from "@/app/data/portfolio";

export default function About() {
  return (
    <header className="border-b border-zinc-200 pb-10 dark:border-zinc-800">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name} Portfolio
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {profile.about}
      </p>

      <nav className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        <Link href={profile.github}>GitHub</Link>
        <Link href={profile.linkedin}>LinkedIn</Link>
        <Link href={profile.resume} download>
          Resume (PDF)
        </Link>
      </nav>
    </header>
  );
}

function Link({
  href,
  download,
  children,
}: {
  href: string;
  download?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      download={download}
      className="rounded-full border border-zinc-300 px-4 py-2 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
    >
      {children}
    </a>
  );
}
