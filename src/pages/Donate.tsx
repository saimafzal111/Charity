import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Shield, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState('general');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const campaigns = [
    { id: 'general', name: 'General Fund', description: 'Where most needed' },
    { id: 'education', name: 'Education for All', description: 'School supplies and fees' },
    { id: 'healthcare', name: 'Healthcare Support', description: 'Medical treatments' },
    { id: 'water', name: 'Clean Water', description: 'Water pumps installation' }
  ];

  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: Building, description: 'Direct bank transfer' },
    { id: 'easypaisa', name: 'EasyPaisa', icon: Smartphone, description: 'Mobile wallet' },
    { id: 'jazzcash', name: 'JazzCash', icon: Smartphone, description: 'Mobile wallet' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, MasterCard' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Donation of Rs ${amount} submitted successfully! Payment method: ${paymentMethod}`);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600">
            Your every donation is secure and transparent. We maintain complete privacy.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={containerVariants}>

          {/* Donation Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campaign Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Campaign
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {campaigns.map((campaign) => (
                      <motion.div
                        key={campaign.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedCampaign === campaign.id
                            ? 'border-red-600 bg-red-50'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setSelectedCampaign(campaign.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">{campaign.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Donation Amount (PKR)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <motion.button
                        key={amt}
                        type="button"
                        className={`p-3 border-2 rounded-lg font-semibold transition-colors ${
                          amount === amt.toString()
                            ? 'border-red-600 bg-red-600 text-white'
                            : 'border-gray-200 text-gray-700 hover:border-red-300'
                        }`}
                        onClick={() => setAmount(amt.toString())}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Rs {amt.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    min="100"
                  />
                </div>

                {/* Privacy Option */}
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsAnonymous(!isAnonymous)}>
                      {isAnonymous ? (
                        <EyeOff className="h-5 w-5 text-red-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900">Anonymous Donation</h3>
                        <p className="text-sm text-gray-600">
                          Your identity will be kept completely private
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        isAnonymous ? 'bg-red-600' : 'bg-gray-200'
                      }`}
                      onClick={() => setIsAnonymous(!isAnonymous)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isAnonymous ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === method.id
                            ? 'border-red-600 bg-red-50'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="flex items-center space-x-3">
                          <method.icon className="h-6 w-6 text-red-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{method.name}</h3>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!amount || parseInt(amount) < 100}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Proceed to Payment - Rs {amount ? parseInt(amount).toLocaleString() : '0'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Security & Trust Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">100% Secure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SSL encrypted transactions</li>
                <li>• Bank-level security</li>
                <li>• No data stored on our servers</li>
                <li>• Complete donor privacy</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Donate?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>100% of your donation goes to the cause</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Monthly transparency reports</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Tax exemption certificate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Direct impact on communities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-red-50 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold text-red-800 mb-2">Need Help?</h3>
              <p className="text-sm text-red-700 mb-3">
                If you face any issues during the donation process, please contact us:
              </p>
              <p className="text-sm text-red-700">
                📞 +92-300-1234567<br />
                ✉️ donate@hopefoundation.org
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Donate;
