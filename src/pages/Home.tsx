import React from 'react';
import { ArrowRight, Users, Heart, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '50,000+' },
    { icon: Heart, label: 'Active Donors', value: '2,500+' },
    { icon: Target, label: 'Projects Completed', value: '150+' },
    { icon: TrendingUp, label: 'Funds Raised', value: 'Rs 5 Crore+' }
  ];

  const campaigns = [
    {
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children',
      raised: 2500000,
      goal: 5000000,
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Clean Water Initiative',
      description: 'Installing water pumps in rural areas',
      raised: 1800000,
      goal: 3000000,
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare Support',
      description: 'Free medical camps and treatments',
      raised: 3200000,
      goal: 4000000,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Together We Can
                <span className="block text-yellow-300">Change Lives</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Hope Foundation Pakistan mein education, healthcare, aur poverty alleviation 
                ke liye dedicated hai. Aapki chhoti si donation bhi kisi ki zindagi badal sakti hai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/donate"
                  className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/projects"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6995334/pexels-photo-6995334.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children studying"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Campaigns</h2>
            <p className="text-xl text-gray-600">
              Ye hamare current projects hain jo aapki support ke intezar mein hain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => {
              const progress = (campaign.raised / campaign.goal) * 100;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Raised: Rs {campaign.raised.toLocaleString()}</span>
                        <span>Goal: Rs {campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-600 mt-1">
                        {progress.toFixed(1)}% Complete
                      </div>
                    </div>

                    <Link 
                      to="/donate"
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-center block"
                    >
                      Support This Cause
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-red-100">
            Aapka har donation transparent aur secure hai. Hum complete accountability provide karte hain.
          </p>
          <Link 
            to="/donate"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center"
          >
            Start Donating Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;