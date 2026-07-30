import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import ActivityCard from '../components/ActivityCard.jsx';
import ActivityModal from '../components/ActivityModal.jsx';
import Footer from '../components/Footer.jsx';
import projects from '../data/projects.js';
import activities from '../data/activities.js';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const isModalOpen = selectedProject || selectedActivity;

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedActivity(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <main className="layout layout--work">
      <section className="work-header">
        <h1 className="work-header__title">Projects &amp; case studies</h1>
      </section>

      <section className="project-grid" aria-label="Project list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
        ))}
      </section>

      <section className="section">
        <h2 className="work-header__title">Activity</h2>
      </section>

      <section className="activity-grid" aria-label="Activity list">
        <div className="project-grid" aria-label="Activity list">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} onSelect={setSelectedActivity} />
          ))}
        </div>
      </section>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ActivityModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
    </main>
  );
}