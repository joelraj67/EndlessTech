import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button.
 *
 * Warm editorial skin (Vinny.io v2): primary is the single terracotta
 * accent (used sparingly for the one action per view that matters most).
 * Press feedback + keyboard focus ring preserved.
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper';

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30',
  secondary:
    'border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent hover:bg-surface-alt',
  ghost: 'text-accent hover:bg-accent-soft',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function GradientButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CommonProps &
  ({ href: string } | { onClick: () => void }) &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variantClass[variant], sizeClass[size], className);

  if ('href' in props && props.href) {
    const { href, ...rest } = props as { href: string };
    void rest;
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, ...rest } = props as {
    onClick: () => void;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  void rest;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
