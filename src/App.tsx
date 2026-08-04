import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Mail, ExternalLink, Code, Briefcase, FileText, Phone, MapPin, Award, GraduationCap, Download, ArrowRight } from 'lucide-react';
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      <div className="ambient-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <nav>
        <div className="container nav-content">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>SHRAVANI<span>.</span></a>
          <div className="nav-links hidden md:flex">
            <button className={`nav-link ${activeSection === 'about' ? 'text-white' : ''}`} onClick={() => scrollTo('about')}>About</button>
            <button className={`nav-link ${activeSection === 'skills' ? 'text-white' : ''}`} onClick={() => scrollTo('skills')}>Skills</button>
            <button className={`nav-link ${activeSection === 'experience' ? 'text-white' : ''}`} onClick={() => scrollTo('experience')}>Experience</button>
            <button className={`nav-link ${activeSection === 'projects' ? 'text-white' : ''}`} onClick={() => scrollTo('projects')}>Projects</button>
            <button className={`nav-link ${activeSection === 'certifications' ? 'text-white' : ''}`} onClick={() => scrollTo('certifications')}>Awards</button>
            <button className={`nav-link ${activeSection === 'contact' ? 'text-white' : ''}`} onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="container hero">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-content">
            <motion.div variants={fadeInUp} className="hero-tag">
              Product Engineer & AI Enthusiast
            </motion.div>
            <motion.h1 variants={fadeInUp} className="hero-title">
              Hi, I'm <span className="text-gradient">Shravani.</span>
              <span className="hero-title-accent">I build intelligent solutions.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-desc">
              I am a proactive technology student specializing in Data Science, Machine Learning, and highly-performant web application development. I turn complex problems into elegant, real-world systems.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-buttons">
              <a href="#" className="btn btn-primary" download="Shravani_Pansare_Resume.pdf">
                <Download className="w-5 h-5" />
                Resume
              </a>
              <button className="btn btn-secondary" onClick={() => scrollTo('projects')}>
                View Work <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="section-title">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="bento-grid max-w-5xl mx-auto">
              
              <div className="glass-panel bento-item bento-span-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
                <p className="text-lg text-secondary mb-4 leading-relaxed">
                  Hello! My name is Shravani Pansare and I enjoy creating things that live on the internet and making them intelligent. 
                  I have a strong foundation in Artificial Intelligence and Data Science, currently pursuing my Bachelor of Engineering at Ajeenkya DY Patil School of Engineering.
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                  I am passionate about building intelligent solutions, from sophisticated machine learning models to robust web applications. I love taking complex problems and turning them into efficient, real-world systems.
                </p>
              </div>

              <div className="glass-panel bento-item bento-span-4 flex flex-col justify-center items-center text-center">
                <Award className="w-16 h-16 text-[#00f0ff] mb-4" />
                <h3 className="text-4xl font-black text-white mb-2">9.05</h3>
                <p className="text-[#a1a1aa] font-medium tracking-wide uppercase text-sm">Engineering CGPA</p>
              </div>

              <div className="glass-panel bento-item bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[rgba(0,240,255,0.1)] rounded-2xl border border-[rgba(0,240,255,0.2)]">
                    <GraduationCap className="text-[#00f0ff] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">B.E. in AI & Data Science</h4>
                    <p className="text-[#a1a1aa] font-medium mb-3">Ajeenkya DY Patil School of Engineering</p>
                    <span className="text-xs font-bold text-[#00f0ff] bg-[rgba(0,240,255,0.1)] px-3 py-1.5 rounded-full tracking-wide">2024 - 2027</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel bento-item bento-span-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[rgba(191,0,255,0.1)] rounded-2xl border border-[rgba(191,0,255,0.2)]">
                    <GraduationCap className="text-[#bf00ff] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Diploma in Computer Engineering</h4>
                    <p className="text-[#a1a1aa] font-medium mb-3">Government Polytechnic Pune</p>
                    <span className="text-xs font-bold text-[#bf00ff] bg-[rgba(191,0,255,0.1)] px-3 py-1.5 rounded-full tracking-wide">2021 - 2024 (86.53%)</span>
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
              <span className="text-gradient">Technical Arsenal</span>
            </h2>
            
            <motion.div className="bento-grid max-w-5xl mx-auto" variants={staggerContainer}>
              <motion.div className="glass-panel bento-item bento-span-12 md:bento-span-4" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white"><Code className="text-[#00f0ff] w-6 h-6"/> Languages & Web</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'React.js'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="glass-panel bento-item bento-span-12 md:bento-span-8" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white"><Monitor className="text-[#bf00ff] w-6 h-6"/> Machine Learning & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenCV', 'YOLO', 'MediaPipe', 'Face Recognition', 'Scikit-Learn', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="glass-panel bento-item bento-span-12" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white"><Briefcase className="text-[#ff0055] w-6 h-6"/> Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'MongoDB', 'SQL Server', 'Git & GitHub', 'VS Code', 'Jupyter', 'Power BI', 'n8n', 'ArduinoIDE', 'System Design'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
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
              <span className="text-gradient">Experience</span>
            </h2>
            
            <div className="timeline-container">
              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="glass-panel p-8 border-l-4 border-l-[#00f0ff]">
                  <span className="font-mono text-[#00f0ff] text-sm font-bold tracking-widest uppercase mb-2 block">May 2026 - Present</span>
                  <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">Product Engineer Intern <span className="bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] text-[#00f0ff] text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold">Latest</span></h3>
                  <p className="text-[#a1a1aa] font-medium mb-6 text-lg">MartechAdda</p>
                  <ul className="space-y-4 text-[#d4d4d8]">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] flex-shrink-0 mt-2.5"/> Conducted comprehensive UI/UX analysis and QA testing for MartechAdda V4, identifying critical usability improvements and system bugs.</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] flex-shrink-0 mt-2.5"/> Architected and developed "Ledgerly", a modern B2B invoicing and CRM SaaS platform using React, Node.js, Express, and MongoDB.</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] flex-shrink-0 mt-2.5"/> Integrated enterprise-grade features including Razorpay payment gateways, NodeMailer SMTP automation, and 2FA security.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="glass-panel p-8 border-l-4 border-l-[#bf00ff]">
                  <span className="font-mono text-[#bf00ff] text-sm font-bold tracking-widest uppercase mb-2 block">Dec 2023 - Jan 2024</span>
                  <h3 className="text-2xl font-bold mb-2 text-white">Machine Learning Intern</h3>
                  <p className="text-[#a1a1aa] font-medium mb-6 text-lg">TechnoHacks EduTech</p>
                  <ul className="space-y-4 text-[#d4d4d8]">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#bf00ff] shadow-[0_0_10px_#bf00ff] flex-shrink-0 mt-2.5"/> Built and trained supervised ML models (Decision Tree, Random Forest, SVM) on real-world datasets for classification and regression tasks.</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#bf00ff] shadow-[0_0_10px_#bf00ff] flex-shrink-0 mt-2.5"/> Performed end-to-end data preprocessing: handled missing values, feature scaling, label encoding, and train-test splitting.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className="timeline-item" variants={fadeInUp}>
                <div className="glass-panel p-8 border-l-4 border-l-[#ff0055]">
                  <span className="font-mono text-[#ff0055] text-sm font-bold tracking-widest uppercase mb-2 block">Jun 2023 - Aug 2023</span>
                  <h3 className="text-2xl font-bold mb-2 text-white">Software Engineer</h3>
                  <p className="text-[#a1a1aa] font-medium mb-6 text-lg">OMVSAB IT SOLUTION</p>
                  <ul className="space-y-4 text-[#d4d4d8]">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0055] shadow-[0_0_10px_#ff0055] flex-shrink-0 mt-2.5"/> Developed and debugged applications using Java, Python, JavaScript, HTML, and CSS.</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0055] shadow-[0_0_10px_#ff0055] flex-shrink-0 mt-2.5"/> Designed and managed databases with SQL Server and MongoDB, improving performance and reliability.</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0055] shadow-[0_0_10px_#ff0055] flex-shrink-0 mt-2.5"/> Collaborated in team discussions and conducted code reviews to ensure code quality.</li>
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
              <span className="text-gradient">Featured Work</span>
            </h2>
            
            <div className="grid-2">
              <motion.div className="glass-panel flex flex-col p-8" variants={fadeInUp}>
                <div className="absolute top-0 right-0 bg-[#00f0ff] text-black text-[10px] font-black tracking-widest px-4 py-1.5 rounded-bl-xl uppercase">SaaS App</div>
                <div className="flex justify-between items-start mb-2 mt-2">
                  <h3 className="text-2xl font-bold text-white">Ledgerly</h3>
                  <a href="https://github.com/shravipansare/ledgerly" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="font-mono text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-6">2026 • Full Stack</p>
                <ul className="space-y-3 text-[#d4d4d8] mb-8 flex-grow">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Premium B2B SaaS application for managing clients, invoices, and online payments.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Engineered a scalable backend API using Node.js, Express, Prisma ORM, and MongoDB.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Integrated Razorpay checkout, NodeMailer automation, and 2FA.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  {['React', 'Node.js', 'Prisma', 'MongoDB', 'Razorpay'].map(tech => (
                    <span key={tech} className="text-xs font-medium text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-md">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass-panel flex flex-col p-8" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white leading-tight">Intelligent Classroom Surveillance</h3>
                  <a href="https://github.com/shravipansare/intelligent-classroom" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="font-mono text-[#bf00ff] text-xs font-bold tracking-widest uppercase mb-6 mt-1">2024 - 2025 • Computer Vision</p>
                <ul className="space-y-3 text-[#d4d4d8] mb-8 flex-grow">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Developed an AI-powered system with face recognition, stress detection, and mobile-phone detection.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Used OpenCV, CNN models, and YOLO for real-time classroom monitoring.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Automated attendance tracking, behavior analysis, and generated alerts.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  {['Python', 'OpenCV', 'CNN', 'YOLO'].map(tech => (
                    <span key={tech} className="text-xs font-medium text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-md">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass-panel flex flex-col p-8" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Visage Check</h3>
                  <a href="https://github.com/shravipansare/visage-check" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="font-mono text-[#ff0055] text-xs font-bold tracking-widest uppercase mb-6 mt-1">2023 - 2024 • AI / ML</p>
                <ul className="space-y-3 text-[#d4d4d8] mb-8 flex-grow">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Built a face-recognition system to automate student attendance, reducing manual work and improving accuracy.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Enabled adding/deleting student records with real-time tracking.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Displayed attendance graphs and automatically highlighted students with less than 75% attendance.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  {['Face Recognition', 'Data Viz', 'Python'].map(tech => (
                    <span key={tech} className="text-xs font-medium text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-md">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass-panel flex flex-col p-8" variants={fadeInUp}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">AI Document API</h3>
                  <a href="https://github.com/shravipansare/doc-analysis-api" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
                <p className="font-mono text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-6 mt-1">2026 • Backend Architecture</p>
                <ul className="space-y-3 text-[#d4d4d8] mb-8 flex-grow">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Built an AI-powered API to extract and analyze data from uploaded documents.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Integrated Tesseract OCR for text extraction and Groq LLM for intelligent data processing.</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 flex-shrink-0 mt-2.5"/> Designed a robust, asynchronous RESTful API architecture using FastAPI.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  {['Python', 'FastAPI', 'OCR', 'LLM'].map(tech => (
                    <span key={tech} className="text-xs font-medium text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-md">{tech}</span>
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
              <span className="text-gradient">Awards & Certifications</span>
            </h2>
            
            <div className="bento-grid max-w-5xl mx-auto">
              {/* Award */}
              <div className="glass-panel bento-item bento-span-12 md:bento-span-6 bg-gradient-to-br from-[rgba(191,0,255,0.05)] to-transparent border-[rgba(191,0,255,0.2)]">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[rgba(191,0,255,0.1)] rounded-2xl border border-[rgba(191,0,255,0.2)]">
                    <Award className="text-[#bf00ff] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Third Position - ICRTAIDS 2025</h4>
                    <p className="text-[#a1a1aa] text-sm font-medium mb-4 leading-relaxed">International Conference On Recent Trends • Green Skills & Artificial Intelligence (Edunet Foundation)</p>
                    <span className="text-xs font-bold text-[#bf00ff] bg-[rgba(191,0,255,0.1)] px-3 py-1.5 rounded-full tracking-wide">2025</span>
                  </div>
                </div>
              </div>

              {/* Certificate 1 */}
              <div className="glass-panel bento-item bento-span-12 md:bento-span-6">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[rgba(0,240,255,0.1)] rounded-2xl border border-[rgba(0,240,255,0.2)]">
                    <FileText className="text-[#00f0ff] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Data to Dashboard in Power BI</h4>
                    <p className="text-[#a1a1aa] text-sm font-medium mb-4 leading-relaxed">Skill Course (ISO 9001:2015)</p>
                    <span className="text-xs font-bold text-[#00f0ff] bg-[rgba(0,240,255,0.1)] px-3 py-1.5 rounded-full tracking-wide">June 2026</span>
                  </div>
                </div>
              </div>

              {/* Certificate 2 */}
              <div className="glass-panel bento-item bento-span-12 md:bento-span-6 md:col-start-4">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[rgba(255,0,85,0.1)] rounded-2xl border border-[rgba(255,0,85,0.2)]">
                    <FileText className="text-[#ff0055] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">AWS Academy Graduate - Cloud Foundations</h4>
                    <p className="text-[#a1a1aa] text-sm font-medium mb-4 leading-relaxed">AWS Academy</p>
                    <span className="text-xs font-bold text-[#ff0055] bg-[rgba(255,0,85,0.1)] px-3 py-1.5 rounded-full tracking-wide">June 2026</span>
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
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-xl text-[#a1a1aa] mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, machine learning projects, or exciting web development roles. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a href="mailto:shravanipansare80@gmail.com" className="btn btn-primary">
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <a href="tel:9527359282" className="btn btn-secondary">
                <Phone className="w-5 h-5" /> +91 9527359282
              </a>
            </div>

            <div className="glass-panel p-8 max-w-md mx-auto flex flex-col items-center gap-6 border-t-4 border-t-[#00f0ff]">
              <div className="flex items-center text-white font-bold text-lg gap-3">
                <MapPin className="w-6 h-6 text-[#00f0ff]"/> Baramati, Pune
              </div>
              <div className="flex justify-center gap-8 mt-2 w-full pt-6 border-t border-[rgba(255,255,255,0.1)]">
                <a href="https://github.com/shravipansare" target="_blank" rel="noreferrer" className="text-secondary hover:text-white hover:scale-110 transition-all">
                  <Monitor className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/shravani-pansare-46331830a" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#00f0ff] hover:scale-110 transition-all">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="text-white font-bold tracking-widest uppercase text-sm mb-4">Built with <span className="text-[#00f0ff]">React</span> & <span className="text-[#bf00ff]">Framer Motion</span></p>
          <p className="text-sm text-[#a1a1aa]">&copy; {new Date().getFullYear()} Shravani Pansare. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
