'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { usePageTransition } from './TransitionProvider';

type LinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  href: string;
};

export function TransitionLink({ href, onClick, ...rest }: LinkProps) {
  const { startTransition } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      rest.target === '_blank'
    ) {
      return;
    }
    event.preventDefault();
    startTransition(href);
  };

  return <Link {...rest} href={href} onClick={handleClick} />;
}
