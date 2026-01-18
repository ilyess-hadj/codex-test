import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: { assets: true, jobs: true },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold">{project.name}</h1>
        <p className="mt-2 text-sm text-slate-400">Assets: {project.assets.length}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Assets</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {project.assets.length === 0 ? (
              <li>No assets yet.</li>
            ) : (
              project.assets.map((asset) => (
                <li key={asset.id} className="border-b border-slate-800 py-2">
                  <p className="text-slate-400">{asset.type}</p>
                  <p className="mt-1 break-all">{asset.content}</p>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Jobs</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {project.jobs.length === 0 ? (
              <li>No jobs yet.</li>
            ) : (
              project.jobs.map((job) => (
                <li key={job.id} className="border-b border-slate-800 py-2">
                  <p className="text-slate-400">{job.type}</p>
                  <p className="mt-1">{job.prompt}</p>
                  <p className="text-xs text-slate-500">{job.status}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
