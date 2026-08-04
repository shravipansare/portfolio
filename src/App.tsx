import React, { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import './index.css';

interface HistoryItem {
  cmd: string;
  output: React.ReactNode;
}

const ASCII_LOGO = `
  ____  _                               _ 
 / ___|| |__  _ __ __ ___   ____ _ _ __ (_)
 \\___ \\| '_ \\| '__/ _\` \\ \\ / / _\` | '_ \\| |
  ___) | | | | | | (_| |\\ V / (_| | | | | |
 |____/|_| |_|_|  \\__,_| \\_/ \\__,_|_| |_|_|
                                          
`;

function App() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on any click
  useEffect(() => {
    const handleGlobalClick = () => inputRef.current?.focus();
    window.addEventListener('click', handleGlobalClick);
    inputRef.current?.focus();
    
    // Initial welcome message
    if (history.length === 0) {
      handleCommand('welcome');
    }
    
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Scroll to bottom on new output
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      setInput('');
      if (cmd) {
        handleCommand(cmd);
      }
    }
  };

  const executeCmd = (cmd: string): React.ReactNode => {
    const args = cmd.toLowerCase().split(' ').filter(Boolean);
    const command = args[0];

    switch (command) {
      case 'help':
        return (
          <div style={{ paddingLeft: '1rem' }}>
            <div className="list-item"><strong>about</strong>    - Read my bio</div>
            <div className="list-item"><strong>skills</strong>   - List technical skills</div>
            <div className="list-item"><strong>projects</strong> - View featured projects</div>
            <div className="list-item"><strong>exp</strong>      - View work experience</div>
            <div className="list-item"><strong>awards</strong>   - View certifications & awards</div>
            <div className="list-item"><strong>contact</strong>  - Get in touch</div>
            <div className="list-item"><strong>clear</strong>    - Clear terminal output</div>
            <div className="list-item"><strong>whoami</strong>   - Print current user</div>
            <br/>
            <div><i>Tip: Try typing 'projects' to see my work!</i></div>
          </div>
        );
      
      case 'welcome':
        return (
          <div>
            <pre className="ascii-art">{ASCII_LOGO}</pre>
            <p>Welcome to ShravaniOS v2.0.26</p>
            <p>Type <span className="text-highlight">help</span> to see available commands.</p>
            <br />
          </div>
        );

      case 'about':
        return (
          <div style={{ maxWidth: '800px' }}>
            <p>Hello! I am <strong className="text-highlight">Shravani Pansare</strong>.</p>
            <br/>
            <p>I am a proactive technology student specializing in Data Science, Machine Learning, and full-stack web application development. Currently pursuing my B.E. in AI & Data Science at Ajeenkya DY Patil School of Engineering (CGPA 9.05).</p>
            <p>I love taking complex problems and turning them into efficient, real-world systems.</p>
          </div>
        );

      case 'skills':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px' }}>
            <div>
              <strong className="text-info">Languages & Web:</strong>
              <div>Python, Java, C++, JavaScript, React, Node.js</div>
            </div>
            <div>
              <strong className="text-info">AI & ML:</strong>
              <div>OpenCV, YOLO, TensorFlow, Scikit-Learn, Pandas</div>
            </div>
            <div>
              <strong className="text-info">Databases:</strong>
              <div>MongoDB, SQL Server, MySQL, Prisma ORM</div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div style={{ paddingLeft: '1rem' }}>
            <p className="text-info mb-2">Fetching projects from database...</p>
            <br/>
            <div className="list-item">
              <strong className="text-highlight">Ledgerly SaaS</strong> (2026) <br/>
              B2B SaaS application for managing clients, generating PDF invoices, and processing online payments.<br/>
              [React, Node.js, Prisma, MongoDB, Razorpay] <br/>
              <a href="https://github.com/shravipansare/ledgerly" target="_blank" className="file-link">View Repo</a>
            </div>
            <br/>
            <div className="list-item">
              <strong className="text-highlight">Intelligent Classroom Surveillance</strong> (2024-25) <br/>
              AI-powered system with face recognition, stress detection, and mobile-phone detection using YOLO & CNN.<br/>
              <a href="https://github.com/shravipansare/intelligent-classroom" target="_blank" className="file-link">View Repo</a>
            </div>
            <br/>
            <div className="list-item">
              <strong className="text-highlight">Visage Check</strong> (2023-24) <br/>
              Face-recognition system to automate student attendance with automated alerts for low attendance.<br/>
              <a href="https://github.com/shravipansare/visage-check" target="_blank" className="file-link">View Repo</a>
            </div>
          </div>
        );
        
      case 'exp':
        return (
          <div style={{ paddingLeft: '1rem' }}>
            <div className="list-item">
              <strong className="text-highlight">Product Engineer Intern</strong> @ MartechAdda (May 2026 - Present)<br/>
              Architected "Ledgerly" B2B invoicing SaaS. Handled full stack dev, payment integration, and QA.
            </div>
            <br/>
            <div className="list-item">
              <strong className="text-highlight">Machine Learning Intern</strong> @ TechnoHacks EduTech (Dec 2023 - Jan 2024)<br/>
              Trained supervised ML models (Decision Tree, SVM) on real datasets. Handled data preprocessing.
            </div>
            <br/>
            <div className="list-item">
              <strong className="text-highlight">Software Engineer</strong> @ OMVSAB IT SOLUTION (Jun 2023 - Aug 2023)<br/>
              Developed applications in Java/Python. Managed databases with SQL Server & MongoDB.
            </div>
          </div>
        );
        
      case 'awards':
        return (
          <div style={{ paddingLeft: '1rem' }}>
            <div className="list-item">
              <strong>Third Position - ICRTAIDS 2025</strong><br/>
              International Conference On Recent Trends (Green Skills & AI)
            </div>
            <div className="list-item">
              <strong>Data to Dashboard in Power BI</strong> (ISO 9001:2015)<br/>
              June 2026
            </div>
            <div className="list-item">
              <strong>AWS Academy Graduate</strong> - Cloud Foundations<br/>
              June 2026
            </div>
          </div>
        );

      case 'contact':
        return (
          <div style={{ paddingLeft: '1rem' }}>
            <div><strong className="text-info">Email:</strong> <a href="mailto:shravanipansare80@gmail.com" className="file-link">shravanipansare80@gmail.com</a></div>
            <div><strong className="text-info">Phone:</strong> +91 9527359282</div>
            <div><strong className="text-info">GitHub:</strong> <a href="https://github.com/shravipansare" target="_blank" className="file-link">github.com/shravipansare</a></div>
            <div><strong className="text-info">LinkedIn:</strong> <a href="https://linkedin.com/in/shravani-pansare-46331830a" target="_blank" className="file-link">linkedin.com/in/shravani</a></div>
          </div>
        );

      case 'whoami':
        return <div>guest@shravani.dev</div>;

      case 'clear':
        setHistory([]);
        return null;

      case 'ls':
        return <div className="text-info">about.txt  skills.json  projects/  exp.log  contact.sh</div>;

      case 'cat':
        if (args[1] === 'about.txt') return executeCmd('about');
        if (args[1] === 'skills.json') return executeCmd('skills');
        return <div className="error">cat: {args[1] || 'missing operand'}: No such file or directory</div>;

      case 'sudo':
        return <div className="error">shravani.dev is not in the sudoers file. This incident will be reported.</div>;
        
      case 'gui':
      case 'start':
        return <div className="error">GUI mode is currently disabled in this build. Sticking to the terminal!</div>;

      default:
        return <div className="error">Command not found: {command}. Type 'help' for available commands.</div>;
    }
  };

  const handleCommand = (cmd: string) => {
    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }
    
    // Ignore the welcome command from showing up as user input
    if (cmd === 'welcome') {
      const output = executeCmd(cmd);
      setHistory([{ cmd: '', output }]);
      return;
    }

    const output = executeCmd(cmd);
    setHistory(prev => [...prev, { cmd, output }]);
  };

  return (
    <div className="crt">
      <div className="terminal-container">
        
        {history.map((item, index) => (
          <div key={index} className="terminal-output">
            {item.cmd && (
              <div className="cmd-echo">
                <span className="prompt">guest@shravani</span>
                <span className="path">~/portfolio</span> $ {item.cmd}
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}
        
        <div className="input-line">
          <span className="prompt">guest@shravani</span>
          <span className="path">~/portfolio</span> $
          <input 
            ref={inputRef}
            type="text" 
            className="terminal-input ml-2" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        
        <div ref={endRef} />
      </div>
    </div>
  );
}

export default App;
