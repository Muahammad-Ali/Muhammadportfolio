import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';
import Logo from './Logo';

const LoadingScreen = () => {
  const icons = [Code2, Palette, Smartphone, Zap];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center relative">
        {/* Animated background circles */}
        <div className="absolute inset-0 -m-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-blue-500/20 rounded-full absolute top-0 left-0"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-cyan-500/20 rounded-full absolute bottom-0 right-0"
          />
        </div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 relative z-10"
        >
          <Logo size="large" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">MUHAMMAD ALI</span>
          </h1>
          <p className="text-xl text-gray-300">Full Stack Developer & Designer</p>
        </motion.div>

        <div className="flex justify-center space-x-6 mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              className="p-4 glass rounded-xl"
            >
              <Icon size={28} className="text-blue-400" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="w-80 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full mx-auto relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-gray-400 mt-4"
        >
          Crafting exceptional digital experiences...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;