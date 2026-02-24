import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectBackend from '../assets/project-fullstack.jpg';
import projectAi from '../assets/project-ai.jpg';
import projectFullstack from '../assets/project-fullstack.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'ai-game-architect',
      title: 'AI Game Level Architect',
      category: ['unreal', 'ai'],
      img: projectFullstack,
      color: 'from-blue-600 to-purple-700',
      shortDesc: 'AI-assisted platform for generating, testing, and optimizing game levels within Unreal Engine. Features intelligent procedural generation and real-time performance validation.',
      tags: ['C++', 'Unreal Engine', 'Python', 'AI/ML'],
      details: 'A comprehensive system built to streamline game development. It leverages machine learning to analyze level design patterns and suggest optimizations. The platform includes a custom Unreal Engine plugin for seamless integration.',
      link: '#',
      linkText: 'GitHub'
    },
    {
      id: 'sundial-sonic',
      title: 'SundialSonic Game Backend',
      category: ['backend', 'unreal'],
      img: projectAi,
      color: 'from-amber-600 to-orange-700',
      shortDesc: 'AWS-powered game backend for real-time multiplayer titles. Features scalable session management using AWS GameLift and high-performance state synchronization.',
      tags: ['AWS GameLift', 'C++', 'Unreal Engine', 'WebSockets'],
      details: 'Architected to handle thousands of concurrent players. This backend uses a microservices approach with Node.js for metadata and C++ for high-performance game session logic on GameLift.',
      link: '#',
      linkText: 'Live Demo'
    },
    {
      id: 'plampay',
      title: 'Game Identity & Anti-Cheat',
      category: ['backend', 'ai'],
      img: projectFullstack,
      color: 'from-green-600 to-teal-700',
      shortDesc: 'AI-powered biometric identity verification and behavioral anti-cheat system for competitive gaming. Uses ML models to detect anomalous player behavior in real-time.',
      tags: ['AI/ML', 'Security', 'APIs', 'Python'],
      details: 'An innovative security solution that uses palm-recognition and behavioral analysis to ensure fair play and secure identity verification in high-stakes competitive gaming environments.',
      link: '#',
      linkText: 'Case Study'
    },
    {
      id: 'telegram-bot',
      title: 'Telegram Market Analyzer Bot',
      category: ['ai'],
      img: projectAi,
      color: 'from-indigo-600 to-pink-700',
      shortDesc: 'AI-powered Telegram bot for opportunity analysis with NLP-powered analyzers to extract real job offers and trends from Telegram channels.',
      tags: ['NLP', 'Node.js', 'Automation', 'AI Agents'],
      details: 'This bot automates the process of finding and classifying opportunities across hundreds of Telegram channels. It uses advanced NLP to filter noise and extract actionable data.',
      link: '#',
      linkText: 'Documentation'
    },
    {
      id: 'sonic-builder',
      title: 'AI NPCs for Sonic Builder',
      category: ['ai', 'unreal'],
      img: projectFullstack,
      color: 'from-red-600 to-yellow-700',
      shortDesc: 'Advanced AI agent system for Unreal Engine. Features multi-agent frameworks that provide challenging opponents with unique behaviors.',
      tags: ['C++', 'Unreal Engine', 'AI Agents', 'Behavior Trees'],
      details: 'Developed sophisticated NPC behaviors using complex behavior trees and sensory systems. The NPCs adapt to player strategies in real-time, providing a dynamic gaming experience.',
      link: '#',
      linkText: 'Case Study'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">My Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore my portfolio of game backends, AI-driven systems, and scalable cloud architecture projects.
          </motion.p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6">Filter by Technology</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'backend', label: 'Game Backend' },
                { id: 'ai', label: 'AI & ML' },
                { id: 'unreal', label: 'Unreal Engine' }
              ].map(btn => (
                <button 
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === btn.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card group"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{project.title.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white bg-opacity-10 text-blue-300 px-3 py-1 rounded-full text-xs border border-white border-opacity-10">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                      >
                        View Details
                      </button>
                      <a href={project.link} className="border border-blue-400 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                        {project.linkText}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-[1000] backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={e => e.stopPropagation()}
              className="bg-gray-900 border border-blue-400 border-opacity-30 rounded-2xl max-w-2xl w-full overflow-hidden"
            >
              <div className={`h-64 bg-gradient-to-br ${selectedProject.color} relative`}>
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover mix-blend-overlay" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 gradient-text">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-blue-600 bg-opacity-20 text-blue-300 px-4 py-1.5 rounded-full text-sm border border-blue-500 border-opacity-30">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.link} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-center flex-1 hover:shadow-lg transition-all">
                    {selectedProject.linkText === 'GitHub' ? 'View Code' : 'View Demo'}
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="border border-gray-700 text-gray-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
