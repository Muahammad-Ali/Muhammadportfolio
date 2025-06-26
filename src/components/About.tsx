import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Palette, Globe, Zap, Users, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'MERN Stack Development', level: 85, color: 'from-green-500 to-blue-500', icon: Code },
    { name: 'WordPress Development', level: 95, color: 'from-blue-500 to-purple-500', icon: Globe },
    { name: 'UI/UX Design', level: 90, color: 'from-purple-500 to-pink-500', icon: Palette },
    { name: 'JavaScript/TypeScript', level: 88, color: 'from-yellow-500 to-orange-500', icon: Zap },
    { name: 'React/Next.js', level: 85, color: 'from-cyan-500 to-blue-500', icon: Code },
    { name: 'Node.js/Express', level: 80, color: 'from-green-600 to-green-400', icon: Zap },
  ];

  const achievements = [
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Projects Completed', icon: Trophy },
    { number: '30+', label: 'Happy Clients', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Zap },
  ];

  const languages = [
    { name: 'English', level: 'Professional', flag: '🇺🇸', percentage: 90 },
    { name: 'Urdu', level: 'Native', flag: '🇵🇰', percentage: 100 },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a focus on creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Muhammad Ali"
                className="w-full rounded-2xl shadow-2xl glass"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-gray-400">2021 - 2025</p>
                </div>
              </div>
              <p className="text-gray-300">
                <strong className="text-blue-400">Bachelor of Science</strong><br />
                University of Engineering and technologies, Pakistan
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🌐</span> Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                      </div>
                      <span className="text-blue-400 font-medium">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="mr-3 text-blue-400" size={24} />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a dedicated developer with a passion for building responsive, user-friendly 
                  websites and applications. My expertise spans across modern web technologies, 
                  with a focus on creating seamless digital experiences.
                </p>
                <p>
                  With <span className="text-blue-400 font-semibold">3+ years of experience</span> in WordPress development, 
                  I specialize in website design, theme customization, plugin integration, and SEO optimization. 
                  Additionally, I have strong experience in UI/UX design, creating intuitive and engaging user interfaces.
                </p>
                <p>
                  Currently expanding my skills in the <span className="text-cyan-400 font-semibold">MERN stack</span>, 
                  I'm passionate about full-stack web development and always eager to learn new technologies and best practices.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Palette className="mr-3 text-cyan-400" size={24} />
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <skill.icon size={16} className="mr-2 text-blue-400" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-glow transition-all duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <achievement.icon className="mx-auto mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors" size={32} />
              <div className="text-3xl font-bold text-white mb-2 gradient-text">{achievement.number}</div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;