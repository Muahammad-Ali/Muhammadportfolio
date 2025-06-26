import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { Icon: Github, href: "#", color: "hover:text-gray-300", label: "GitHub" },
    { Icon: Linkedin, href: "#", color: "hover:text-blue-400", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:alikhanuet2021@gmail.com", color: "hover:text-orange-400", label: "Email" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <span className="text-blue-400 text-lg font-medium tracking-wide">Hello, I'm</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                <span className="gradient-text block">MUHAMMAD</span>
                <span className="text-white block">ALI</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                Full Stack Developer & Designer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Specialized in <span className="text-blue-400 font-semibold">MERN Stack</span> development, 
                <span className="text-cyan-400 font-semibold"> WordPress</span> solutions, and 
                <span className="text-purple-400 font-semibold"> UI/UX design</span>. 
                Creating exceptional digital experiences that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-glow flex items-center justify-center space-x-2"
              >
                <span>Let's Work Together</span>
                <ExternalLink size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 glass"
              >
                View My Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Peshawar, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-sm">+92 330 9166159</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ Icon, href, color, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 glass rounded-xl text-gray-400 ${color} transition-all duration-300 hover:shadow-glow group`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Animated background rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full"
              />
              
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Muhammad ALi - Full Stack Developer"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl glass"
              />
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -top-6 -right-6 p-4 glass rounded-xl shadow-glow float-animation"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-400">3+</span>
                  <p className="text-xs text-gray-300">Years Experience</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -bottom-6 -left-6 p-4 glass rounded-xl shadow-glow float-animation"
                style={{ animationDelay: '3s' }}
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-cyan-400">50+</span>
                  <p className="text-xs text-gray-300">Projects Done</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={24} className="group-hover:text-blue-400 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;