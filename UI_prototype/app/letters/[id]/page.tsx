import { notFound } from 'next/navigation';
import { mockLetters } from '../../_mock/letters';
import { formatLetterDate } from '../../lib/format-date';
import { LetterViewer } from './LetterViewer';

type PageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return mockLetters.map((letter) => ({ id: letter.id }));
}

export default function LetterDetailPage({ params }: PageProps) {
  const letter = mockLetters.find((item) => item.id === params.id);

  if (!letter) {
    notFound();
  }

  return (
    <section className="card-surface">
      <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
        <span className="rounded-full bg-paper-soft px-3 py-1 text-xs font-semibold text-ink">
          From {letter.from}
        </span>
        <span className="rounded-full bg-paper-soft px-3 py-1 text-xs font-semibold text-ink">
          To {letter.to}
        </span>
        {letter.deliveredAt && <span>配達日: {formatLetterDate(letter.deliveredAt)}</span>}
        {!letter.deliveredAt && letter.scheduledAt && (
          <span>配達予定: {formatLetterDate(letter.scheduledAt)}</span>
        )}
      </div>
      <LetterViewer letter={letter} />
    </section>
  );
}
