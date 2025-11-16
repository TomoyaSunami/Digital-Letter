'use client';

import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';

export type TransitionPhase = 'in' | 'out';

type PageTransitionProps = {
  children: ReactNode;
  phase: TransitionPhase;
  duration?: number;
};

export function PageTransition({ children, phase, duration = 800 }: PageTransitionProps) {
  const style = {
    '--transition-duration': `${duration}ms`,
  } as CSSProperties;

  return (
    <div
      className={clsx('page-transition', phase === 'in' ? 'page-transition-in' : 'page-transition-out')}
      style={style}
    >
      {children}
    </div>
  );
}
