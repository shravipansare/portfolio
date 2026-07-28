import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Mail, ExternalLink, Code, Briefcase, FileText, Phone, MapPin, Award, GraduationCap, Download } from 'lucide-react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 300;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav>
        <div className="container nav-content">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Shravani.</a>
          <div className="nav-links hidden md:flex">
            <button className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollTo('about')}>About</button>
            <button className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollTo('skills')}>Skills</button>
            <button className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollTo('experience')}>Experience</button>
            <button className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollTo('projects')}>Projects</button>
            <button className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} onClick={() => scrollTo('certifications')}>Certifications</button>
            <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="container hero">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="hero-greeting">Hi, my name is</motion.p>
            <motion.h1 variants={fadeInUp} className="hero-title">Shravani Jivan Pansare.</motion.h1>
            <motion.h2 variants={fadeInUp} className="hero-subtitle">I build intelligent solutions.</motion.h2>
            <motion.p variants={fadeInUp} className="hero-desc">
              I am a proactive and fast-learning technology student with hands-on experience in Data Science, Machine Learning, and application development. Passionate about improving performance and continuously expanding my technical skills.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-buttons">
              <a href="#" className="btn btn-primary" download="Shravani_Pansare_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
                <Code className="w-5 h-5" />
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="section-title">
              <span>About Me</span>
            </h2>
            <div className="bento-grid max-w-5xl mx-auto">
              {/* Main Intro - spans full width on mobile, 8 cols on desktop */}
              <div className="bento-item bento-span-8">
                <h3 className="text-2xl font-bold mb-4 text-[#c084fc]">Who I Am</h3>
                <p className="text-lg text-secondary mb-4">
                  Hello! My name is Shravani Pansare and I enjoy creating things that live on the internet and making them intelligent. 
                  I have a strong foundation in Artificial Intelligence and Data Science, currently pursuing my Bachelor of Engineering at Ajeenkya DY Patil School of Engineering.
                </p>
                <p className="text-lg text-secondary">
                  I am passionate about building intelligent solutions, from sophisticated machine learning models to robust web applications. I love taking complex problems and turning them into efficient, real-world systems.
                </p>
              </div>

              {/* Quick Stats/Info - spans 4 cols on desktop */}
              <div className="bento-item bento-span-4 bg-gradient-to-br from-[rgba(34,211,238,0.1)] to-[rgba(192,132,252,0.1)] border-[rgba(34,211,238,0.2)] flex flex-col justify-center items-center text-center">
                <Award className="w-16 h-16 text-[#22d3ee] mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">9.05</h3>
                <p className="text-secondary font-medium">Engineering CGPA</p>
              </div>

              {/* Education 1 */}
              <div className="bento-item bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgba(34,211,238,0.1)] rounded-xl">
                    <GraduationCap className="text-[#22d3ee] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">B.E. in AI & Data Science</h4>
                    <p className="text-secondary text-sm font-medium mb-2">Ajeenkya DY Patil School of Engineering</p>
                    <span className="text-xs font-mono text-[#c084fc] bg-[rgba(192,132,252,0.1)] px-2 py-1 rounded">2024 - 2027</span>
                  </div>
                </div>
              </div>

              {/* Education 2 */}
              <div className="bento-item bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgba(192,132,252,0.1)] rounded-xl">
                    <GraduationCap className="text-[#c084fc] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Diploma in Computer Engineering</h4>
                    <p className="text-secondary text-sm font-medium mb-2">Government Polytechnic Pune</p>
                    <span className="text-xs font-mono text-[#22d3ee] bg-[rgba(34,211,238,0.1)] px-2 py-1 rounded">2021 - 2024 (86.53%)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">
              <span>Technical Skills</span>
            </h2>
            
            <motion.div className="bento-grid max-w-5xl mx-auto" variants={staggerContainer}>
              <motion.div className="bento-item bento-span-12 md:bento-span-4" variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Code className="text-[#c084fc]"/> Languages & Web</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'React.js'].map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="bento-item bento-span-12 md:bento-span-8 bg-gradient-to-br from-transparent to-[rgba(34,211,238,0.05)] border-[rgba(34,211,238,0.2)]" variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Monitor className="text-[#c084fc]"/> Machine Learning & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenCV', 'YOLO', 'MediaPipe', 'Face Recognition', 'Scikit-Learn', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'].map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="bento-item bento-span-12" variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Briefcase className="text-[#c084fc]"/> Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'MongoDB', 'SQL Server', 'Git & GitHub', 'VS Code', 'Jupyter', 'Power BI', 'n8n', 'ArduinoIDE', 'System Design'].map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">
              <span>Work Experience</span>
            </h2>
            
            <div className="timeline-container">
              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="card-glass p-6 border-l-4 border-[#22d3ee]">
                  <span className="timeline-date text-[#22d3ee]">May 2026 - Present</span>
                  <h3 className="text-2xl font-bold mb-1 text-white flex items-center gap-2">Product Engineer Intern <span className="bg-[rgba(34,211,238,0.2)] text-[#22d3ee] text-xs px-2 py-1 rounded-full uppercase tracking-wider">Latest</span></h3>
                  <p className="text-[#c084fc] font-medium mb-4">MartechAdda</p>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Conducted comprehensive UI/UX analysis and QA testing for MartechAdda V4, identifying critical usability improvements and system bugs.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Architected and developed "Ledgerly", a modern B2B invoicing and CRM SaaS platform using React, Node.js, Express, and MongoDB.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Integrated enterprise-grade features including Razorpay payment gateways, NodeMailer SMTP automation, and 2FA security.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="card-glass p-6">
                  <span className="timeline-date">Dec 2023 - Jan 2024</span>
                  <h3 className="text-2xl font-bold mb-1 text-white">Machine Learning Intern</h3>
                  <p className="text-[#c084fc] font-medium mb-4">TechnoHacks EduTech</p>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Built and trained supervised ML models (Decision Tree, Random Forest, SVM) on real-world datasets for classification and regression tasks.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Performed end-to-end data preprocessing: handled missing values, feature scaling, label encoding, and train-test splitting using Pandas and Scikit-learn.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="card-glass p-6">
                  <span className="timeline-date">Jun 2023 - Aug 2023</span>
                  <h3 className="text-2xl font-bold mb-1 text-white">Software Engineer</h3>
                  <p className="text-[#c084fc] font-medium mb-4">OMVSAB IT SOLUTION</p>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Developed and debugged applications using Java, Python, JavaScript, HTML, and CSS.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Designed and managed databases with SQL Server and MongoDB, improving performance and reliability.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0 mt-2"/> Collaborated in team discussions and conducted code reviews to ensure code quality and maintainability.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">
              <span>Featured Projects</span>
            </h2>
            
            <div className="grid-2">
              <motion.div className="card-glass flex flex-col border border-[rgba(34,211,238,0.3)] relative overflow-hidden" variants={fadeInUp}>
                <div className="absolute top-0 right-0 bg-[#22d3ee] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">NEW</div>
                <div className="flex justify-between items-start mb-2 mt-2">
                  <h3 className="text-2xl font-bold text-white">Ledgerly SaaS</h3>
                  <a href="https://github.com/shravipansare/ledgerly" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#22d3ee] transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="text-[#22d3ee] font-mono text-sm mb-6">2026 • Full Stack Web Application</p>
                <ul className="space-y-3 text-secondary mb-8 flex-grow">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Built a premium SaaS application for managing clients, generating PDF invoices, and processing online payments.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Engineered a scalable backend API using Node.js, Express, Prisma ORM, and MongoDB with secure JWT authentication.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Integrated Razorpay checkout, NodeMailer for automated email delivery, and Two-Factor Authentication (2FA).</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {['React', 'Node.js', 'Prisma', 'MongoDB', 'Razorpay'].map(tech => (
                    <span key={tech} className="text-xs text-white bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="card-glass flex flex-col" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Intelligent Classroom Surveillance System</h3>
                  <a href="https://github.com/shravipansare/intelligent-classroom" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#22d3ee] transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="text-[#22d3ee] font-mono text-sm mb-6">2024 - 2025</p>
                <ul className="space-y-3 text-secondary mb-8 flex-grow">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Developed an AI-powered system with face recognition, stress detection, and mobile-phone detection.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Used OpenCV, CNN models, and YOLO for real-time classroom monitoring.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Automated attendance tracking, behavior analysis, and generated alerts.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {['Python', 'OpenCV', 'CNN', 'YOLO'].map(tech => (
                    <span key={tech} className="text-xs text-white bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="card-glass flex flex-col" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Visage Check Smart Attendance</h3>
                  <a href="https://github.com/shravipansare/visage-check" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#22d3ee] transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="text-[#22d3ee] font-mono text-sm mb-6">2023 - 2024</p>
                <ul className="space-y-3 text-secondary mb-8 flex-grow">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Built a face-recognition system to automate student attendance, reducing manual work and improving accuracy.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Enabled adding/deleting student records with real-time tracking.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Displayed attendance graphs and automatically highlighted students with less than 75% attendance.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {['Face Recognition', 'Data Viz', 'Python'].map(tech => (
                    <span key={tech} className="text-xs text-white bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>


              <motion.div className="card-glass flex flex-col" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">AI Document Analysis API</h3>
                  <a href="https://github.com/shravipansare/doc-analysis-api" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#22d3ee] transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="text-[#22d3ee] font-mono text-sm mb-6">2026</p>
                <ul className="space-y-3 text-secondary mb-8 flex-grow">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Built an AI-powered API to extract and analyze data from uploaded documents.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Integrated Tesseract OCR for text extraction and Groq LLM for intelligent data processing.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0 mt-2"/> Designed a robust, asynchronous RESTful API architecture using FastAPI.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {['Python', 'FastAPI', 'Tesseract OCR', 'Groq LLM'].map(tech => (
                    <span key={tech} className="text-xs text-white bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS & AWARDS SECTION */}
        <section id="certifications" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">
              <span>Certifications & Awards</span>
            </h2>
            
            <div className="bento-grid max-w-5xl mx-auto">
              {/* Award */}
              <div className="bento-item bento-span-12 md:bento-span-6 bg-gradient-to-br from-transparent to-[rgba(192,132,252,0.05)] border-[rgba(192,132,252,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgba(192,132,252,0.1)] rounded-xl">
                    <Award className="text-[#c084fc] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Third Position - ICRTAIDS 2025</h4>
                    <p className="text-secondary text-sm font-medium mb-3">International Conference On Recent Trends • Green Skills & Artificial Intelligence (Edunet Foundation)</p>
                    <span className="text-xs font-mono text-[#c084fc] bg-[rgba(192,132,252,0.1)] px-2 py-1 rounded">2025</span>
                  </div>
                </div>
              </div>

              {/* Certificate 1: Data to Dashboard in Power BI */}
              <div className="bento-item bento-span-12 md:bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgba(34,211,238,0.1)] rounded-xl">
                    <FileText className="text-[#22d3ee] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Data to Dashboard in Power BI</h4>
                    <p className="text-secondary text-sm font-medium mb-3">Skill Course (ISO 9001:2015)</p>
                    <span className="text-xs font-mono text-[#22d3ee] bg-[rgba(34,211,238,0.1)] px-2 py-1 rounded">June 2026</span>
                  </div>
                </div>
              </div>

              {/* Certificate 2: AWS Academy */}
              <div className="bento-item bento-span-12 md:bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgba(192,132,252,0.1)] rounded-xl">
                    <FileText className="text-[#c084fc] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">AWS Academy Graduate - Cloud Foundations</h4>
                    <p className="text-secondary text-sm font-medium mb-3">AWS Academy</p>
                    <span className="text-xs font-mono text-[#c084fc] bg-[rgba(192,132,252,0.1)] px-2 py-1 rounded">June 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">
              <span>Get In Touch</span>
            </h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, machine learning projects, or exciting web development roles. Feel free to reach out and I will get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a href="mailto:shravanipansare80@gmail.com" className="btn btn-primary">
                <Mail className="w-5 h-5" /> shravanipansare80@gmail.com
              </a>
              <a href="tel:9527359282" className="btn btn-outline">
                <Phone className="w-5 h-5" /> +91 9527359282
              </a>
            </div>

            <div className="flex flex-col items-center gap-6 pt-10 border-t border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center text-white font-medium bg-[rgba(255,255,255,0.05)] px-6 py-3 rounded-full gap-3 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <MapPin className="w-5 h-5 text-[#22d3ee]"/> Baramati, Pune
              </div>
              <div className="flex justify-center gap-8 mt-4">
                <a href="https://github.com/shravipansare" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#22d3ee] hover:scale-110 transition-all">
                  <Monitor className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/shravani-pansare-46331830a" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#c084fc] hover:scale-110 transition-all">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="text-white font-medium tracking-wide">Built with <span className="text-[#22d3ee]">React</span> & <span className="text-[#c084fc]">Framer Motion</span></p>
          <p className="text-sm mt-4 text-secondary">&copy; {new Date().getFullYear()} Shravani Pansare. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
