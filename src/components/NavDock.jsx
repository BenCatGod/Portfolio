import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn.js';
import { HomeIcon, UserIcon, BriefcaseIcon, SunIcon, MoonIcon } from './icons.jsx';

const NAV_ITEMS = [
  { key: 'about', to: '/', label: 'About', Icon: UserIcon },
  { key: 'work', to: '/work', label: 'Work', Icon: BriefcaseIcon }
];

export default function NavDock({ onToggleTheme }) {
  const { pathname } = useLocation();
  const activeKey = pathname === '/work' ? 'work' : 'about';

  const dockRef = useRef(null);
  const pillRef = useRef(null);
  const itemRefs = useRef({});

  const movePill = () => {
    const dock = dockRef.current;
    const pill = pillRef.current;
    const activeEl = itemRefs.current[activeKey];
    if (!dock || !pill || !activeEl) return;

    const dockRect = dock.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    const x = elRect.left - dockRect.left;

    pill.style.width = `${elRect.width}px`;
    pill.style.transform = `translateX(${x - 6}px)`;
  };

  useLayoutEffect(() => {
    movePill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  useEffect(() => {
    window.addEventListener('resize', movePill);
    window.addEventListener('load', movePill);
    return () => {
      window.removeEventListener('resize', movePill);
      window.removeEventListener('load', movePill);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="dock" aria-label="Primary navigation" ref={dockRef}>
      <span className="dock__pill" ref={pillRef} aria-hidden="true" />

      {NAV_ITEMS.map(({ key, to, label, Icon }) => (
        <Link
          key={key}
          to={to}
          ref={(el) => {
            itemRefs.current[key] = el;
          }}
          className={cn('dock__item', activeKey === key && 'is-active')}
          aria-current={activeKey === key ? 'page' : undefined}
          title={label}
        >
          <Icon />
          <span>{label}</span>
        </Link>
      ))}

      <button
        type="button"
        className="dock__item dock__item--toggle"
        onClick={onToggleTheme}
        title="Toggle theme"
        aria-label="Toggle light and dark theme"
      >
        <SunIcon />
        <MoonIcon />
      </button>
    </nav>
  );
}
