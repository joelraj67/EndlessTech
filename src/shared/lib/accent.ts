/**
 * Accent colour utilities — single source of truth for the 5 editorial palette colours.
 * 
 * Tailwind cannot generate arbitrary dynamic classes (e.g. `bg-${color}/10`), so we
 * return literal class strings from a static map. Components import this instead of
 * interpolating class names.
 * 
 * Each accent returns:
 * - border: base border colour
 * - borderSoft: border with 30% opacity
 * - bgSoft: background with 10% opacity
 * - text: text colour
 * - glow: box-shadow glow (for hover/focus)
 * - chip: icon chip classes (bg/border/text)
 */
export type AccentKey = 'thistle' | 'lavender-grey' | 'cerulean' | 'charcoal-blue' | 'jet-black';

export const accentMap: Record<AccentKey, {
  border: string;
  borderSoft: string;
  bgSoft: string;
  bg: string;
  text: string;
  glow: string;
  chip: string;
}> = {
  thistle: {
    border: 'border-thistle',
    borderSoft: 'border-thistle/30',
    bgSoft: 'bg-thistle/10',
    bg: 'bg-thistle',
    text: 'text-thistle',
    glow: 'shadow-[0_0_24px_rgb(var(--color-thistle-rgb)/0.35),0_0_8px_rgb(var(--color-thistle-rgb)/0.2)]',
    chip: 'border-thistle/30 bg-thistle/10 text-thistle',
  },
  'lavender-grey': {
    border: 'border-lavender-grey',
    borderSoft: 'border-lavender-grey/30',
    bgSoft: 'bg-lavender-grey/10',
    bg: 'bg-lavender-grey',
    text: 'text-lavender-grey',
    glow: 'shadow-[0_0_24px_rgb(var(--color-lavender-grey-rgb)/0.35),0_0_8px_rgb(var(--color-lavender-grey-rgb)/0.2)]',
    chip: 'border-lavender-grey/30 bg-lavender-grey/10 text-lavender-grey',
  },
  cerulean: {
    border: 'border-cerulean',
    borderSoft: 'border-cerulean/30',
    bgSoft: 'bg-cerulean/15',
    bg: 'bg-cerulean',
    text: 'text-cerulean',
    glow: 'shadow-[0_0_24px_rgb(var(--color-cerulean-rgb)/0.35),0_0_8px_rgb(var(--color-cerulean-rgb)/0.2)]',
    chip: 'border-cerulean/30 bg-cerulean/15 text-cerulean',
  },
  'charcoal-blue': {
    border: 'border-charcoal-blue',
    borderSoft: 'border-charcoal-blue/30',
    bgSoft: 'bg-charcoal-blue/10',
    bg: 'bg-charcoal-blue',
    text: 'text-charcoal-blue',
    glow: 'shadow-[0_0_24px_rgb(var(--color-charcoal-blue-rgb)/0.35),0_0_8px_rgb(var(--color-charcoal-blue-rgb)/0.2)]',
    chip: 'border-charcoal-blue/30 bg-charcoal-blue/10 text-charcoal-blue',
  },
  'jet-black': {
    border: 'border-jet-black',
    borderSoft: 'border-jet-black/30',
    bgSoft: 'bg-jet-black/10',
    bg: 'bg-jet-black',
    text: 'text-jet-black',
    glow: 'shadow-[0_0_24px_rgb(var(--color-jet-black-rgb)/0.35),0_0_8px_rgb(var(--color-jet-black-rgb)/0.2)]',
    chip: 'border-jet-black/30 bg-jet-black/10 text-jet-black',
  },
};

/**
 * Get accent classes for a given palette key.
 * Usage: `accentClasses('thistle').chip` → "border-thistle/30 bg-thistle/10 text-thistle"
 */
export function accentClasses(key: AccentKey) {
  return accentMap[key];
}

/**
 * Get the CSS variable name for a palette key (for custom styles).
 */
export function accentVar(key: AccentKey) {
  return `--color-${key.replace('-', '-')}`;
}