import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };

  const textSizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-glow relative overflow-hidden`}
      >
        {/* Animated background */}
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(45deg, #3b82f6, #06b6d4)",
              "linear-gradient(45deg, #06b6d4, #8b5cf6)",
              "linear-gradient(45deg, #8b5cf6, #3b82f6)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        {/* Icon */}
        <Code2 
          className={`${size === 'large' ? 'w-10 h-10' : size === 'medium' ? 'w-6 h-6' : 'w-4 h-4'} text-white relative z-10`} 
        />
        
        {/* Shine effect */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <span className={`${textSizes[size]} font-bold gradient-text leading-none`}>
          MUHAMMAD
        </span>
        {size !== 'small' && (
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            Developer
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default Logo;