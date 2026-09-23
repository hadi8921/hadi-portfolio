import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  /* =========================
     SERVICES
  ========================= */

  const services = [
    {
      icon: "bi-code-slash",
      title: "Website Development",
      description:
        "Modern, responsive websites and landing pages built with clean and practical front-end technologies.",
      tags: ["Business Websites", "Landing Pages", "Responsive Design"],
    },
    {
      icon: "bi-bag",
      title: "E-commerce Stores",
      description:
        "E-commerce interfaces, Shopify store setup, product organization and theme customization.",
      tags: ["Shopify", "Product Setup", "Store Design"],
    },
    {
      icon: "bi-gear",
      title: "Automation & No-Code",
      description:
        "Workflow automation concepts using no-code tools to reduce repetitive work and improve productivity.",
      tags: ["n8n", "Make", "Google Sheets"],
    },
    {
      icon: "bi-vector-pen",
      title: "Brand & Creative Design",
      description:
        "Modern visual concepts including logos, brand identities, social media graphics and digital creatives.",
      tags: ["Logo Design", "Brand Identity", "Social Media"],
    },
  ];

  /* =========================
     SKILLS
  ========================= */

  const skills = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      icon: "bi-bag",
      title: "E-commerce & CMS",
      items: [
        "Shopify",
        "WordPress",
        "Elementor",
        "Theme Customization",
        "Product Setup",
      ],
    },
    {
      icon: "bi-gear",
      title: "Automation & AI",
      items: [
        "n8n",
        "Make",
        "Google Sheets",
        "Workflow Design",
        "API Integration",
        "AI Tools",
      ],
    },
    {
      icon: "bi-palette",
      title: "Design & Branding",
      items: [
        "Figma",
        "Canva",
        "Photoshop",
        "Illustrator",
        "UI/UX Design",
        "Logo Design",
        "Brand Identity",
        "Social Media Design",
        "Video Editing",
      ],
    },
  ];

  /* =========================
     PROJECTS
  ========================= */

  const projects = [
    {
      number: "01",
      type: "Brand Identity",
      title: "Aerova HVAC",
      subtitle: "Self-Initiated Brand Identity Concept",

      shortDescription:
        "A modern HVAC identity concept exploring logo design, typography, colors and real-world brand applications.",

      description:
        "Aerova HVAC is a self-initiated brand identity concept created to explore how a technical service business can communicate reliability, professionalism and modernity through a cohesive visual identity.",

      goal:
        "Create a professional HVAC identity that feels modern and technical while avoiding an overly generic visual direction.",

      role:
        "Brand Concept • Logo Direction • Visual Identity • Mockup Presentation",

      features: [
        "Primary logo system",
        "Brand mark",
        "Typography direction",
        "Color palette",
        "Service vehicle application",
        "Uniform application",
        "Business card concept",
        "Exterior signage",
      ],

      tags: ["Logo Design", "Brand Identity", "Mockups"],

      image: "/projects/aerova-hvac/cover.png",

      status: "Concept Project",
    },

    {
      number: "02",
      type: "E-commerce",
      title: "NOVA Lifestyle Store",
      subtitle: "Self-Initiated E-commerce Concept",

      shortDescription:
        "A modern home and lifestyle storefront concept focused on clean product discovery and responsive e-commerce UI.",

      description:
        "NOVA is a self-initiated e-commerce concept for home, kitchen and lifestyle products. The project explores a clean visual system, structured product discovery and a responsive shopping experience.",

      goal:
        "Design a premium-looking storefront that makes products easy to explore while communicating trust, simplicity and value.",

      role:
        "UI/UX Concept • E-commerce Design • Responsive Layout • Visual Direction",

      features: [
        "Responsive storefront",
        "Hero section",
        "Product categories",
        "Featured products",
        "Best-seller section",
        "Trust indicators",
        "Promotional sections",
        "Mobile shopping experience",
      ],

      tags: ["E-commerce", "UI/UX", "Responsive Design"],

      image: "/projects/nova/cover.png",

      status: "Concept Project",
    },

    {
      number: "03",
      type: "Web Development",
      title: "Personal Portfolio",
      subtitle: "Personal Web Project",

      shortDescription:
        "A responsive portfolio built to present my skills, services, projects and contact information.",

      description:
        "This portfolio is a personal web project designed and developed to create a clear online presence for my digital work and ongoing learning.",

      goal:
        "Build a responsive portfolio that presents my work clearly across desktop, tablet and mobile devices.",

      role:
        "Front-end Development • Responsive Design • UI Implementation",

      features: [
        "Responsive layout",
        "Service presentation",
        "Skills section",
        "Project showcase",
        "Contact integration",
        "WhatsApp integration",
        "Social links",
        "Downloadable CV",
      ],

      tags: ["React", "CSS", "Bootstrap", "Responsive"],

      image: null,

      status: "Live Project",
    },
  ];

  /* =========================
     LINKS
  ========================= */

  const linkedInURL =
    "https://www.linkedin.com/in/hadi-aruval-/";

  const instagramURL =
    "https://www.instagram.com/haa.dyy_/";

  const whatsappURL =
    "https://wa.me/918921994596?text=Hi%20Hadi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  const emailURL =
    "mailto:muhammedhadi887@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Hadi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  /* =========================
     PROJECT MODAL
  ========================= */

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar-custom">

        <a href="#home" className="logo">
          H<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="talk-btn">
          Let's Talk
          <i className="bi bi-arrow-right"></i>
        </a>

      </nav>

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="hello">
              <span></span>
              Hi, I'm
            </p>

            <h1>Hadi</h1>

            <h2>Building Ideas into Reality</h2>

            <p className="specialties">
              Websites
              <b>|</b>
              E-commerce
              <b>|</b>
              Automation
              <b>|</b>
              Design
            </p>

            <p className="hero-description">
              I build modern websites, online store experiences, brand
              concepts and practical digital solutions. I enjoy combining
              technology, design and automation to turn ideas into useful
              digital experiences.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View My Work
                <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href="/Hadi-CV.pdf"
                className="secondary-btn"
                download
              >
                Download CV
                <i className="bi bi-download"></i>
              </a>

            </div>

            <div className="socials">

              <a
                href={linkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href={instagramURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href={emailURL}
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

            </div>

          </div>

          <div className="hero-image-area">

            <div className="portrait-circle"></div>

            <img
              src="/hadi.png"
              alt="Hadi"
              className="hero-image"
            />

            <div className="hero-words">
              Learn
              <br />
              Build
              <br />
              Automate
              <br />
              Grow
            </div>

            <div className="availability">

              <span></span>

              <div>
                <strong>Open to Opportunities</strong>
                <small>Freelance • Remote</small>
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            SERVICES
        ========================= */}

        <section id="services" className="section">

          <div className="section-heading">
            <span className="heading-line"></span>
            <h2>Services</h2>
            <p>Practical digital solutions for modern businesses</p>
          </div>

          <div className="service-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="tags">

                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section id="skills" className="section">

          <div className="section-heading">
            <span className="heading-line"></span>
            <h2>Skills</h2>

            <p>
              Tools and technologies I use to build,
              design and automate
            </p>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (

              <article
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-title">

                  <div className="skill-icon">
                    <i className={`bi ${skill.icon}`}></i>
                  </div>

                  <h3>{skill.title}</h3>

                </div>

                <div className="skill-tags">

                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section id="projects" className="section projects-section">

          <div className="section-heading">
            <span className="heading-line"></span>
            <h2>Featured Work</h2>
            <p>Selected projects, concepts and experiments</p>
          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>

                {project.image ? (

                  <button
                    className="project-image-wrapper project-image-button"
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title} case study`}
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />

                    <div className="project-image-overlay">
                      <span>
                        View Case Study
                      </span>

                      <i className="bi bi-arrow-up-right"></i>
                    </div>

                  </button>

                ) : (

                  <div className="project-placeholder">

                    <div>
                      <i className="bi bi-code-slash"></i>
                      <span>Live Project</span>
                    </div>

                  </div>

                )}

                <div className="project-status">

                  <span></span>

                  {project.status}

                </div>

                <h3>{project.title}</h3>

                <p>{project.shortDescription}</p>

                <div className="tags">

                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}

                </div>

                <button
                  className="project-link"
                  onClick={() => openProject(project)}
                >
                  View Case Study
                  <i className="bi bi-arrow-up-right"></i>
                </button>

              </article>

            ))}

          </div>

        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-box">

            <div className="contact-icon">
              <i className="bi bi-chat-dots"></i>
            </div>

            <div className="contact-copy">

              <span>LET'S WORK TOGETHER</span>

              <h2>
                Let's Build Something Great Together
              </h2>

              <p>
                Have a project, freelance opportunity or collaboration
                in mind? Choose the easiest way to reach me.
              </p>

            </div>

            <div className="contact-actions">

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >

                <i className="bi bi-whatsapp"></i>

                <div>
                  <small>Message me on</small>
                  <strong>WhatsApp</strong>
                </div>

                <i className="bi bi-arrow-up-right"></i>

              </a>

              <a
                href={emailURL}
                className="email-btn"
              >

                <i className="bi bi-envelope"></i>

                <div>
                  <small>Send me an</small>
                  <strong>Email</strong>
                </div>

                <i className="bi bi-arrow-up-right"></i>

              </a>

            </div>

          </div>

          <div className="direct-contact">

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
              +91 89219 94596
            </a>

            <a href={emailURL}>
              <i className="bi bi-envelope"></i>
              muhammedhadi887@gmail.com
            </a>

          </div>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <a href="#home" className="logo">
              H<span>.</span>
            </a>

            <p className="footer-motto">
              Learn <b>•</b> Build <b>•</b> Automate <b>•</b> Grow
            </p>

          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">

            <a
              href={linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href={emailURL}
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Hadi. All rights reserved.
          </span>

          <span>
            Better Ideas <b>•</b> Better Solutions
          </span>

        </div>

      </footer>

      {/* =========================
          CASE STUDY MODAL
      ========================= */}

      {selectedProject && (

        <div
          className="case-overlay"
          onClick={closeProject}
        >

          <div
            className="case-study"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="case-close"
              onClick={closeProject}
              aria-label="Close case study"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="case-header">

              <div>

                <span className="case-number">
                  PROJECT {selectedProject.number}
                </span>

                <p className="case-type">
                  {selectedProject.subtitle}
                </p>

                <h2>
                  {selectedProject.title}
                </h2>

                <p className="case-intro">
                  {selectedProject.description}
                </p>

              </div>

              <div className="case-status">
                <span></span>
                {selectedProject.status}
              </div>

            </div>

            {selectedProject.image && (

              <div className="case-hero-image">

                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} presentation`}
                />

              </div>

            )}

            <div className="case-info-grid">

              <div className="case-info-card">

                <span>01</span>

                <h3>Project Goal</h3>

                <p>
                  {selectedProject.goal}
                </p>

              </div>

              <div className="case-info-card">

                <span>02</span>

                <h3>My Role</h3>

                <p>
                  {selectedProject.role}
                </p>

              </div>

            </div>

            <div className="case-features">

              <div className="case-section-title">

                <span></span>

                <div>
                  <small>PROJECT DETAILS</small>
                  <h3>What I Worked On</h3>
                </div>

              </div>

              <div className="case-feature-grid">

                {selectedProject.features.map(
                  (feature, index) => (

                    <div
                      className="case-feature"
                      key={feature}
                    >

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{feature}</p>

                    </div>

                  )
                )}

              </div>

            </div>

            <div className="case-tools">

              <span>Project Areas</span>

              <div className="case-tags">

                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

            </div>

            <div className="case-bottom">

              <div>

                <small>
                  INTERESTED IN WORKING TOGETHER?
                </small>

                <h3>
                  Let's build something great.
                </h3>

              </div>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
                <i className="bi bi-arrow-up-right"></i>
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;