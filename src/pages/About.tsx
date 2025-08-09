import React from 'react';
import { Users, Award, Target, Heart, CheckCircle } from 'lucide-react';

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
      description: 'Har paisa ka hisab kitab public hai. Monthly reports aur audit results share karte hain.'
    },
    {
      title: 'Accountability',
      description: 'Donors ko complete information dete hain ke unka paisa kahan aur kaise use hua hai.'
    },
    {
      title: 'Privacy',
      description: 'Donor ki privacy hamari priority hai. Anonymous donations ki complete security.'
    },
    {
      title: 'Impact',
      description: 'Real change create karna hai, sirf statistics nahi. Ground level par difference.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Hope Foundation</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              2018 mein establish hua, Hope Foundation Pakistan ka leading charity organization hai 
              jo education, healthcare, aur poverty alleviation mein specialized hai.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Pakistan mein underprivileged communities ko quality education, healthcare, 
                aur basic necessities provide karna. Hum sustainable development ke through 
                poverty cycle ko break karna chahte hain aur har individual ko equal opportunities dena chahte hain.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Ek aise Pakistan ka vision hai jahan har bachcha school ja sake, har family ko 
                clean water aur healthcare mil sake, aur koi bhi poverty ki wajah se apne dreams 
                compromise na kare. Hum ek equitable society banane mein believe karte hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">6 saal mein jo kuch achieve kiya hai</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</div>
                <div className="text-gray-600">{achievement.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Jo principles par hum kaam karte hain</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal & Compliance</h2>
            <p className="text-xl text-gray-600">Hum fully registered aur compliant organization hain</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>NGO Registration:</strong> NGO-2024-001</p>
                <p><strong>Date:</strong> January 15, 2018</p>
                <p><strong>Authority:</strong> Government of Punjab</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Exemption</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Certificate:</strong> U/S 2(36)</p>
                <p><strong>NTN:</strong> 1234567-8</p>
                <p><strong>Valid Until:</strong> December 2025</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Banking</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Account:</strong> 0123456789</p>
                <p><strong>Bank:</strong> HBL Main Branch</p>
                <p><strong>City:</strong> Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Experienced professionals jo is mission ko lead kar rahe hain</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Ahmad Ali Khan</h3>
              <p className="text-gray-600 mb-2">Chief Executive Officer</p>
              <p className="text-sm text-gray-500">15+ years experience in social work</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Program Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Fatima Sheikh</h3>
              <p className="text-gray-600 mb-2">Program Director</p>
              <p className="text-sm text-gray-500">Expert in community development</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Finance Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Muhammad Hassan</h3>
              <p className="text-gray-600 mb-2">Finance Director</p>
              <p className="text-sm text-gray-500">CA with NGO sector expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;