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
 *
 * Warm editorial skin (Vinny.io v2): titles set in the serif display face
 * at solid ink — NOT gradient-clipped. The italic accent word is reserved
 * as a deliberate flourish in <GradientText>, used sparingly.
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
      <h2 className="mb-6 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg leading-relaxed text-muted">
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
