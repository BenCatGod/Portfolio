export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline__item" key={`${item.role}-${item.org}`}>
          <div className="timeline__meta">
            <span className="mono timeline__period">{item.period}</span>
          </div>
          <div className="timeline__body">
            <h3>
              {item.role} <span className="dot-sep">·</span> {item.org}
            </h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
