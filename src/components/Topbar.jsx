import useTheme from '../hooks/useTheme.js';
import NavDock from './NavDock.jsx';

export default function Topbar() {
  const { toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar__side topbar__side--left">

      </div>

      <NavDock onToggleTheme={toggleTheme} />
    </header>
  );
}
