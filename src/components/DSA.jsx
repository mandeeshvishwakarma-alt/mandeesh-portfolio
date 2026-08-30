const topics = [
  'Arrays',
  'Functions',
  'Binary Search',
  'Rotated Sorted Array Search',
  'Stock Buy & Sell',
  'Array Problem Solving',
  'Basic Algorithmic Problem Solving',
]

function DSA() {
  return (
    <section id="dsa" className="section">
      <div className="wrap">
        <p className="eyebrow">// java_dsa.java</p>
        <h2 className="section-title">Java DSA &amp; Problem Solving</h2>
        <p className="dsa-desc">
          I practice Data Structures &amp; Algorithms primarily using Java, focusing
          on developing strong problem-solving fundamentals and algorithmic
          thinking.
        </p>
        <div className="dsa-grid">
          {topics.map((topic) => (
            <div className="dsa-card" key={topic}>{topic}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DSA
