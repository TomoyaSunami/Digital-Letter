'use client';

import type { Letter } from '../_mock/letters';
import { formatLetterDate } from '../lib/format-date';
import { TransitionLink } from './TransitionLink';

type LetterCardProps = {
  letter: Letter;
  mode: 'inbox' | 'sent';
};

export function LetterCard({ letter, mode }: LetterCardProps) {
  const scheduleDate = formatLetterDate(letter.scheduledAt);
  const statusLabel =
    letter.status === 'DELIVERED'
      ? '配達済み'
      : scheduleDate
        ? `配達待ち（${scheduleDate} に届く予定）`
        : '配達待ち';

  const displayDate =
    mode === 'inbox'
      ? formatLetterDate(letter.deliveredAt)
      : letter.status === 'DELIVERED'
        ? formatLetterDate(letter.deliveredAt)
        : formatLetterDate(letter.scheduledAt);

  const nameLabel = mode === 'inbox' ? `From ${letter.from}` : `To ${letter.to}`;
  const envelopeEmoji = letter.status === 'DELIVERED' ? '📬' : '📮';

  return (
    <TransitionLink
      href={`/letters/${letter.id}`}
      className="flex items-center gap-4 rounded-2xl border border-line-paper bg-paper-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-warm/60"
    >
      <div className="text-3xl" aria-hidden>
        {envelopeEmoji}
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider text-ink-muted">{nameLabel}</div>
        <p className="mt-1 text-lg font-semibold text-ink">{letter.title}</p>
        <p className="handwriting mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-ink-muted">
          {letter.preview ?? letter.body}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              letter.status === 'DELIVERED'
                ? 'bg-accent-primary/10 text-accent-primary'
                : 'bg-accent-warm/15 text-accent-warm'
            }`}
          >
            {statusLabel}
          </span>
          {displayDate && <span>{displayDate}</span>}
        </div>
      </div>
    </TransitionLink>
  );
}
