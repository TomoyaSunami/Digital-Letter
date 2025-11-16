'use client';

import clsx from 'clsx';
import type { LetterTheme } from '../_mock/letters';

type Props = {
  theme: LetterTheme;
  isActive: boolean;
  label: string;
  onSelect: (theme: LetterTheme) => void;
};

const themeStyles: Record<LetterTheme, string> = {
  simple: 'bg-paper-card text-ink',
  night: 'bg-letter-night text-letter-night-text',
  japanese: 'bg-letter-japanese text-accent-warm',
};

export function LetterThemeSwatch({ theme, isActive, label, onSelect }: Props) {
  const descriptionClass = theme === 'night' ? 'text-white/80' : 'text-ink-muted/80';

  return (
    <button
      type="button"
      onClick={() => onSelect(theme)}
      className={clsx(
        'flex h-16 flex-col justify-center rounded-2xl border px-4 text-sm font-semibold transition',
        themeStyles[theme],
        isActive ? 'ring-2 ring-accent-primary/70' : 'border-line-paper'
      )}
    >
      {label}
      <span className={clsx('text-xs font-normal', descriptionClass)}>
        {theme === 'simple' && '素朴なしろ便箋'}
        {theme === 'night' && '星空のイメージ'}
        {theme === 'japanese' && '和紙テイスト'}
      </span>
    </button>
  );
}
