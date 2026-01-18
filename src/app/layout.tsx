import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DreamHub MVP',
  description: 'DreamHub MVP with Next.js, Prisma, Redis, and BullMQ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="border-b border-slate-800 bg-slate-900">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link className="text-lg font-semibold" href="/">
                DreamHub
              </Link>
              <nav className="flex gap-4 text-sm text-slate-300">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/generate/text">Generate</Link>
                <Link href="/agent">Agent</Link>
                <Link href="/login">Login</Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
