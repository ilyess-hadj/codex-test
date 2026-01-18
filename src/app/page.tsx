import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-semibold">DreamHub MVP</h1>
        <p className="mt-2 text-slate-300">
          A starter for creative generation workflows with projects, jobs, and mock providers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white" href="/register">
            Create account
          </Link>
          <Link className="rounded-full border border-slate-700 px-4 py-2 text-sm" href="/projects">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
