import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <a
          href="https://www.andrealynnofficial.com/"
          aria-label="Andrea Lynn Beauty Website"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          <div className="project">
            <p className="project-title">Andrea Lynn Beauty</p>
            <img
              alt="Catherine Siller"
              src={require("../../assets/images/my-logo.png")}
            />
          </div>
        </a>
        <a
          href="https://www.centralcoastfacelab.com/"
          aria-label="Central Coast Face Lab Website"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          <div className="project">
            <p className="project-title">Central Coast Face Lab</p>
            <img
              alt="Catherine Siller"
              src={require("../../assets/images/face-lab.png")}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
