'use client';

import { useState } from 'react';
import type { AssetType } from '@prisma/client';

interface GenerateFormProps {
  type: AssetType;
}

export default function GenerateForm({ type }: GenerateFormProps) {
  const [prompt, setPrompt] = useState('');
  const [userId, setUserId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, type, userId, projectId: projectId || undefined }),
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error ?? 'Failed to queue job.');
      return;
    }

    setPrompt('');
    setMessage('Job queued successfully.');
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block text-sm">
        Prompt
        <textarea
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          rows={4}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          required
        />
      </label>
      <label className="block text-sm">
        User ID
        <input
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          required
        />
      </label>
      <label className="block text-sm">
        Project ID (optional)
        <input
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={projectId}
          onChange={(event) => setProjectId(event.target.value)}
        />
      </label>
      {message ? <p className="text-sm text-emerald-400">{message}</p> : null}
      <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold" type="submit">
        Queue {type.toLowerCase()} job
      </button>
    </form>
  );
}
