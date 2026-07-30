import { cn } from '../utils/cn.js';

/**
 * Pill-shaped action element. Renders as an <a> when `href` is given,
 * otherwise as a <button>.
 */
export default function Pill({
  href,
  onClick,
  variant = 'ghost',
  icon = null,
  iconPosition = 'trailing',
  className,
  children,
  ...rest
}) {
  const classes = cn('pill', variant === 'cta' ? 'pill--cta' : 'pill--ghost', className);
  const content = (
    <>
      {icon && iconPosition === 'leading' ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === 'trailing' ? icon : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
