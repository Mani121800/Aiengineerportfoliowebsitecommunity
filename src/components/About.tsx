import React from 'react';
import { motion } from 'motion/react';
import { Code, Server, Database } from 'lucide-react';
import profileImage from 'figma:asset/c9ec9b4858e5e399cc0bc7a78a733f673b248aec.png';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Manikandan S" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Full Stack Software Engineer with 2+ years of experience
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Results-driven Full Stack Developer specializing in architecting scalable web applications using 
              Python, Django, FastAPI, and microservices. Demonstrated expertise in optimizing database performance 
              by 30%, implementing secure payment systems, and delivering enterprise solutions within Agile frameworks.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With professional experience at Aura Harks Technology and expertise in RESTful API development, 
              real-time applications, and cloud deployment, I build robust solutions that scale. Passionate about 
              mentoring teams and creating efficient, maintainable code.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Clean code advocate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="text-purple-400" size={20} />
                <span>Backend specialist</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="text-pink-400" size={20} />
                <span>Database optimizer</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Building scalable solutions that make a difference, one line of code at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}