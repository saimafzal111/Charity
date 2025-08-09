import React from 'react';
import { Calendar, MapPin, Users, Target, TrendingUp } from 'lucide-react';

const Projects = () => {
  const activeProjects = [
    {
      id: 1,
      title: 'Education for All - Phase 3',
      description: 'Rural areas mein 50 schools establish karna aur 5000 children ko quality education provide karna.',
      location: 'Punjab, Sindh, KPK',
      startDate: 'January 2024',
      endDate: 'December 2024',
      beneficiaries: 5000,
      raised: 3500000,
      goal: 8000000,
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'active'
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      description: 'Remote villages mein solar-powered water pumps install karna aur clean drinking water provide karna.',
      location: 'Balochistan, South Punjab',
      startDate: 'March 2024',
      endDate: 'August 2024',
      beneficiaries: 15000,
      raised: 2800000,
      goal: 4500000,
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'active'
    },
    {
      id: 3,
      title: 'Healthcare Mobile Units',
      description: 'Mobile medical units ke through remote areas mein free healthcare services provide karna.',
      location: 'All Provinces',
      startDate: 'February 2024',
      endDate: 'November 2024',
      beneficiaries: 25000,
      raised: 4200000,
      goal: 6000000,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'active'
    }
  ];

  const completedProjects = [
    {
      id: 4,
      title: 'Emergency Flood Relief 2023',
      description: 'Flood affected families ko emergency supplies aur temporary shelter provide kiya.',
      location: 'Sindh, South Punjab',
      completedDate: 'October 2023',
      beneficiaries: 12000,
      totalSpent: 5500000,
      image: 'https://images.pexels.com/photos/6995334/pexels-photo-6995334.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Winter Relief Program 2023',
      description: 'Northern areas mein winter supplies aur warm clothing distribution.',
      location: 'KPK, Northern Areas',
      completedDate: 'March 2023',
      beneficiaries: 8000,
      totalSpent: 3200000,
      image: 'https://images.pexels.com/photos/6995334/pexels-photo-6995334.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    }
  ];

  const ProjectCard = ({ project, isCompleted = false }: { project: any, isCompleted?: boolean }) => {
    const progress = isCompleted ? 100 : (project.raised / project.goal) * 100;
    
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isCompleted 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {isCompleted ? 'Completed' : 'Active'}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {isCompleted ? project.completedDate : `${project.startDate} - ${project.endDate}`}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-red-600" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-red-600" />
              <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
            </div>
          </div>

          {!isCompleted ? (
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Raised: Rs {project.raised.toLocaleString()}</span>
                <span>Goal: Rs {project.goal.toLocaleString()}</span>
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
          ) : (
            <div className="mb-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">Total Spent:</span>
                <span className="text-lg font-bold text-green-900">
                  Rs {project.totalSpent.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {!isCompleted && (
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
              Support This Project
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ye hamare current aur completed projects hain jo communities ki lives mein real difference create kar rahe hain.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Target className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">150+</div>
            <div className="text-gray-600">Completed Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">45,000</div>
            <div className="text-gray-600">Current Beneficiaries</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">25+</div>
            <div className="text-gray-600">Districts Covered</div>
          </div>
        </div>

        {/* Active Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recently Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isCompleted={true} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Start Your Own Project?</h2>
          <p className="text-xl mb-6 text-red-100">
            Agar aapke paas koi specific cause hai jiske liye aap donation collect karna chahte hain, 
            hum aapki help kar sakte hain.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Us for Custom Project
          </button>
        </section>
      </div>
    </div>
  );
};

export default Projects;