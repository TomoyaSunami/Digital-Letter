import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { TransitionLink } from './components/TransitionLink';
import { TransitionOutlet, TransitionProvider } from './components/TransitionProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Letter (UI Prototype)',
  description:
    'デジタルで“手紙の良さ”を再現するサービスのUI確認用プロトタイプです。',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-paper-base text-ink font-sans">
        <TransitionProvider>
          <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4">
            <header className="sticky top-0 z-10 -mx-4 bg-paper-base/90 backdrop-blur">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between border-b border-line-paper px-4 py-5">
                <TransitionLink
                  href="/"
                  className="font-brand text-2xl font-semibold uppercase tracking-[0.3em] text-ink"
                >
                  Digital Letter
                  <span className="ml-2 text-sm lowercase text-ink-muted">(ui prototype)</span>
                </TransitionLink>
                <nav className="flex gap-4 text-sm font-medium text-ink-muted">
                  <TransitionLink
                    href="/letters"
                    className="rounded-full px-4 py-2 transition hover:bg-paper-card hover:text-ink"
                  >
                    手紙箱
                  </TransitionLink>
                  <TransitionLink
                    href="/compose"
                    className="rounded-full bg-accent-primary px-4 py-2 text-white shadow-sm transition hover:bg-accent-primary/90"
                  >
                    新しい手紙
                  </TransitionLink>
                </nav>
              </div>
            </header>
            <main className="flex-1 py-10">
              <TransitionOutlet>{children}</TransitionOutlet>
            </main>
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
