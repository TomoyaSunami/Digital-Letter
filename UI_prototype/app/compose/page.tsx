'use client';

import { useState } from 'react';
import { mockRecipients, type LetterTheme } from '../_mock/letters';
import { LetterThemeSwatch } from '../components/LetterThemeSwatch';
import { TransitionLink } from '../components/TransitionLink';

const themeTextareaClass: Record<LetterTheme, string> = {
  simple: 'bg-paper-card border-line-paper text-ink placeholder:text-ink-muted',
  night:
    'bg-letter-night/90 border-letter-night text-letter-night-text placeholder:text-letter-night-text/70',
  japanese: 'bg-letter-japanese/80 border-accent-warm/40 text-ink placeholder:text-accent-warm/70',
};

export default function ComposePage() {
  const [theme, setTheme] = useState<LetterTheme>('simple');

  return (
    <section className="space-y-8">
      <div className="card-surface space-y-6">
        <div>
          <p className="text-sm uppercase tracking-widest text-ink-muted">Compose</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">新しい手紙を書く</h1>
        </div>
        <form className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-ink">
              宛先
              <select className="mt-2 w-full rounded-2xl border border-line-paper px-4 py-3 text-base text-ink focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20">
                {mockRecipients.map((recipient) => (
                  <option key={recipient}>{recipient}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-ink">
              タイトル
              <input
                type="text"
                placeholder="例：未来の自分へ"
                className="mt-2 w-full rounded-2xl border border-line-paper px-4 py-3 text-base text-ink focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              本文
              <textarea
                rows={10}
                placeholder="書きたい言葉を自由に綴ってください…"
                className={`mt-2 w-full rounded-3xl border px-5 py-4 text-lg leading-relaxed transition ${
                  themeTextareaClass[theme]
                }`}
              />
            </label>
          </div>
          <div className="space-y-4 rounded-3xl border border-line-paper bg-paper-soft p-5">
            <p className="text-sm font-semibold text-ink">便箋テーマ選択</p>
            <div className="grid gap-3">
              <LetterThemeSwatch theme="simple" label="シンプル" isActive={theme === 'simple'} onSelect={setTheme} />
              <LetterThemeSwatch theme="night" label="夜空" isActive={theme === 'night'} onSelect={setTheme} />
              <LetterThemeSwatch theme="japanese" label="和紙" isActive={theme === 'japanese'} onSelect={setTheme} />
            </div>
            <p className="text-xs text-ink-muted">
              選択したテーマは今後の画面（手紙詳細やプレビュー）にも反映されます。
            </p>
          </div>
        </form>
        <div className="flex flex-col gap-3 md:flex-row">
          <TransitionLink href="/send" className="button-primary md:flex-1">
            次へ（送信設定へ）
          </TransitionLink>
          <TransitionLink href="/letters" className="button-secondary md:flex-1">
            手紙箱に戻る
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
