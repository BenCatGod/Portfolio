import Pill from './Pill.jsx';
import { ArrowUpRightIcon } from './icons.jsx';
import projectDetails from '../data/projectDetails.js';

export default function ProjectCard({ project, onSelect }) {
  const { tone, number, title, description, tags, url, codeLabel, hideCode } = project;

  const previewStyle = project.image
    ? {
        background: `url(${project.image}) center/cover no-repeat`,
        height: '200px'
      }
    : undefined;

  const handleOpen = () => onSelect?.(project);

  const codeHref = projectDetails[title]?.links?.repo || url;

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
        {!hideCode && (
          <div
            className="project-card__link"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            style={{ alignSelf: 'flex-start' }}
          >
            <Pill href={codeHref} target="_blank" rel="noopener" icon={<ArrowUpRightIcon />}>
              {codeLabel || 'Code'}
            </Pill>
          </div>
        )}
      </div>
    </article>
  );
}