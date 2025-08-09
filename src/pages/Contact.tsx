import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  // Initialize Formspree hook - replace 'yourFormID' with your actual Formspree ID
  const [state, handleSubmit] = useForm("xdkdyeyp");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enhanced submit handler to integrate with Formspree
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit data to Formspree
    const result = await handleSubmit(e);

    if (result && !state.submitting && !state.succeeded) {
      // handle any errors here if needed
      return;
    }

    if (state.succeeded) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We are here to help you. If you have any questions, please contact us.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {/* Contact Information */}
          <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                {[ /* same contact info array as before */ 
                  { icon: Phone, title: 'Phone', lines: ['+92-300-1234567', '+92-42-12345678'] },
                  { icon: Mail, title: 'Email', lines: ['info@hopefoundation.org', 'donate@hopefoundation.org'] },
                  { icon: MapPin, title: 'Address', lines: ['123 Main Street, Gulberg III', 'Lahore, Punjab 54000', 'Pakistan'] },
                  { icon: Clock, title: 'Office Hours', lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'] }
                ].map(({ icon: Icon, title, lines }, idx) => (
                  <motion.div key={idx} className="flex items-start space-x-4" variants={itemVariants}>
                    <div className="bg-red-600 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      {lines.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className="bg-red-50 rounded-lg p-6" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-800">Quick Response</h3>
              </div>
              <p className="text-red-700 text-sm">
                24/7 WhatsApp support is available for emergency cases. For urgent donations or assistance, please call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </motion.div>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+92-300-1234567"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="complaint">Complaint/Feedback</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={onChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={state.submitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div className="mt-12" variants={itemVariants}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">
                Interactive Map will be integrated here<br />
                (Google Maps or local mapping service)
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div className="mt-12" variants={itemVariants}>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is my donation tax deductible?",
                  answer: "Yes, we are a registered charity and can provide you with a tax exemption certificate."
                },
                {
                  question: "Where is my money used?",
                  answer: "We publish monthly transparency reports where every penny is accounted for."
                },
                {
                  question: "Can I make an anonymous donation?",
                  answer: "Absolutely! We maintain complete privacy and accept anonymous donations."
                },
                {
                  question: "How can I become a volunteer?",
                  answer: "Please fill out the contact form or call us directly. We conduct regular volunteer training programs."
                }
              ].map(({ question, answer }, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
                  <p className="text-gray-600">{answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
