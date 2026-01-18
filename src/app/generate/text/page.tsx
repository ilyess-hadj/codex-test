import GenerateForm from '@/components/GenerateForm';

export default function GenerateTextPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Generate Text</h1>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <GenerateForm type="TEXT" />
      </div>
    </div>
  );
}
