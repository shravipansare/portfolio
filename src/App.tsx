import { ArrowRight, ExternalLink, Code2, Database, Brain } from 'lucide-react';
import './index.css';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>

      <nav>
        <div className="container nav-content">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Shravani.</a>
          <div className="nav-links hidden md:flex">
            <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
            <button className="nav-link" onClick={() => scrollTo('skills')}>Skills</button>
            <button className="nav-link" onClick={() => scrollTo('projects')}>Projects</button>
            <button className="nav-link" onClick={() => scrollTo('experience')}>Experience</button>
            <button className="nav-link" onClick={() => scrollTo('certifications')}>Certificates</button>
            <a href="/Shravani_Resume.pdf" target="_blank" className="btn-primary" style={{ padding: '0.5rem 1.5rem', marginTop: 0 }}>Resume</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="container hero">
          <div className="hero-content">
            <div className="fade-up">
              <span className="hero-sub">Product Engineer & Data Scientist</span>
              <h1>Building <span className="gradient-text">intelligent</span> products for the future.</h1>
              <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
                Hi, I'm Shravani Pansare. I specialize in Data Science, Machine Learning, and highly-performant web applications. I turn complex logic into beautiful, user-centric software.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => scrollTo('projects')}>
                  View My Work <ArrowRight className="w-4 h-4" />
                </button>
                <a href="/Shravani_Resume.pdf" target="_blank" className="btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & SKILLS SECTION */}
        <section id="about" className="section container">
          <div className="grid-2">
            <div className="glass-panel fade-up">
              <h3>About Me</h3>
              <p style={{ marginTop: '1rem' }}>
                I am a proactive technology student currently pursuing my B.E. in AI & Data Science (CGPA 9.05). My passion lies in bridging the gap between sophisticated machine learning models and robust web applications.
              </p>
              <p style={{ marginTop: '1rem' }}>
                When I'm not training models or building APIs, I'm constantly learning new frameworks and pushing the boundaries of what's possible on the web.
              </p>
            </div>
            
            <div className="glass-panel fade-up delay-1">
              <h3>Education</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>B.E. in AI & Data Science</h4>
                <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>Expected Graduation: 2026</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>CGPA: 9.05</p>
              </div>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>High School</h4>
                <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>Science Stream</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>Percentage: 92%</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section container">
          <h2 className="fade-up" style={{ textAlign: 'center' }}>Technical Skills</h2>
          
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="glass-panel fade-up">
              <Code2 className="w-8 h-8 mb-4" style={{ color: 'var(--accent-purple)' }} />
              <h3 style={{ marginBottom: '1rem' }}>Languages & Web</h3>
              <div className="tags">
                {['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-panel fade-up delay-1">
              <Brain className="w-8 h-8 mb-4" style={{ color: 'var(--accent-pink)' }} />
              <h3 style={{ marginBottom: '1rem' }}>Machine Learning & AI</h3>
              <div className="tags">
                {['OpenCV', 'YOLO', 'Face Recognition', 'Scikit-Learn', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib'].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-panel fade-up delay-2">
              <Database className="w-8 h-8 mb-4" style={{ color: 'var(--accent-cyan)' }} />
              <h3 style={{ marginBottom: '1rem' }}>Databases & Tools</h3>
              <div className="tags">
                {['MySQL', 'MongoDB', 'SQL Server', 'Git & GitHub', 'VS Code', 'Power BI', 'System Design'].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section container">
          <h2 className="fade-up" style={{ textAlign: 'center' }}>Selected Projects</h2>
          
          <div className="grid-2" style={{ marginTop: '3rem' }}>
            {/* Project 1 */}
            <div className="glass-panel fade-up">
              <h3>Ledgerly B2B Platform</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                A premium SaaS application designed for managing enterprise clients, generating automated PDF invoices, and processing online payments securely.
              </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <a href="https://github.com/shravipansare/ledgerly" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                View Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="glass-panel fade-up delay-1">
              <h3 style={{ fontSize: '1.4rem' }}>Intelligent Surveillance</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                An AI-powered monitoring ecosystem. It performs real-time face recognition, stress detection, and mobile-phone detection to automate attendance.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">OpenCV</span>
                <span className="tag">YOLO</span>
              </div>
              <a href="https://github.com/shravipansare/intelligent-classroom" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                View Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            {/* Project 3 */}
            <div className="glass-panel fade-up">
              <h3>Visage Check Smart Attendance</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                A streamlined attendance management system utilizing AI face detection. It simplifies student roll calls through rapid facial processing and analytics.
              </p>
              <div className="tags">
                <span className="tag">Face Recognition</span>
                <span className="tag">Python</span>
                <span className="tag">MediaPipe</span>
              </div>
              <a href="https://github.com/shravipansare/visage-check" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                View Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Project 4 */}
            <div className="glass-panel fade-up delay-1">
              <h3>AI Document Analysis API</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                A robust RESTful API built to extract and analyze data from uploaded documents intelligently. Leverages Tesseract OCR and Groq LLM.
              </p>
              <div className="tags">
                <span className="tag">FastAPI</span>
                <span className="tag">OCR</span>
                <span className="tag">Groq LLM</span>
              </div>
              <a href="https://github.com/shravipansare/doc-analysis-api" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                View Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Project 5 */}
            <div className="glass-panel fade-up">
              <h3>MartechAdda CRM</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                A comprehensive customer relationship management platform. As part of the core engineering team, I architected and developed the complex Proposal generation module.
              </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Team Collaboration</span>
                <span className="tag">CRM</span>
              </div>
              <div style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', background: 'rgba(0,0,0,0.05)', color: 'var(--text-secondary)', display: 'inline-block', borderRadius: '999px', fontWeight: 600, border: '1px solid var(--glass-border)' }}>
                🔒 Private Repository
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section container">
          <h2 className="fade-up" style={{ textAlign: 'center' }}>Experience</h2>
          
          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <div className="glass-panel fade-up" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Product Engineer Intern</h3>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>May 2026 — Present</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>MartechAdda</p>
              <p>Architected the "Ledgerly" invoicing SaaS platform. Conducted comprehensive UI/UX analysis and QA testing, identifying critical usability improvements.</p>
            </div>

            <div className="glass-panel fade-up delay-1" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Machine Learning Intern</h3>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Dec 2023 — Jan 2024</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>TechnoHacks EduTech</p>
              <p>Built and trained supervised ML models (Decision Tree, SVM) on real-world datasets for classification and regression tasks.</p>
            </div>

            <div className="glass-panel fade-up delay-2" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Software Engineer Intern</h3>
                <span style={{ color: 'var(--accent-pink)', fontWeight: 600 }}>Jun 2023 — Aug 2023</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>OMVSAB IT SOLUTION</p>
              <p>Developed and debugged full-stack applications. Designed and managed scalable databases with SQL Server and MongoDB, improving overall performance and reliability.</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section container">
          <h2 className="fade-up" style={{ textAlign: 'center' }}>Certifications & Awards</h2>
          
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="glass-panel glass-panel-img fade-up">
              <img src="/certs/powerbi.png" alt="Power BI Certificate" className="cert-image" />
              <div className="cert-content">
                <h3 style={{ fontSize: '1.25rem' }}>Data to Dashboard in Power BI</h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  ISO 9001:2015 Certified program. Completed comprehensive training in data visualization and reporting. (June 2026)
                </p>
              </div>
            </div>

            <div className="glass-panel glass-panel-img fade-up delay-1">
              <img src="/certs/aws.png" alt="AWS Academy Certificate" className="cert-image" />
              <div className="cert-content">
                <h3 style={{ fontSize: '1.25rem' }}>AWS Academy Graduate</h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  AWS Academy Cloud Foundations. Certified in cloud concepts, security, architecture, and pricing. (June 2026)
                </p>
              </div>
            </div>

            <div className="glass-panel fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Third Position - ICRTAIDS 2025</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                International Conference On Recent Trends (Green Skills & AI). Awarded for exceptional research presentation and technical innovation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shravani Pansare. Built with precision.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <a href="mailto:shravanipansare80@gmail.com" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>Email</a>
            <a href="https://github.com/shravipansare" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>GitHub</a>
            <a href="https://linkedin.com/in/shravani-pansare-46331830a" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
