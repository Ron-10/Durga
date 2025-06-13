import React from 'react';
import { Trophy, Search, Download } from 'lucide-react';

const Results = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Examination Results</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Result Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">Select Class</option>
                <option value="10">Class 10</option>
                <option value="9">Class 9</option>
                <option value="8">Class 8</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                <option value="">Select Term</option>
                <option value="final">Final Term</option>
                <option value="mid">Mid Term</option>
                <option value="first">First Term</option>
              </select>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition-colors duration-200">
              Search Result
            </button>
          </div>
        </div>

        {/* Recent Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Results</h2>
          <div className="grid gap-6">
            {[
              {
                exam: 'Final Term Examination 2024',
                class: 'Class 10',
                date: '2024-03-15',
                status: 'Published',
              },
              {
                exam: 'Mid Term Examination 2024',
                class: 'Class 9',
                date: '2024-02-20',
                status: 'Published',
              },
              {
                exam: 'First Term Examination 2024',
                class: 'Class 8',
                date: '2024-01-25',
                status: 'Published',
              },
            ].map((result, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{result.exam}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        {result.class}
                      </span>
                      <span>{new Date(result.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-[#007BFF] text-white rounded-full hover:bg-[#0056b3] transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Guidelines */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Result Guidelines</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {[
                'Enter your roll number exactly as it appears on your admit card',
                'Results are typically published within 2 weeks of examination',
                'For any discrepancies, contact the examination department within 7 days',
                'Keep a copy of your result for future reference',
              ].map((guideline, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;