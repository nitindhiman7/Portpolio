function Projects() {
  const projects = [
    {
      title: "www.bentley.com",
      link: "https://www.bentley.com",
      image: "/images/project1.jpg",
    },
    {
      title: "www.bentley.cn",
      link: "https://www.bentley.cn",
      image: "/images/project2.jpg",
    },
    {
      title: "Origo",
      link: "https://www.origoinfotech.com",
      image: "/images/project3.jpg",
    },
    {
      title: "Blog",
      link: "https://blog.bentley.com/",
      image: "/images/project4.jpg",
    },
    {
      title: "Puprise",
      link: "https://www.puprise.com/",
      image: "/images/project5.jpg",
    },
    {
      title: "Brainmine Tech",
      link: "https://www.brainminetech.com/",
      image: "/images/project6.jpg",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
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