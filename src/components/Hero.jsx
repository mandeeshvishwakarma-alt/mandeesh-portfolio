function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-inner">
        <p className="eyebrow">// computer science student · web developer</p>
        <h1>
          Hi, I'm <span>Mandeesh Vishwakarma</span>
        </h1>
        <h2 className="hero-role">Computer Science Engineering Student & Web Developer</h2>
        <p className="hero-desc">
          I build practical and responsive web applications while developing strong
          Java and Data Structures &amp; Algorithms skills.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="https://github.com/mandeeshvishwakarma-alt" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
          <a href="/Mandeesh_Vishwakarma_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">Download Resume</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
