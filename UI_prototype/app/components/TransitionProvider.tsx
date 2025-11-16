'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PageTransition, type TransitionPhase } from './PageTransition';

const TRANSITION_DURATION = 800;

type TransitionContextValue = {
  startTransition: (href: string) => void;
  isTransitioning: boolean;
  phase: TransitionPhase;
};

const TransitionContext = createContext<TransitionContextValue | undefined>(undefined);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within TransitionProvider');
  }
  return context;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>('in');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingPathRef = useRef<string | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const settleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutRef = (ref: MutableRefObject<NodeJS.Timeout | null>) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimeoutRef(fadeTimeoutRef);
      clearTimeoutRef(settleTimeoutRef);
    };
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      return;
    }
    if (pendingPathRef.current && pathname === pendingPathRef.current) {
      pendingPathRef.current = null;
      setPhase('in');
      clearTimeoutRef(settleTimeoutRef);
      settleTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }
  }, [pathname, isTransitioning]);

  const startTransition = useCallback(
    (href: string) => {
      if (!href || href === pathname || isTransitioning) {
        if (href && href !== pathname && !isTransitioning) {
          router.push(href);
        }
        return;
      }
      pendingPathRef.current = href;
      setIsTransitioning(true);
      setPhase('out');
      clearTimeoutRef(fadeTimeoutRef);
      fadeTimeoutRef.current = setTimeout(() => {
        router.push(href);
      }, TRANSITION_DURATION);
    },
    [pathname, isTransitioning, router]
  );

  const contextValue = useMemo<TransitionContextValue>(
    () => ({ startTransition, isTransitioning, phase }),
    [startTransition, isTransitioning, phase]
  );

  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
}

export function TransitionOutlet({ children }: { children: ReactNode }) {
  const { phase } = usePageTransition();
  return (
    <PageTransition phase={phase} duration={TRANSITION_DURATION}>
      {children}
    </PageTransition>
  );
}
