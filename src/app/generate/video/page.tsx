import GenerateForm from '@/components/GenerateForm';

export default function GenerateVideoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Generate Video</h1>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <GenerateForm type="VIDEO" />
      </div>
    </div>
  );
}
