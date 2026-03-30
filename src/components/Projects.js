import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";

function Projects() {
  const projects = [
    {
      title: "www.bentley.com",
      link: "https://www.bentley.com",
      image: project1,
    },
    {
      title: "www.bentley.cn",
      link: "https://www.bentley.cn",
      image: project2,
    },
    {
      title: "Origo",
      link: "https://www.origoinfotech.com",
      image: project3,
    },
    {
      title: "Blog",
      link: "https://blog.bentley.com/",
      image: project4,
    },
    {
      title: "Puprise",
      link: "https://www.puprise.com/",
      image: project5,
    },
    {
      title: "Brainmine Tech",
      link: "https://www.brainminetech.com/",
      image: project6,
      
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Major Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;