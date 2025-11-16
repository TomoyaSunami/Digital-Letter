import { TransitionLink } from '../components/TransitionLink';

export default function SentPage() {
  return (
    <section className="card-surface text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent-warm/15 text-4xl text-accent-warm">
        ✉️
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-ink">手紙を送りました。</h1>
      <p className="mt-3 text-lg text-ink-muted">ゆかりさんには 2026-01-01 08:00 に届く予定です。</p>
      <p className="mt-1 text-sm text-ink-muted/80">（UI確認用のダミーメッセージです）</p>
      <div className="mt-8 flex flex-col gap-3 md:flex-row">
        <TransitionLink href="/letters" className="button-primary md:flex-1">
          手紙箱に戻る
        </TransitionLink>
        <TransitionLink href="/compose" className="button-secondary md:flex-1">
          もう一通書く
        </TransitionLink>
      </div>
    </section>
  );
}
