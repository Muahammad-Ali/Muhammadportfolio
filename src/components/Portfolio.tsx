import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'mern',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'wordpress',
      description: 'Professional WordPress website with custom theme and SEO optimization',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'design',
      description: 'Modern UI/UX design for a fitness tracking mobile application',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'mern',
      description: 'Collaborative task management application with real-time updates',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'wordpress',
      description: 'Responsive restaurant website with online ordering system',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'WooCommerce', 'Custom Theme', 'Payment Gateway'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Dashboard Design',
      category: 'design',
      description: 'Clean and intuitive dashboard design for analytics platform',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Data Visualization', 'UI Design', 'Responsive'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'mern', label: 'MERN Stack', count: projects.filter(p => p.category === 'mern').length },
    { id: 'wordpress', label: 'WordPress', count: projects.filter(p => p.category === 'wordpress').length },
    { id: 'design', label: 'UI/UX Design', count: projects.filter(p => p.category === 'design').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest projects and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow'
                  : 'glass text-gray-400 hover:text-white hover:shadow-glow'
              }`}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{filter.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-glow"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors shadow-glow"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'mern' ? 'bg-green-500/20 text-green-400' :
                      project.category === 'wordpress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                    
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <span>View Project</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Like What You See?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              These are just a few examples of my work. I'd love to discuss your project and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2 shadow-glow"
            >
              <span>Let's Work Together</span>
              <ExternalLink size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;