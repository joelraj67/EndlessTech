import { cn } from '@/shared/lib/utils';
import { Container } from './container';
import { Badge } from './badge';
import type { BadgeTone } from './badge';

type SectionHeadingProps = {
  /** Mono label above the title (e.g. "OUR CORE CAPABILITIES"). */
  eyebrow: string;
  /** Optional icon rendered before the eyebrow label. */
  eyebrowIcon?: React.ComponentType<{ className?: string }>;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: BadgeTone;
  /** Render inside a Container (default) or assume the caller provides width. */
  asContainer?: boolean;
  className?: string;
};

/**
 * Reusable section header: eyebrow badge + display title + subtitle.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  subtitle,
  align = 'center',
  tone = 'accent',
  asContainer = true,
  className,
}: SectionHeadingProps) {
  const inner = (
    <div
      className={cn(
        'mb-20',
        align === 'center'
          ? 'mx-auto max-w-editorial text-center'
          : 'max-w-editorial text-left',
      )}
    >
      <Badge tone={tone} className="mb-4">
        {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
        {eyebrow}
      </Badge>
      <h2 className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg leading-relaxed text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (!asContainer) return <div className={className}>{inner}</div>;

  return (
    <Container className={className}>
      <div className={cn(align === 'center' && 'flex justify-center')}>{inner}</div>
    </Container>
  );
}
