'use client';

import { useState } from 'react';
import { mockLetters } from '../_mock/letters';
import { LetterCard } from '../components/LetterCard';
import { TransitionLink } from '../components/TransitionLink';

type Tab = 'inbox' | 'sent';

const tabLabels: Record<Tab, string> = {
  inbox: '受信',
  sent: '送信',
};

export default function LettersPage() {
  const [tab, setTab] = useState<Tab>('inbox');
  const letters = mockLetters;

  return (
    <section className="space-y-8">
      <div className="card-surface">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink-muted">Archive</p>
            <h1 className="mt-2 text-3xl font-semibold text-ink">手紙箱</h1>
            <p className="mt-2 text-ink-muted">受信 / 送信の手紙をここで確認できます。</p>
          </div>
          <TransitionLink href="/compose" className="button-primary">
            新しい手紙を書く
          </TransitionLink>
        </div>
        <div className="mt-8 flex gap-2 rounded-full bg-paper-soft p-2 text-sm font-semibold text-ink-muted">
          {(Object.keys(tabLabels) as Tab[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`flex-1 rounded-full px-4 py-2 transition ${
                tab === key ? 'bg-paper-card text-ink shadow' : 'hover:text-ink'
              }`}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {letters.map((letter) => (
            <LetterCard key={letter.id} letter={letter} mode={tab} />
          ))}
        </div>
      </div>
    </section>
  );
}
