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
      title: "en.virtuosity.com",
      link: "https://en.virtuosity.com",
      image: "/images/project3.jpg",
    },
    {
      title: "en.virtuosity.com",
      link: "https://en.virtuosity.com",
      image: "/images/project4.jpg",
    },
    {
      title: "en.virtuosity.com",
      link: "https://en.virtuosity.com",
      image: "/images/project5.jpg",
    },
    {
      title: "en.virtuosity.com",
      link: "https://en.virtuosity.com",
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