export default function AgentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Agent Console</h1>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-300">
        <p>
          Use this space to orchestrate multi-step creative workflows. Wire this page into the
          n8n trigger endpoints or to watch job events from BullMQ.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Trigger n8n via <code>/api/n8n/trigger</code>.</li>
          <li>Receive callbacks at <code>/api/n8n/callback</code>.</li>
          <li>Monitor queued jobs in the worker logs.</li>
        </ul>
      </div>
    </div>
  );
}
