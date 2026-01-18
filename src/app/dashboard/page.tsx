import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const projectCount = await prisma.project.count();
  const jobCount = await prisma.job.count();
  const recentJobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Projects</p>
          <p className="mt-2 text-3xl font-semibold">{projectCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Jobs queued</p>
          <p className="mt-2 text-3xl font-semibold">{jobCount}</p>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Recent Jobs</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {recentJobs.length === 0 ? (
            <li>No jobs yet.</li>
          ) : (
            recentJobs.map((job) => (
              <li key={job.id} className="flex justify-between border-b border-slate-800 py-2">
                <span>{job.type}</span>
                <span className="text-slate-500">{job.status}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
