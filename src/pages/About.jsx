import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      title: 'Lead Developer & System Architect',
      company: 'Phron AI',
      period: '2023 - Present',
      color: 'text-blue-400',
      desc: 'Architected large-scale AI-based game backend systems for real-time applications. Built multi-agent AI frameworks that simulate user training through interactive AI opponents in Unreal Engine environments.',
      points: [
        'Designed REST & WebSocket APIs for AI NPC intelligence and real-time session management',
        'Managed AWS GameLift and Kubernetes clusters for high-performance game hosting',
        'Supervised cross-platform desktop tools and game engine integrations'
      ]
    },
    {
      title: 'Game Backend Engineer',
      company: 'Fauget Studio',
      period: '2021 - 2023',
      color: 'text-purple-400',
      desc: 'Led backend integration efforts for multiplayer titles using C++, Node.js, and AWS. Designed scalable matchmaking systems and real-time state synchronization modules.',
      points: [
        'Implemented AWS-based CI/CD for automated testing and game server deployment',
        'Developed real-time telemetry systems for player behavior analysis',
        'Created secure game state validation with high-performance backend APIs'
      ]
    },
    {
      title: 'Unreal Engine Developer',
      company: 'Borcelle Studio',
      period: '2020 - 2021',
      color: 'text-green-400',
      desc: 'Developed game logic and backend automation for Unreal Engine projects. Built modular C++ components with emphasis on performance optimization and memory management.',
      points: [
        'Integrated custom plugins and modules into Unreal Engine builds',
        'Collaborated on multiplayer framework for low-latency player interactions',
        'Achieved significant performance gains through C++ optimization and Blueprint refactoring'
      ]
    }
  ];

  const skillGroups = [
    {
      title: 'Unreal Engine & Game Development',
      color: 'text-blue-400',
      skills: [
        { name: 'C++ & Unreal Engine', level: 95 },
        { name: 'Multiplayer & Networking', level: 90 },
        { name: 'AWS GameLift', level: 92 },
        { name: 'Blueprints & Game Logic', level: 88 }
      ]
    },
    {
      title: 'AI & Full-Stack Development',
      color: 'text-purple-400',
      skills: [
        { name: 'TypeScript/JavaScript', level: 94 },
        { name: 'Node.js & Backend', level: 91 },
        { name: 'React & Next.js', level: 87 },
        { name: 'AI/ML & Automation', level: 85 }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      color: 'text-green-400',
      skills: [
        { name: 'Docker & Containers', level: 89 },
        { name: 'Kubernetes', level: 83 },
        { name: 'AWS Cloud Services', level: 91 },
        { name: 'Terraform (IaC)', level: 86 }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">About Me</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Passionate about building the future through Unreal Engine, AI-driven game backends, and scalable cloud infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">Professional Journey</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a creative and technically adept Software Engineer specializing in Unreal Engine & Backend development, 
                with a deep passion for building scalable, AI-driven, and AWS-powered game backends. My expertise 
                spans across C++ game logic, real-time multiplayer systems, and cloud infrastructure design.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With a strong foundation in C++, TypeScript, Node.js, and Python, I design immersive 
                gaming experiences connected to automated backend systems. I'm dedicated to advancing 
                AI orchestration in games through real-world automation, efficient systems, and 
                high-performance game backend design.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Unreal Engine Expert</span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">AI Specialist</span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">Backend Developer</span>
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm">System Architect</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-400">My journey through Unreal Engine, AI, and game backend development</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="timeline-item revealed"
              >
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-400 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${exp.color}`}>{exp.title}</h3>
                    <span className="text-gray-400 text-sm">{exp.company} • {exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.desc}</p>
                  <ul className="text-gray-400 space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-400">Proficiency levels across technologies and frameworks</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillGroups.map((group, gIdx) => (
              <motion.div 
                key={gIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gIdx * 0.2 }}
              >
                <h3 className={`text-2xl font-bold ${group.color} mb-8`}>{group.title}</h3>
                <div className="space-y-6">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
