import React from 'react';
import { GraduationCap, FileText, DollarSign, Calendar } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Admissions</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Submit Application',
                description: 'Fill out the online application form or download and submit the physical form',
              },
              {
                icon: GraduationCap,
                title: 'Entrance Test',
                description: 'Take the entrance assessment test to evaluate academic readiness',
              },
              {
                icon: Calendar,
                title: 'Interview',
                description: 'Personal interview with student and parents',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <step.icon className="w-12 h-12 text-[#007BFF] mb-4" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Fee Structure</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-[#007BFF] mr-2" />
                <h3 className="text-xl font-bold">Academic Year 2024-25</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">One-Time Fees</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Admission Fee</span>
                      <span>Rs. 25,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Security Deposit</span>
                      <span>Rs. 10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Development Fee</span>
                      <span>Rs. 15,000</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Annual Fees</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tuition Fee</span>
                      <span>Rs. 120,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Computer Lab</span>
                      <span>Rs. 8,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Library Fee</span>
                      <span>Rs. 5,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Required Documents</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {[
                'Birth Certificate',
                'Previous School Transfer Certificate',
                'Last 2 Years Academic Records',
                'Passport Size Photographs',
                'Parents\' Identity Proof',
                'Residence Proof',
              ].map((doc, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Admission Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Admission Inquiry</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Applying For
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                    <option>Select Grade</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#007BFF] text-white rounded-full font-medium hover:bg-[#0056b3] transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;