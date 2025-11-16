'use client';

import { useMemo, useState } from 'react';
import { TransitionLink } from '../components/TransitionLink';

type Option = 'now' | 'slow' | 'capsule';

const slowDurations = ['3分', '1時間', '12時間', '1日', '1週間'];

export default function SendPage() {
  const [option, setOption] = useState<Option>('now');
  const [slowDuration, setSlowDuration] = useState(slowDurations[2]);
  const [capsuleDate, setCapsuleDate] = useState('2026-01-01');
  const [capsuleTime, setCapsuleTime] = useState('08:00');

  const preview = useMemo(() => {
    if (option === 'now') {
      return 'この手紙はすぐに届けられます。';
    }
    if (option === 'slow') {
      return `この手紙は ${slowDuration} かけて、ゆっくりと届きます。`;
    }
    return `この手紙は ${capsuleDate} ${capsuleTime} に届く予定です。`;
  }, [option, slowDuration, capsuleDate, capsuleTime]);

  return (
    <section className="card-surface space-y-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-ink-muted">Delivery</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">配達時間を選ぶ</h1>
      </div>
      <form className="space-y-4">
        <label className="flex cursor-pointer flex-col gap-2 rounded-3xl border border-line-paper px-6 py-5 transition hover:border-accent-warm/60">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              className="h-4 w-4"
              checked={option === 'now'}
              onChange={() => setOption('now')}
            />
            <span className="text-lg font-semibold">すぐに届ける</span>
          </div>
          <p className="text-sm text-ink-muted">思い立った瞬間に届けたいとき。</p>
        </label>
        <label className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-line-paper px-6 py-5 transition hover:border-accent-warm/60">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              className="h-4 w-4"
              checked={option === 'slow'}
              onChange={() => setOption('slow')}
            />
            <span className="text-lg font-semibold">ゆっくり届ける</span>
          </div>
          <p className="text-sm text-ink-muted">余韻を持たせたいときに。</p>
          {option === 'slow' && (
            <select
              className="w-full rounded-2xl border border-line-paper px-4 py-3 text-base text-ink focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
              value={slowDuration}
              onChange={(event) => setSlowDuration(event.target.value)}
            >
              {slowDurations.map((duration) => (
                <option key={duration}>{duration}</option>
              ))}
            </select>
          )}
        </label>
        <label className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-line-paper px-6 py-5 transition hover:border-accent-warm/60">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              className="h-4 w-4"
              checked={option === 'capsule'}
              onChange={() => setOption('capsule')}
            />
            <span className="text-lg font-semibold">タイムカプセル</span>
          </div>
          <p className="text-sm text-ink-muted">未来の特定の日に手紙を届けます。</p>
          {option === 'capsule' && (
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type="date"
                className="flex-1 rounded-2xl border border-line-paper px-4 py-3 text-ink focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                value={capsuleDate}
                onChange={(event) => setCapsuleDate(event.target.value)}
              />
              <input
                type="time"
                className="flex-1 rounded-2xl border border-line-paper px-4 py-3 text-ink focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                value={capsuleTime}
                onChange={(event) => setCapsuleTime(event.target.value)}
              />
            </div>
          )}
        </label>
      </form>
      <div className="rounded-3xl border border-line-paper bg-paper-soft px-6 py-5 text-ink">
        <p className="text-sm uppercase tracking-[0.3em] text-ink-muted">Preview</p>
        <p className="mt-2 text-lg text-ink">{preview}</p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <TransitionLink href="/sent" className="button-primary md:flex-1">
          送信する
        </TransitionLink>
        <TransitionLink href="/compose" className="button-secondary md:flex-1">
          書き直す
        </TransitionLink>
      </div>
    </section>
  );
}
