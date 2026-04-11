import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Get in touch for collaborations or opportunities.</p>
      <div className="contact-actions">
        <a href="mailto:nitindhiman86@gmail.com" className="btn">
          Email Me
        </a>
        <a href="tel:+917018567274" className="btn">
          Call Me
        </a>
      </div>

      <div className="social-links" aria-label="Social media links">
        <a
          href="https://www.linkedin.com/in/nitin-dhiman-b6b5a198/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/nitindhiman77/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;