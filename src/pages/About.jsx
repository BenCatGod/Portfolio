import Sidebar, { ANCHORS } from '../components/Sidebar.jsx';
import SocialRow from '../components/SocialRow.jsx';
import Timeline from '../components/Timeline.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';
import Footer from '../components/Footer.jsx';
import useScrollSpy from '../hooks/useScrollSpy.js';
import experience from '../data/experience.js';
import studies from '../data/studies.js';
import skills from '../data/skills.js';

export default function About() {
  const activeAnchor = useScrollSpy(ANCHORS.map((a) => a.id));

  return (
    <main className="layout">
      <Sidebar activeAnchor={activeAnchor} />

      <section className="content">
        <div id="introduction" className="hero">
          <p className="eyebrow mono">Portfolio / 2026</p>
          <h1 className="hero__name">Benya Pengkhuean</h1>
          <p className="hero__role">Computer Science Student</p>

          <SocialRow />

          <p className="bio">
            A dedicated Computer Science student at Bangkok University, 
            seeking an internship opportunity in Frontend Development, 
            Data Analytics, or Data Science. Eager to leverage technical skills,
             contribute to real-world projects, and learn from industry experts.
          </p>
        </div>

       

        <section id="studies" className="section">
          <h2 className="section__title">Studies</h2>
          <Timeline items={studies} />
        </section>

        <section id="skills" className="section section--last">
          <h2 className="section__title">Technical skills</h2>
          <SkillsGrid groups={skills} />
        </section>

        <Footer />
      </section>
    </main>
  );
}
