import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Ticket, GraduationCap, Users, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "Lottery Management System",
      description: "Full-featured lottery platform with Django REST Framework microservices for user management, ticketing, secure payments with Stripe, and automated draws",
      icon: Ticket,
      tech: ["Django REST", "Stripe API", "AJAX", "PythonAnywhere"],
      gradient: "from-purple-400 to-pink-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Interactive Online Course Portal",
      description: "E-learning platform with Django backend and React.js frontend featuring video streaming, progress tracking, and subscription-based payment integration",
      icon: GraduationCap,
      tech: ["Django", "React.js", "Video Streaming", "Payment Gateway"],
      gradient: "from-blue-400 to-cyan-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Student Data Management Platform",
      description: "Full-stack application managing 500+ users with automated PDF certificate generation, OTP-based email verification, and RESTful API endpoints",
      icon: Users,
      tech: ["Django", "MySQL", "SMTP", "JavaScript"],
      gradient: "from-green-400 to-emerald-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Face Recognition Attendance System",
      description: "AI-powered attendance tracker using Python and OpenCV with 95% accuracy, RESTful APIs for real-time marking, and PostgreSQL integration",
      icon: Camera,
      tech: ["Python", "OpenCV", "Django REST", "PostgreSQL"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of full-stack applications built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}