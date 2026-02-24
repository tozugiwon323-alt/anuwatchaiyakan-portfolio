import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import ReactECharts from 'echarts-for-react';
import anime from 'animejs';
import { motion } from 'framer-motion';
import SkillModal from '../components/SkillModal';
import heroBg from '../assets/hero-bg.jpg';
import projectBackend from '../assets/project-fullstack.jpg'; // Using fullstack as placeholder or check original
import projectAi from '../assets/project-ai.jpg';
import projectFullstack from '../assets/project-fullstack.jpg';

const Home = () => {
  const typedNameRef = useRef(null);
  const typedTitleRef = useRef(null);
  const particlesRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDetails = {
    'C++': 'Expert in high-performance game logic and systems development within Unreal Engine.',
    'Blueprints': 'Advanced visual scripting for rapid prototyping and complex game mechanics.',
    'AWS GameLift': 'Cloud-based dedicated server hosting and scaling for multiplayer games.',
    'WebSockets': 'Real-time bidirectional communication for low-latency game state synchronization.',
    'Redis': 'High-speed in-memory data storage for session management and real-time leaderboards.',
    'Multiplayer': 'Architecture and implementation of robust networking for competitive gaming.',
    'AWS': 'Comprehensive cloud infrastructure design using EC2, Lambda, S3, and more.',
    'Terraform': 'Infrastructure as Code for automated and reproducible cloud environments.',
    'System Arch': 'Design of scalable and resilient backend systems for high-traffic applications.',
    'TypeScript': 'Strong typing for large-scale applications and API development.',
    'Node.js': 'Backend development for game services and API orchestration.',
    'Python': 'AI/ML model training and game data processing pipelines.',
    'NLP': 'Natural language processing for intelligent NPC dialogue and community management.',
    'Agents': 'Multi-agent AI systems with unique behaviors and tactical coordination.',
    'Automation': 'CI/CD pipelines and automated testing for game server deployments.',
    'PostgreSQL': 'Relational database design for persistent player data and analytics.',
    'Docker': 'Containerization for consistent deployment across various environments.',
    'Kubernetes': 'Orchestration and scaling of microservices for game backend infrastructure.'
  };

  useEffect(() => {
    // Typewriter
    const typedName = new Typed(typedNameRef.current, {
      strings: ['Anuwat Chaiyakan'],
      typeSpeed: 100,
      startDelay: 500,
      showCursor: false,
      onComplete: () => {
        new Typed(typedTitleRef.current, {
          strings: [
            'Software Engineer',
            'Unreal Engine Developer',
            'Game Backend & AI Specialist',
            'AWS Cloud Architect'
          ],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: '|'
        });
      }
    });

    // Particles
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = particlesRef.current;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      typedName.destroy();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(canvas);
    };
  }, []);

  const chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: '#00d4ff',
      textStyle: { color: '#ffffff' }
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: { color: '#ffffff' }
    },
    series: [
      {
        name: 'Skills',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffffff'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 212, 255, 0.5)'
          }
        },
        labelLine: { show: false },
        data: [
          { value: 35, name: 'Unreal Engine & Game Dev', itemStyle: { color: '#00d4ff' } },
          { value: 30, name: 'AI & Automation', itemStyle: { color: '#ffb347' } },
          { value: 25, name: 'Cloud & Infrastructure', itemStyle: { color: '#10b981' } },
          { value: 10, name: 'System Architecture', itemStyle: { color: '#8b5cf6' } }
        ]
      }
    ]
  };

  const skillNodeVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const SkillNode = ({ name }) => (
    <motion.div 
      className="skill-node"
      variants={skillNodeVariants}
      whileHover="hover"
      onClick={() => setSelectedSkill(name)}
    >
      {name}
    </motion.div>
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
          style={{ backgroundImage: `url(${heroBg})`, opacity: 0.5 }}
        ></div>
        <div className="particle-container absolute inset-0 z-1" ref={particlesRef}></div>
        
        <div className="content-layer text-center max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text" ref={typedNameRef}></span>
          </motion.h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 min-h-[40px]">
            <span ref={typedTitleRef}></span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Creative and technically adept Unreal Engine & Backend Engineer passionate about building 
            scalable game backends, AI-driven systems, and AWS-powered cloud architectures.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View My Work
            </Link>
            <Link to="/contact" className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-400">Interactive skills visualization across Unreal Engine, AWS, and AI-driven systems</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-96"
            >
              <ReactECharts option={chartOption} style={{ height: '100%', width: '100%' }} />
            </motion.div>
            
            <div className="space-y-6">
              {[
                { title: 'Unreal Engine & Game Backend', color: 'text-blue-400', skills: ['C++', 'Blueprints', 'AWS GameLift', 'WebSockets', 'Redis', 'Multiplayer'] },
                { title: 'AI & Automation', color: 'text-amber-400', skills: ['TypeScript', 'Node.js', 'Python', 'NLP', 'Agents', 'Automation'] },
                { title: 'Cloud & Infrastructure', color: 'text-green-400', skills: ['AWS', 'Terraform', 'PostgreSQL', 'Docker', 'Kubernetes', 'System Arch'] }
              ].map((category, idx) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="skill-category"
                >
                  <h3 className={`text-2xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => <SkillNode key={skill} name={skill} />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Innovative solutions in game backend, AI-driven systems, and cloud architecture</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AWS Game Backend Orchestrator',
                desc: 'Scalable backend architecture using AWS GameLift and Lambda for real-time multiplayer session management.',
                tags: ['C++', 'AWS GameLift', 'Terraform'],
                img: projectFullstack, // Use available resources
                color: 'from-blue-600 to-purple-700'
              },
              {
                title: 'AI NPC Intelligence System',
                desc: 'Unreal Engine AI system with dynamic decision-making and LLM-powered dialogue for immersive NPCs.',
                tags: ['Unreal Engine', 'Python', 'LLMs'],
                img: projectAi,
                color: 'from-amber-600 to-orange-700'
              },
              {
                title: 'Plampay System',
                desc: 'Palm-recognition payment verification system with AI-based biometric authentication.',
                tags: ['AI/ML', 'Biometrics', 'APIs'],
                img: projectFullstack,
                color: 'from-green-600 to-teal-700'
              }
            ].map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="project-card group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-semibold">{project.title.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-600 bg-opacity-30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500 border-opacity-30">{tag}</span>
                    ))}
                  </div>
                  <Link to="/projects" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate on innovative game backends, AI-driven applications, and cutting-edge technology projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start a Conversation
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      <SkillModal 
        skill={selectedSkill} 
        detail={skillDetails[selectedSkill]} 
        onClose={() => setSelectedSkill(null)} 
      />
    </div>
  );
};

export default Home;
