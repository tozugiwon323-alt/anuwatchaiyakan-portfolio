import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Clock, Send, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // NOTE: You need to replace these with your actual EmailJS IDs
      // Sign up at https://www.emailjs.com/
      const serviceId = 'service_ignmbi8'; 
      const templateId = 'template_rbuuk2c';
      const publicKey = '_pUr1RQieb1JnAZ4O';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        time: new Date().toLocaleString(),
        message: formData.message,
        company: formData.company,
        budget: formData.budget,
        project_type: formData.projectType,
        timeline: formData.timeline,
        to_email: 'anuwatchaiyakan@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        projectType: '',
        timeline: '',
        message: '',
        newsletter: false
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('FAILED...', err);
      setError('Something went wrong. Please try again later.');
      setIsSubmitting(false);
    }
  };

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
            <span className="gradient-text">Get In Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Ready to collaborate on innovative game backends, AI-driven applications, and cutting-edge Unreal Engine projects.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <Mail size={32} />, 
                title: 'Email', 
                value: 'anuwatchaiyakan@gmail.com', 
                sub: 'Direct email communication',
                color: 'from-blue-500 to-purple-600'
              },
              { 
                icon: <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />, 
                title: 'Availability', 
                value: 'Open to new opportunities', 
                sub: 'Remote / Hybrid positions',
                color: 'from-green-500 to-teal-600'
              },
              { 
                icon: <Clock size={32} />, 
                title: 'Response Time', 
                value: 'Within 24 hours', 
                sub: 'Usually much faster',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="contact-card p-8 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 floating`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-2 font-medium">{item.value}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Send a Message</h2>
            <p className="text-xl text-gray-400">Let's discuss your project and how I can help bring it to life</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="contact-card p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 bg-opacity-20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-3 rounded-xl text-sm">{error}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Company</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Project Budget</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all"
                    >
                      <option value="" className="bg-gray-900">Select budget range</option>
                      <option value="under-10k" className="bg-gray-900">Under $10,000</option>
                      <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                      <option value="over-100k" className="bg-gray-900">Over $100,000</option>
                      <option value="discuss" className="bg-gray-900">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Project Type *</label>
                  <select 
                    name="projectType" 
                    required 
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all"
                  >
                    <option value="" className="bg-gray-900">Select project type</option>
                    <option value="game-backend" className="bg-gray-900">Game Backend (AWS)</option>
                    <option value="ai-ml" className="bg-gray-900">AI/ML Implementation</option>
                    <option value="unreal-engine" className="bg-gray-900">Unreal Engine C++</option>
                    <option value="multiplayer" className="bg-gray-900">Multiplayer Systems</option>
                    <option value="consulting" className="bg-gray-900">Technical Consulting</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Project Details *</label>
                  <textarea 
                    name="message" 
                    required 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and specific requirements..."
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:bg-opacity-10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-white border-opacity-10 bg-white bg-opacity-5 text-blue-500 focus:ring-blue-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-400">
                    I'd like to receive occasional updates about game dev and AI development insights (optional)
                  </label>
                </div>

                <div className="text-center pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                  <p className="text-xs text-gray-500 mt-4">* Required fields. I'll respond within 24 hours.</p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-12">Other Ways to Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Linkedin size={24} />, name: 'LinkedIn', sub: 'Professional Network', color: 'bg-blue-600', link: '#' },
              { icon: <Github size={24} />, name: 'Github', sub: 'Code Repository', color: 'bg-gray-800', link: '#' },
              { icon: <Twitter size={24} />, name: 'Twitter', sub: 'Tech Updates', color: 'bg-blue-400', link: '#' },
              { icon: <Mail size={24} />, name: 'Email', sub: 'anuwatchaiyakan@gmail.com', color: 'bg-purple-600', link: 'mailto:anuwatchaiyakan@gmail.com' }
            ].map((social, idx) => (
              <motion.a 
                key={social.name}
                href={social.link}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="contact-card p-6 flex flex-col items-center hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center mb-4`}>
                  {social.icon}
                </div>
                <h3 className="font-bold text-white mb-1">{social.name}</h3>
                <p className="text-xs text-gray-500">{social.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
