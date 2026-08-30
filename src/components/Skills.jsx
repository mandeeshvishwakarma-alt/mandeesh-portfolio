const categories = [
  {
    title: 'Programming',
    items: ['Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'EJS', 'Responsive Web Design'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'H2 Database'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Maven'],
  },
  {
    title: 'Other',
    items: ['Cloudinary', 'JWT', 'Multer'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="wrap">
        <p className="eyebrow">// skills</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <h3>{cat.title}</h3>
              <div className="badge-row">
                {cat.items.map((item) => (
                  <span className="badge" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
