import { ArrowUpRightIcon } from './icons.jsx';
import projectDetails from '../data/projectDetails.js';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const { title, description, tags, url, image, codeLabel, hideCode } = project;

  const detail = projectDetails[title] || {};
  const paragraphs = detail.longDescription
    ? [].concat(detail.longDescription)
    : [description];

  const codeHref = detail.links?.repo || url;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {image && (
          <div className="modal__image" style={{ backgroundImage: `url(${image})` }} />
        )}

        <h2 className="modal__title">{title}</h2>

        {(detail.role || detail.year) && (
          <p className="mono" style={{ color: 'var(--text-muted)', fontSize: 12.5, marginBottom: 16 }}>
            {detail.role}
            {detail.role && detail.year && <span className="dot-sep">·</span>}
            {detail.year}
          </p>
        )}

        <div className="modal__content">
          {paragraphs.map((para, i) => (
            <p className="modal__para" key={i}>
              {para}
            </p>
          ))}

          {detail.highlights?.length > 0 && (
            <ul style={{ margin: '0 0 14px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {detail.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {tags?.length > 0 && (
          <div className="tag-row" style={{ marginBottom: 20 }}>
            {tags.map((tag) => (
              <span className="tag tag--sm" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {!hideCode && codeHref && (
          <a href={codeHref} target="_blank" rel="noopener" className="pill pill--cta">
            {codeLabel || 'Code'}
            <ArrowUpRightIcon />
          </a>
        )}
      </div>
    </div>
  );
}