function Experience() {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Web Technical & Testing Lead",
      company: "Bentley Systems",
      description: "Developed responsive websites using WordPress, Sitecore, Adobe Commerce, Optimizely, Html and CSS. Enhanced site performance by 40%, implemented SEO best practices and Web accessibility by using GA4 and Screaming frog. Created test cases and contributed to both manual and automation testing."
    },
    {
      year: "2018 - 2022",
      role: "Web Developer",
      company: "Bentley Systems",
      description: "Built custom websites for clients using Sitecore, HTML5, and Bootstrap. Managed Google Analytics and Core Web Vitals optimization. Managed multilingual site management and media library assets."
    },
    {
      year: "2016 - 2018",
      role: "Web Developer",
      company: "Brainmine Web Solutions",
      description: "Developed 30+ sites using Html, Css, Javascript, Bootstrap and Wordpress. Gained experience in SEO off-page optimization and On-page optimization and web analytics. Managed web hosting and domain management for clients."
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