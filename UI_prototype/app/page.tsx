import { TransitionLink } from './components/TransitionLink';

const features = [
  '手紙箱からの閲覧・開封',
  '便箋テーマのプレビュー',
  '配達時間設定までの一連の導線',
];

export default function HomePage() {
  return (
    <section className="card-surface text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-accent-warm">Prototype</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
        Digital Letter UI Prototype
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        デジタルで“手紙の良さ”を再現するサービスのUI確認用プロトタイプです。
      </p>
      <ul className="mt-6 grid gap-3 text-left text-ink-muted md:grid-cols-3">
        {features.map((feature) => (
          <li key={feature} className="rounded-2xl border border-line-paper/60 bg-paper-soft px-4 py-3 text-sm">
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <TransitionLink href="/letters" className="button-primary text-lg">
          手紙箱を開く
        </TransitionLink>
      </div>
    </section>
  );
}
