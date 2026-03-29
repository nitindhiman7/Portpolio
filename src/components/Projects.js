function Projects() {
  const projects = [
    {
      title: "www.bentley.com",
      link: "https://www.bentley.com",
      image: "/Portpolio/images/project1.jpg",
    },
    {
      title: "www.bentley.cn",
      link: "https://www.bentley.cn",
      image: "/Portpolio/images/project2.jpg",
    },
    {
      title: "Origo",
      link: "https://www.origoinfotech.com",
      image: "/Portpolio/images/project3.jpg",
    },
    {
      title: "Blog",
      link: "https://blog.bentley.com/",
      image: "/Portpolio/images/project4.jpg",
    },
    {
      title: "Puprise",
      link: "https://www.puprise.com/",
      image: "/Portpolio/images/project5.jpg",
    },
    {
      title: "Brainmine Tech",
      link: "https://www.brainminetech.com/",
      image: "/Portpolio/images/project6.jpg",
      
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