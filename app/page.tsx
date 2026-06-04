import About from "@/app/components/About";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/portfolio";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <About />

      <section className="mt-10">
        <h2 className="sr-only">Projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}
