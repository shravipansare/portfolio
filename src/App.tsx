import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav style={{ background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent', borderBottom: scrolled ? '1px solid var(--border-light)' : 'none' }}>
        <div className="container nav-content">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Shravani.</a>
          <div className="nav-links hidden md:flex">
            <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
            <button className="nav-link" onClick={() => scrollTo('projects')}>Work</button>
            <button className="nav-link" onClick={() => scrollTo('experience')}>Experience</button>
            <button className="nav-link" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="container hero">
          <div className="fade-up">
            <span className="hero-sub">Shravani Pansare — Portfolio</span>
            <h1>Engineering <br/><span className="font-serif italic text-[var(--accent-gold)]">intelligent</span> solutions.</h1>
          </div>
          <div className="fade-up delay-1" style={{ marginTop: '3rem', maxWidth: '600px' }}>
            <p>I am a proactive technology student specializing in Data Science, Machine Learning, and highly-performant web applications. I transform complex problems into elegant, real-world systems.</p>
            <a href="#projects" className="link-arrow" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
              View Selected Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="container editorial-grid">
            <div>
              <h2 className="section-label">01 / About</h2>
            </div>
            <div>
              <div className="content-block fade-up">
                <h3>The Intersection of Logic & Design</h3>
                <p style={{ marginTop: '1.5rem' }}>
                  Hello! I am Shravani Pansare. I have a strong foundation in Artificial Intelligence and Data Science, currently pursuing my Bachelor of Engineering at Ajeenkya DY Patil School of Engineering (CGPA 9.05).
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                  My passion lies in bridging the gap between sophisticated machine learning models and robust, user-centric web applications. I don't just write code; I architect systems that solve genuine problems while delivering a premium user experience.
                </p>
              </div>

              <div className="content-block fade-up delay-1">
                <h3>Technical Arsenal</h3>
                <div style={{ display: 'flex', gap: '4rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <span className="metadata">Core Stack</span>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                      <li>Python & Java</li>
                      <li>React & Node.js</li>
                      <li>Prisma & MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <span className="metadata">AI & Data</span>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                      <li>TensorFlow & Scikit-Learn</li>
                      <li>OpenCV & YOLO</li>
                      <li>Pandas & NumPy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="container editorial-grid">
            <div>
              <h2 className="section-label">02 / Selected Work</h2>
            </div>
            <div>
              {/* Project 1 */}
              <div className="content-block fade-up">
                <span className="metadata">2026 — SaaS Architecture</span>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>Ledgerly B2B Platform</h3>
                <p>
                  A premium SaaS application designed for managing enterprise clients, generating automated PDF invoices, and processing online payments securely.
                </p>
                <ul style={{ marginTop: '1.5rem', listStyle: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem' }}>— Engineered a scalable backend API using Node.js, Express, Prisma ORM, and MongoDB.</li>
                  <li style={{ marginBottom: '0.5rem' }}>— Integrated Razorpay checkout, NodeMailer automation, and 2FA security protocols.</li>
                </ul>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
                <a href="https://github.com/shravipansare/ledgerly" target="_blank" rel="noreferrer" className="link-arrow">
                  View Repository <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Project 2 */}
              <div className="content-block fade-up" style={{ marginTop: '6rem' }}>
                <span className="metadata">2024–2025 — Computer Vision</span>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>Intelligent Classroom Surveillance</h3>
                <p>
                  An AI-powered monitoring ecosystem designed for educational environments. It performs real-time face recognition, stress detection, and mobile-phone detection to automate attendance and behavior analysis.
                </p>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">YOLO</span>
                </div>
                <a href="https://github.com/shravipansare/intelligent-classroom" target="_blank" rel="noreferrer" className="link-arrow">
                  View Repository <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Project 3 */}
              <div className="content-block fade-up" style={{ marginTop: '6rem' }}>
                <span className="metadata">2026 — Backend API</span>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>AI Document Analysis API</h3>
                <p>
                  A robust, asynchronous RESTful API architecture built to extract and analyze data from uploaded documents intelligently. It leverages Tesseract OCR for text extraction and Groq LLM for intelligent data processing.
                </p>
                <div className="tags">
                  <span className="tag">FastAPI</span>
                  <span className="tag">OCR</span>
                  <span className="tag">Groq LLM</span>
                </div>
                <a href="https://github.com/shravipansare/doc-analysis-api" target="_blank" rel="noreferrer" className="link-arrow">
                  View Repository <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="container editorial-grid">
            <div>
              <h2 className="section-label">03 / Experience</h2>
            </div>
            <div>
              <ul className="exp-list fade-up">
                <li className="exp-item">
                  <div className="exp-header">
                    <h3 className="exp-title">Product Engineer Intern <span className="exp-company">at MartechAdda</span></h3>
                    <span className="metadata" style={{ margin: 0 }}>May 2026 — Present</span>
                  </div>
                  <p>Architected the "Ledgerly" invoicing SaaS platform. Conducted comprehensive UI/UX analysis and QA testing for MartechAdda V4, identifying critical usability improvements.</p>
                </li>
                
                <li className="exp-item">
                  <div className="exp-header">
                    <h3 className="exp-title">Machine Learning Intern <span className="exp-company">at TechnoHacks EduTech</span></h3>
                    <span className="metadata" style={{ margin: 0 }}>Dec 2023 — Jan 2024</span>
                  </div>
                  <p>Built and trained supervised ML models (Decision Tree, Random Forest, SVM) on real-world datasets for classification and regression tasks, including end-to-end data preprocessing.</p>
                </li>

                <li className="exp-item">
                  <div className="exp-header">
                    <h3 className="exp-title">Software Engineer <span className="exp-company">at OMVSAB IT SOLUTION</span></h3>
                    <span className="metadata" style={{ margin: 0 }}>Jun 2023 — Aug 2023</span>
                  </div>
                  <p>Developed and debugged full-stack applications. Designed and managed scalable databases with SQL Server and MongoDB, improving overall performance and reliability.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section section-end">
          <div className="container editorial-grid">
            <div>
              <h2 className="section-label">04 / Contact</h2>
            </div>
            <div>
              <div className="fade-up">
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Let's build something <br/><span className="italic text-[var(--accent-gold)]">extraordinary.</span></h2>
                <p style={{ marginBottom: '3rem' }}>
                  I'm currently open to new opportunities, machine learning projects, and exciting engineering roles. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="mailto:shravanipansare80@gmail.com" className="link-arrow" style={{ fontSize: '1rem', marginTop: 0 }}>
                    shravanipansare80@gmail.com <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/shravani-pansare-46331830a" target="_blank" rel="noreferrer" className="link-arrow" style={{ fontSize: '1rem', marginTop: 0 }}>
                    LinkedIn Profile <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/shravipansare" target="_blank" rel="noreferrer" className="link-arrow" style={{ fontSize: '1rem', marginTop: 0 }}>
                    GitHub Portfolio <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="footer-text">&copy; {new Date().getFullYear()} Shravani Pansare. Designed with purpose.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
