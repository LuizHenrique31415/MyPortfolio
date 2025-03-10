import "../../style/Page.css"; // Importando o arquivo CSS
export default function Home() {
  return (
    <main className="container">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Hello, I am Luiz!</h1>
        <p>
          Developer passionate about technology and creating innovative
          solutions.
        </p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am 23 years old, born and raised in São Paulo. Currently, I am
          specializing in Systems Analysis and Development at Unisul University.
          I chose the IT field due to my passion for games and technology. My
          goal is to pursue a career in Back-end development and I would like to
          work in large software development companies.
        </p>
      </section>

      {/* Projects Section */}
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
              This project is a personal portfolio website built using Next.js
              and Tailwind CSS. It showcases various sections, including
              projects and contact information.
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

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact</h2>
        <p>
          If you want to talk about projects, opportunities, or just chat about
          technology, send me a message!
        </p>
        <a href="mailto:luiz@email.com">Send message</a>
      </section>
    </main>
  );
}
