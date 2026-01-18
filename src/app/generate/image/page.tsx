import GenerateForm from '@/components/GenerateForm';

export default function GenerateImagePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Generate Image</h1>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <GenerateForm type="IMAGE" />
      </div>
    </div>
  );
}
