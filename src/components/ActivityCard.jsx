export default function ActivityCard({ activity, onSelect }) {
  const { tone, number, title, description, tags } = activity;

  const previewStyle = activity.image
    ? {
        background: `url(${activity.image}) center/cover no-repeat`,
        height: '200px'
      }
    : undefined;

  const handleOpen = () => onSelect?.(activity);

  return (
    <article
      className="project-card"
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      <div className="project-card__preview" data-tone={tone} style={previewStyle}>
        <span className="mono project-card__tag-corner">{number}</span>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag tag--sm" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}