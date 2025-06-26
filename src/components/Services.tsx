import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Smartphone, Zap, Shield, Layers, Search, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: 'MERN Stack Development',
      description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js for modern, scalable solutions.',
      features: ['React & Next.js', 'Node.js & Express', 'MongoDB & Database Design', 'API Development', 'State Management', 'Authentication'],
      color: 'from-green-500 to-blue-500',
      experience: '2+ Years Learning',
      projects: '15+ Projects',
      price: 'Starting from $500'
    },
    {
      icon: Globe,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions including theme development, plugin integration, and performance optimization.',
      features: ['Custom Theme Development', 'Plugin Integration', 'SEO Optimization', 'Performance Tuning', 'E-commerce Solutions', 'Content Management'],
      color: 'from-blue-500 to-purple-500',
      experience: '3+ Years Experience',
      projects: '30+ Websites',
      price: 'Starting from $300'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-friendly interfaces and seamless user experiences for web and mobile applications.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Interaction Design', 'Usability Testing', 'Design Systems'],
      color: 'from-purple-500 to-pink-500',
      experience: '2+ Years Experience',
      projects: '25+ Designs',
      price: 'Starting from $200'
    }
  ];

  const additionalServices = [
    { icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first approach ensuring perfect display across all devices' },
    { icon: Zap, title: 'Performance Optimization', description: 'Fast-loading websites with optimized code and best practices' },
    { icon: Shield, title: 'Security Implementation', description: 'Secure coding practices and protection against vulnerabilities' },
    { icon: Search, title: 'SEO Optimization', description: 'Search engine optimization for better visibility and ranking' },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive development and design solutions to bring your ideas to life
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-blue-400 font-medium">{service.experience}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Projects:</span>
                    <span className="text-cyan-400 font-medium">{service.projects}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Starting Price:</span>
                    <span className="text-green-400 font-medium">{service.price}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group`}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Additional <span className="gradient-text">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-12 hover:shadow-glow transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Let's work together to create something amazing. Get in touch and let's discuss your ideas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-3 shadow-glow"
            >
              <Layers size={20} />
              Start Your Project
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;