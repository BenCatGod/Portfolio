import activityDetails from '../data/activityDetails.js';

export default function ActivityModal({ activity, onClose }) {
  if (!activity) return null;

  const { title, description, tags, image } = activity;

  const detail = activityDetails[title] || {};
  const paragraphs = detail.longDescription
    ? [].concat(detail.longDescription)
    : [description];

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
      </div>
    </div>
  );
}