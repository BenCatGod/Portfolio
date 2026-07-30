export default function SkillsGrid({ groups }) {
  return (
    <div className="skills-grid">
      {groups.map((group) => (
        <div className="skills-group" key={group.label}>
          <h4 className="mono skills-group__label">{group.label}</h4>
          <div className="tag-row">
            {group.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
