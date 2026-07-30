import { cn } from '../utils/cn.js';
import { PinIcon } from './icons.jsx';
import profileImage from '../assets/me.png';

const ANCHORS = [
  { id: 'introduction', label: 'Introduction' },
  // { id: 'experience', label: 'Work Experience' },
  { id: 'studies', label: 'Studies' },
  { id: 'skills', label: 'Technical skills' }
];

export default function Sidebar({ activeAnchor }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="avatar">
          <img src={profileImage} alt="Portrait of Benya Pengkhuean" />
        </div>
        <div className="sidebar__badges">
          <span className="badge">
            <PinIcon />
            Thailand, Lampang
          </span>
        </div>
        {/* <div className="sidebar__langs">
          <span className="tag">English</span>
          <span className="tag">Bahasa</span>
        </div> */}
      </div>

      <nav className="sidebar__anchors" aria-label="Section navigation">
        {ANCHORS.map((anchor) => (
          <a
            key={anchor.id}
            href={`#${anchor.id}`}
            className={cn('anchor', activeAnchor === anchor.id && 'is-active')}
          >
            {anchor.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export { ANCHORS };
