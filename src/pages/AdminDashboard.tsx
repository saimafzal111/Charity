import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Eye, 
  Download, 
  Calendar,
  CreditCard,
  Smartphone,
  Building,
  LogOut,
  Shield,
  BarChart3,
  PieChart,
  FileText
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  // Mock data - In real app, this would come from API
  const stats = {
    totalDonations: 12500000,
    totalDonors: 2847,
    activeCampaigns: 3,
    thisMonthDonations: 1850000
  };

  const recentDonations = [
    { id: 1, amount: 5000, method: 'Bank Transfer', campaign: 'Education for All', date: '2024-01-15', anonymous: true },
    { id: 2, amount: 2500, method: 'EasyPaisa', campaign: 'Clean Water', date: '2024-01-15', anonymous: false },
    { id: 3, amount: 10000, method: 'JazzCash', campaign: 'Healthcare', date: '2024-01-14', anonymous: true },
    { id: 4, amount: 1000, method: 'Credit Card', campaign: 'General Fund', date: '2024-01-14', anonymous: false },
    { id: 5, amount: 7500, method: 'Bank Transfer', campaign: 'Education for All', date: '2024-01-13', anonymous: true }
  ];

  const campaignStats = [
    { name: 'Education for All', raised: 3500000, goal: 8000000, donors: 1250 },
    { name: 'Clean Water Initiative', raised: 2800000, goal: 4500000, donors: 890 },
    { name: 'Healthcare Support', raised: 4200000, goal: 6000000, donors: 1340 }
  ];

  const paymentMethodStats = [
    { method: 'Bank Transfer', amount: 6200000, percentage: 49.6, icon: Building },
    { method: 'EasyPaisa', amount: 3100000, percentage: 24.8, icon: Smartphone },
    { method: 'JazzCash', amount: 2200000, percentage: 17.6, icon: Smartphone },
    { method: 'Credit Card', amount: 1000000, percentage: 8.0, icon: CreditCard }
  ];

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'Bank Transfer': return <Building className="h-4 w-4" />;
      case 'EasyPaisa': case 'JazzCash': return <Smartphone className="h-4 w-4" />;
      case 'Credit Card': return <CreditCard className="h-4 w-4" />;
      default: return <DollarSign className="h-4 w-4" />;
    }
  };

  const StatCard = ({ title, value, icon: Icon, trend }: any) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 flex items-center mt-1">
              <TrendingUp className="h-4 w-4 mr-1" />
              {trend}
            </p>
          )}
        </div>
        <div className="bg-red-600 p-3 rounded-full">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'donations', name: 'Donations', icon: DollarSign },
              { id: 'campaigns', name: 'Campaigns', icon: PieChart },
              { id: 'reports', name: 'Reports', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Donations"
                value={`Rs ${stats.totalDonations.toLocaleString()}`}
                icon={DollarSign}
                trend="+12% from last month"
              />
              <StatCard
                title="Total Donors"
                value={stats.totalDonors.toLocaleString()}
                icon={Users}
                trend="+8% from last month"
              />
              <StatCard
                title="Active Campaigns"
                value={stats.activeCampaigns}
                icon={TrendingUp}
              />
              <StatCard
                title="This Month"
                value={`Rs ${stats.thisMonthDonations.toLocaleString()}`}
                icon={Calendar}
                trend="+15% from last month"
              />
            </div>

            {/* Payment Methods Distribution */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods Distribution</h2>
              <div className="space-y-4">
                {paymentMethodStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <stat.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="font-medium text-gray-900">{stat.method}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-600 h-2 rounded-full"
                          style={{ width: `${stat.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{stat.percentage}%</span>
                      <span className="font-semibold text-gray-900 w-24 text-right">
                        Rs {stat.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Recent Donations</h2>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Data</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campaign
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Privacy
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentDonations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Rs {donation.amount.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getPaymentMethodIcon(donation.method)}
                            <span className="text-sm text-gray-900">{donation.method}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{donation.campaign}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{donation.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            donation.anonymous 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {donation.anonymous ? 'Anonymous' : 'Public'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-red-600 hover:text-red-900 flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">View Details</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Campaign Performance</h2>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Create New Campaign
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {campaignStats.map((campaign, index) => {
                const progress = (campaign.raised / campaign.goal) * 100;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">{campaign.donors} donors</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          Rs {campaign.raised.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          of Rs {campaign.goal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>{progress.toFixed(1)}% Complete</span>
                        <span>Rs {(campaign.goal - campaign.raised).toLocaleString()} remaining</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                        View Details
                      </button>
                      <button className="flex-1 border border-red-600 text-red-600 py-2 px-4 rounded-md hover:bg-red-50 transition-colors">
                        Edit Campaign
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Financial Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Report</h3>
                <p className="text-gray-600 mb-4">January 2024 financial summary</p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Report</h3>
                <p className="text-gray-600 mb-4">Complete 2023 transparency report</p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Documents</h3>
                <p className="text-gray-600 mb-4">Tax exemption certificates</p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download ZIP</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Custom Report</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Financial Summary</option>
                    <option>Donor Report</option>
                    <option>Campaign Analysis</option>
                    <option>Payment Methods</option>
                  </select>
                </div>
              </div>
              <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;