/**
 * Joins class names together, skipping falsy values.
 * Usage: cn('pill', isActive && 'is-active', 'pill--cta')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
