import React from 'react';
import { Trophy, Search, Download, BarChart, UserCheck } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Results = () => {
  const chartData = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Overall Pass Percentage',
        data: [85, 88, 92, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

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
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Examination Results</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-3xl mx-auto">
              Access your academic performance records. Enter your details below to view and download your results.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Result</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Examination</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                  <option value="">Select Term</option>
                  <option value="final">Final Term 2024</option>
                  <option value="mid">Mid Term 2024</option>
                  <option value="first">First Term 2024</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                  <option value="">Select Class</option>
                  <option value="10">Class 10</option>
                  <option value="9">Class 9</option>
                  <option value="8">Class 8</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                />
              </div>
              <div className="md:col-span-1">
                <button className="w-full flex items-center justify-center px-6 py-2 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition-colors duration-200">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hall of Fame */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Hall of Fame - Toppers 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Riya Sharma', class: 'Class 10', score: '98.5%' },
              { name: 'Aarav Singh', class: 'Class 10', score: '97.8%' },
              { name: 'Sneha Verma', class: 'Class 10', score: '97.2%' },
            ].map((topper, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{topper.name}</h3>
                <p className="text-gray-600">{topper.class}</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">{topper.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Statistics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">School Performance Statistics</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Bar data={chartData} />
          </div>
        </div>

        {/* Sample Result Card */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Sample Result Card</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto border-t-4 border-blue-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Final Term Result 2024</h3>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p><strong>Student:</strong> John Doe</p>
              <p><strong>Roll No:</strong> 101</p>
              <p><strong>Class:</strong> 10</p>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Subject</th>
                  <th className="border-b p-2">Marks</th>
                  <th className="border-b p-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b p-2">English</td><td className="border-b p-2">95</td><td className="border-b p-2">A+</td></tr>
                <tr><td className="border-b p-2">Science</td><td className="border-b p-2">92</td><td className="border-b p-2">A+</td></tr>
                <tr><td className="border-b p-2">Maths</td><td className="border-b p-2">98</td><td className="border-b p-2">A+</td></tr>
              </tbody>
            </table>
            <p className="text-right mt-4 font-bold">Overall: 95%, Grade: A+</p>
          </div>
        </div>

        {/* Recent Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Download Full Result Sheets</h2>
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