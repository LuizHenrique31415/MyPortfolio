export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Learning about i18n</h3>
          <p>Learning how to integrate the i18n library into any project.</p>
          <a href="https://github.com/LuizHenrique31415/i18n-project">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Website: My Portfolio</h3>
          <p>
            This project is a personal portfolio website built using Next.js and
            Tailwind CSS. It showcases various sections, including projects and
            contact information.
          </p>
          <a href="#">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Application for financial control and expense management.</p>
          <a href="#">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}
