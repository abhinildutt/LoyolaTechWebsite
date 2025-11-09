import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  UserIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null,
      });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      detail: 'ceo_office@loyolatech.com',
      link: 'mailto:ceo_office@loyolatech.com',
      color: '#06B6D4',
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      detail: '+1 (612) 309 6044',
      link: 'tel:+16123096044',
      color: '#3B82F6',
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      detail: '8 The Green Suite B, Dover 19901, USA',
      link: 'https://maps.google.com/?q=8+The+Green+Suite+B+Dover+19901+USA',
      color: '#10B981',
    },
  ];

  const departments = [
    {
      name: 'Admissions',
      description: 'Questions about programs, enrollment, or student life',
    },
    {
      name: 'Research',
      description: 'Research collaborations, lab inquiries, or academic projects',
    },
    {
      name: 'Industry Collaboration',
      description: 'Partnership opportunities, sponsorships, or joint ventures',
    },
    {
      name: 'Student Inquiry',
      description: 'Current student support, resources, or technical assistance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header / Intro Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Get in Touch</span>
              <br />
              <span className="text-white">with Loyola Tech</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Whether you're a student, researcher, or industry partner, we're here to help you 
              connect with the right team at Loyola Tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.icon === MapPinIcon ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all cursor-pointer relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: info.color }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      backgroundColor: `${info.color}20`,
                      border: `2px solid ${info.color}40`,
                    }}
                  >
                    <info.icon 
                      className="w-7 h-7" 
                      style={{ color: info.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-300">{info.detail}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Departments */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/30 relative overflow-hidden">
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-50"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we'll get back to you within 2–3 business days.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircleIcon className="w-24 h-24 text-emerald-400 mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3 text-emerald-400">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300">
                        Thanks! We'll get back to you within 2–3 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                          Full Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Subject Dropdown */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white"
                        >
                          <option value="" className="bg-gray-800">Select a topic...</option>
                          <option value="admissions" className="bg-gray-800">Admissions</option>
                          <option value="research" className="bg-gray-800">Research</option>
                          <option value="industry" className="bg-gray-800">Industry Collaboration</option>
                          <option value="student" className="bg-gray-800">Student Inquiry</option>
                          <option value="other" className="bg-gray-800">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* File Upload */}
                      <div>
                        <label htmlFor="file" className="block text-sm font-semibold mb-2 text-gray-300">
                          Attachment (Optional)
                        </label>
                        <div className="relative">
                          <DocumentTextIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/20 file:text-cyan-400 hover:file:bg-cyan-500/30"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Upload resumes, proposals, or supporting documents (Max 10MB)
                        </p>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl font-bold text-lg transition-all text-white flex items-center justify-center space-x-2"
                        style={{
                          background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                          boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                        }}
                      >
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Departments Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">What Can We Help With?</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="glass rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all"
                    >
                      <h4 className="font-bold text-lg mb-2 text-cyan-400">
                        {dept.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {dept.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 glass rounded-xl p-6 border border-blue-500/30"
                >
                  <h4 className="font-bold text-lg mb-3">Quick Response Time</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Our team typically responds within 2–3 business days. For urgent matters, 
                    please call us directly.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-cyan-400">
                    <ClockIcon className="w-5 h-5" />
                    <span>Mon-Fri, 9:00 AM - 5:00 PM EST</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with 5,000+ developers, researchers, and innovators building the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl font-bold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #06B6D4)',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                Join Discord
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl font-bold transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
              >
                Follow on Twitter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

