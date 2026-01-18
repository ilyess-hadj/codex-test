import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link className="rounded-full border border-slate-700 px-4 py-2 text-sm" href="/generate/text">
          New Generation
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-800 p-6 text-slate-400">
            No projects yet. Create one from the generation pages.
          </div>
        ) : (
          projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Created {project.createdAt.toDateString()}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
