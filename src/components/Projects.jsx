const projects = [
  {
    name: 'Role-Based Cloud File Sharing System',
    description:
      'A role-based cloud file-sharing system designed to allow users to securely upload and manage files while controlling access according to user roles. Built with Spring Boot for the backend, MySQL/H2 for data management, and Cloudinary for cloud-based file storage.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'H2', 'Cloudinary'],
    skills: ['Backend development', 'Database integration', 'Role-based access control', 'File management'],
    github: 'https://github.com/mandeeshvishwakarma-alt',
    demo: null,
  },
  {
    name: 'Spotify Clone',
    description:
      'A Spotify-inspired web interface created to practice frontend development, UI implementation, layout design and responsive web development.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    skills: ['Frontend development', 'Responsive design', 'UI implementation'],
    github: 'https://github.com/mandeeshvishwakarma-alt',
    demo: null,
  },
  {
    name: 'Camera Studio Website',
    description:
      'A modern responsive photography/camera studio website created to practice frontend development, structured layouts, styling and responsive design.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    skills: ['Responsive web design', 'Frontend development', 'UI design'],
    github: 'https://github.com/mandeeshvishwakarma-alt',
    demo: null,
  },
  {
    name: 'Mini Banking System Application',
    description:
      'A mini banking system application created to practice programming logic and implementation of basic banking-related operations.',
    stack: [],
    skills: ['Programming logic', 'Core application logic'],
    github: 'https://github.com/mandeeshvishwakarma-alt',
    demo: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="wrap">
        <p className="eyebrow">// projects</p>
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              {p.stack.length > 0 && (
                <div className="badge-row">
                  {p.stack.map((s) => (
                    <span className="badge" key={s}>{s}</span>
                  ))}
                </div>
              )}
              <p className="project-skills-label">Skills demonstrated</p>
              <ul className="project-skills">
                {p.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">GitHub</a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
