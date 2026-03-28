function Experience() {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Web Technical & Testing Lead",
      company: "Bentley Systems",
      description: "Developed responsive website using Wordpress,Sitecore,Adobe Commerce, and CSS. Improved site performance by 40% and implemented SEO best practices."
    },
    {
      year: "2018 - 2022",
      role: "Web Developer",
      company: "Bentley Systems",
      description: "Built custom websites for clients using Sitecore, HTML5, and Bootstrap. Managed Google Analytics and Core Web Vitals optimization."
    },
    {
      year: "2016 - 2018",
      role: "Web Developer",
      company: "Brainmine Web Solutions",
      description: "Developed 30+ sites using Html, Css, Javascript, Bootstrap and Wordpress. Gained experience in SEO and web analytics."
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Web Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{exp.year}</div>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;