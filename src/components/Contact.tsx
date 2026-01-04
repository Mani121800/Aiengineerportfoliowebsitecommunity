import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MessageSquare, Phone, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import resumePage1 from 'figma:asset/e71dfd70dcdf39971a11fef2d226a5dff4a8de68.png';
import resumePage2 from 'figma:asset/92b847f691df4161cff5a2b63c0085d9d7277ada.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadResume = async () => {
    try {
      // Dynamic import of jsPDF
      const { jsPDF } = await import('jspdf');
      
      // Create new PDF document (A4 size)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Function to load image and get dimensions
      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      // Load both images
      const img1 = await loadImage(resumePage1);
      const img2 = await loadImage(resumePage2);

      // A4 dimensions in mm
      const pageWidth = 210;
      const pageHeight = 297;

      // Add first page
      const img1Ratio = img1.width / img1.height;
      const img1Height = pageWidth / img1Ratio;
      pdf.addImage(resumePage1, 'PNG', 0, 0, pageWidth, img1Height);

      // Add second page
      pdf.addPage();
      const img2Ratio = img2.width / img2.height;
      const img2Height = pageWidth / img2Ratio;
      pdf.addImage(resumePage2, 'PNG', 0, 0, pageWidth, img2Height);

      // Save the PDF
      pdf.save('Manikandan_S_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next big AI innovation? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MessageSquare className="text-blue-400" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Send className="mr-2" size={16} />
                    Launch Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Avatar & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Animated AI Avatar */}
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-40 h-40 mx-auto mb-6 relative"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center text-6xl">
                  🤖
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-400/20 rounded-full"
                />
              </motion.div>
              <p className="text-gray-300 text-lg">
                "Ready to process your ideas into reality!"
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "manikandan1905213@gmail.com", href: "mailto:manikandan1905200@gmail.com", color: "from-red-400 to-pink-400" },
                  { icon: Phone, label: "+91 6369980735", href: "tel:+916369980700", color: "from-green-400 to-blue-400" },
                  { icon: Github, label: "GitHub Profile", href: "https://github.com/manikandan-s", color: "from-gray-400 to-gray-600" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/manikandan-s-profile", color: "from-blue-400 to-blue-600" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                  onClick={handleDownloadResume}
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 bg-opacity-20">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Download Resume
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-500">
            © 2026 Manikandan S. Building scalable solutions with modern technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}