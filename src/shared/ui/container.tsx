import { cn } from '@/shared/lib/utils';

/**
 * Centered max-width page container.
 * Replaces ~21 copy-pasted `max-w-[1280px] mx-auto px-6` blocks.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6', className)}>
      {children}
    </div>
  );
}
