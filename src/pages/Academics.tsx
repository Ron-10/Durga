import React from 'react';
import { BookOpen, Award, Users, Clock, Calendar, GraduationCap, Atom, Palette, Music, Dribbble } from 'lucide-react';

const Academics = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Academics</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-2xl mx-auto">
              Explore our comprehensive academic programs, innovative curriculum, and the dedicated faculty that drive our mission of educational excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Primary Level',
                grades: 'Grades 1-5',
                description: 'Our foundational years focus on nurturing curiosity and building core competencies in literacy and numeracy. We create a supportive environment for holistic development.',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Languages', 'Arts & Crafts'],
              },
              {
                title: 'Middle Level',
                grades: 'Grades 6-8',
                description: 'We offer an intermediate education that encourages critical thinking and exploration, with a broader range of subjects and co-curricular activities to foster diverse interests.',
                subjects: ['Advanced Mathematics', 'Integrated Science', 'Computer Science', 'Literature', 'History', 'Geography'],
              },
              {
                title: 'Secondary Level',
                grades: 'Grades 9-10',
                description: 'Our curriculum is designed for in-depth knowledge and preparation for board examinations, with specialized subject tracks to help students pursue their academic goals.',
                subjects: ['Physics', 'Chemistry', 'Biology', 'Advanced Mathematics', 'Computer Science', 'Economics'],
              },
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <GraduationCap className="w-12 h-12 text-[#007BFF] mb-4" />
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-[#007BFF] font-medium mb-4">{program.grades}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <h4 className="font-semibold mb-2">Key Subjects:</h4>
                <ul className="space-y-2">
                  {program.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Curriculum & Pedagogy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Our Teaching Methodology</h3>
              <ul className="space-y-4">
                {[
                  'Student-centric, interactive learning environment',
                  'Emphasis on project-based and experiential learning',
                  'Continuous and comprehensive assessments with constructive feedback',
                  'Personalized attention to cater to individual learning styles',
                  'Seamless integration of modern technology in the classroom',
                ].map((method, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <BookOpen className="w-5 h-5 text-[#007BFF] mr-3 mt-1 flex-shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Assessment & Evaluation</h3>
              <ul className="space-y-4">
                {[
                  'A continuous and comprehensive evaluation (CCE) process',
                  'Formative assessments including quizzes, and assignments',
                  'Summative assessments through term-end examinations',
                  'Practical and project work evaluation for hands-on skills',
                  'Regular parent-teacher meetings to discuss student progress',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Award className="w-5 h-5 text-[#007BFF] mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Science', icon: Atom, color: 'blue' },
              { name: 'Mathematics', icon: GraduationCap, color: 'green' },
              { name: 'Humanities', icon: Users, color: 'purple' },
              { name: 'Arts & Music', icon: Palette, color: 'red' },
            ].map((dept) => (
              <div key={dept.name} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <dept.icon className={`w-16 h-16 text-${dept.color}-500 mx-auto mb-4`} />
                <h3 className="text-xl font-bold">{dept.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Clubs & Societies</h3>
              <ul>
                <li>Debate Club</li>
                <li>Science Club</li>
                <li>Literary Society</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Sports</h3>
              <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Athletics</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Performing Arts</h3>
              <ul>
                <li>Drama</li>
                <li>Music</li>
                <li>Dance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Calendar</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Important Dates</h3>
                  <ul className="space-y-4">
                    {[
                      { date: 'April 1, 2024', event: 'New Academic Session Begins' },
                      { date: 'July 15, 2024', event: 'First Term Examinations' },
                      { date: 'December 1, 2024', event: 'Final Term Examinations' },
                      { date: 'March 15, 2025', event: 'Annual Day Celebration' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 text-[#007BFF] mr-3" />
                        <span className="font-medium mr-2">{item.date}:</span>
                        {item.event}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">School Timings</h3>
                  <ul className="space-y-4">
                    {[
                      { day: 'Monday - Friday', time: '8:00 AM - 3:00 PM' },
                      { day: 'Saturday', time: '8:00 AM - 12:00 PM' },
                      { day: 'Extra Classes', time: '3:00 PM - 4:30 PM' },
                      { day: 'Library Hours', time: '8:00 AM - 4:00 PM' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 text-[#007BFF] mr-3" />
                        <span className="font-medium mr-2">{item.day}:</span>
                        {item.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                subject: 'Science Department Head',
                experience: '15+ years experience',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
              },
              {
                name: 'Prof. Michael Chen',
                subject: 'Mathematics Department Head',
                experience: '12+ years experience',
                image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80',
              },
              {
                name: 'Ms. Emily Parker',
                subject: 'English Department Head',
                experience: '10+ years experience',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              },
            ].map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faculty.name}</h3>
                  <p className="text-[#007BFF] mb-2">{faculty.subject}</p>
                  <p className="text-gray-600">{faculty.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;