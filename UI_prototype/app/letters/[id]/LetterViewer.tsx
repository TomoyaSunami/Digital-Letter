'use client';

import clsx from 'clsx';
import { useState } from 'react';
import type { Letter } from '../../_mock/letters';
import { formatLetterDate } from '../../lib/format-date';
import { TransitionLink } from '../../components/TransitionLink';

const themeClassName = {
  simple: 'letter-theme-simple text-ink',
  night: 'letter-theme-night',
  japanese: 'letter-theme-japanese text-accent-warm',
};

type Props = {
  letter: Letter;
};

export function LetterViewer({ letter }: Props) {
  const [isOpened, setIsOpened] = useState(letter.status === 'DELIVERED');

  return (
    <div className="mt-6 space-y-6">
      {!isOpened ? (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line-paper bg-paper-soft px-8 py-10 text-center">
          <div className="text-6xl" aria-hidden>
            {letter.status === 'DELIVERED' ? '💌' : '📮'}
          </div>
          <p className="text-lg text-ink-muted">封筒をタップして中身を開いてみましょう。</p>
          <button
            type="button"
            onClick={() => setIsOpened(true)}
            className="button-primary"
          >
            封筒を開ける
          </button>
        </div>
      ) : (
        <div className={`rounded-3xl border border-line-paper p-8 shadow-inner ${themeClassName[letter.theme]}`}>
          <p
            className={clsx(
              'text-sm uppercase tracking-[0.3em]',
              letter.theme === 'night' ? 'text-white/70' : 'text-ink-muted/80'
            )}
          >
            {letter.from} ➝ {letter.to}
          </p>
          <h2 className={clsx('mt-2 text-2xl font-semibold', letter.theme === 'night' ? 'text-white' : 'text-ink')}>
            {letter.title}
          </h2>
          <p
            className={clsx(
              'handwriting mt-6 text-lg leading-relaxed',
              letter.theme === 'night' ? 'text-letter-night-text' : 'text-ink'
            )}
          >
            {letter.body}
          </p>
          <p
            className={clsx(
              'mt-6 text-right text-sm',
              letter.theme === 'night' ? 'text-white/70' : 'text-ink-muted'
            )}
          >
            {formatLetterDate(letter.deliveredAt ?? letter.scheduledAt)}
          </p>
        </div>
      )}
      <div className="flex flex-col gap-3 md:flex-row">
        <TransitionLink href="/compose" className="button-primary md:flex-1">
          返信を書く
        </TransitionLink>
        <TransitionLink href="/letters" className="button-secondary md:flex-1">
          手紙箱に戻る
        </TransitionLink>
      </div>
    </div>
  );
}
