import { Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    { icon: Users, title: '50,000+', subtitle: 'Lives Impacted' },
    { icon: Award, title: '150+', subtitle: 'Projects Completed' },
    { icon: Target, title: '25+', subtitle: 'Districts Covered' },
    { icon: Heart, title: '2,500+', subtitle: 'Active Donors' }
  ];

  const values = [
    {
      title: 'Transparency',
      description: "Every penny is accounted for. We share monthly reports and audit results with the public."
    },
    {
      title: 'Accountability',
      description: "We provide donors with complete information about where and how their money was used."
    },
    {
      title: 'Privacy',
      description: "Donor privacy is our priority. Complete security for anonymous donations."
    },
    {
      title: 'Impact',
      description: "We aim to create real change, not just statistics — making a difference at the ground level."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-6">About Hope Foundation</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            "Established in 2018, Hope Foundation is one of Pakistan’s leading charity organizations, specializing in education, healthcare, and poverty alleviation."
          </p>
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" variants={containerVariants}>
            <motion.div className="bg-red-50 p-8 rounded-lg" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                "Providing underprivileged communities in Pakistan with quality education, healthcare, and basic necessities. Through sustainable development, we aim to break the cycle of poverty and give every individual equal opportunities."
              </p>
            </motion.div>
            <motion.div className="bg-blue-50 p-8 rounded-lg" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                "We envision a Pakistan where every child can attend school, every family has access to clean water and healthcare, and no one has to compromise their dreams because of poverty. We believe in building an equitable society."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">"What we have achieved in 6 years"</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
            {achievements.map((achievement, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</div>
                <div className="text-gray-600">{achievement.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">"The principles we work on"</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {values.map((value, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Legal Information */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal & Compliance</h2>
            <p className="text-xl text-gray-600">"We are a fully registered and compliant organization."</p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>NGO Registration:</strong> NGO-2024-001</p>
                <p><strong>Date:</strong> January 15, 2018</p>
                <p><strong>Authority:</strong> Government of Punjab</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Exemption</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Certificate:</strong> U/S 2(36)</p>
                <p><strong>NTN:</strong> 1234567-8</p>
                <p><strong>Valid Until:</strong> December 2025</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Banking</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Account:</strong> 0123456789</p>
                <p><strong>Bank:</strong> HBL Main Branch</p>
                <p><strong>City:</strong> Lahore, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">"Experienced professionals leading this mission."</p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
                name: "Sufyan Ashraf",
                role: "Chief Executive Officer",
                experience: "15+ years experience in social work"
              },
              {
                img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
                name: "Saim Afzal",
                role: "Program Director",
                experience: "Expert in community development"
              },
              {
                img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300",
                name: "Muhammad Usman",
                role: "Finance Director",
                experience: "CA with NGO sector expertise"
              }
            ].map((member, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
