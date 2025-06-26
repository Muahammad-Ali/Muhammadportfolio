import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User, FileText, CheckCircle, Clock, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alikhanuet2021@gmail.com',
      href: 'alikhanuet2021@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 3179888611',
      href: 'tel:+92 3179888611',
      color: 'from-green-500 to-emerald-500',
      description: 'Call me for urgent projects'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'University Road, Peshawar, Pakistan',
      href: '#',
      color: 'from-purple-500 to-pink-500',
      description: 'Available for local meetings'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: '#',
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-700',
      followers: '500+'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn', 
      href: '#',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-600/20',
      followers: '1K+'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      href: 'https://wa.me/923309166159',
      color: 'hover:text-green-400',
      bg: 'hover:bg-green-600/20',
      followers: 'Chat Now'
    }
  ];

  const budgetOptions = [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const timelineOptions = [
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3+ months'
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you have a question, a project idea, or just want to say hello, 
                feel free to reach out!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-yellow-400">4.9</span>
                  </div>
                  <div className="text-xs text-gray-400">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 glass rounded-xl hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{contact.title}</h4>
                    <p className="text-gray-300 font-medium">{contact.value}</p>
                    <p className="text-gray-500 text-sm">{contact.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 glass rounded-xl text-gray-400 ${social.color} ${social.bg} transition-all duration-300 text-center group`}
                  >
                    <social.icon size={24} className="mx-auto mb-2" />
                    <div className="text-xs font-medium">{social.name}</div>
                    <div className="text-xs text-gray-500">{social.followers}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-green-400">Message sent successfully! I'll get back to you within 24 hours.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 glass border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 glass border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Subject"
                  required
                  className="w-full pl-12 pr-4 py-4 glass border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 glass border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select Budget</option>
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-gray-800">{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-4 glass border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select Timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-gray-800">{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="w-full pl-12 pr-4 py-4 glass border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-glow'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-4">
            Built with ❤️ by Muhammad ALi  using React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Muhammad Ali. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;