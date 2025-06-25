import React, { useState } from 'react';
import { Briefcase, Mail, Phone, Search, X } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  qualifications: string;
}

const staff: StaffMember[] = [
  {
    name: 'Mr. Bhoj Bahadur Karki',
    role: 'Principal',
    department: 'Administration',
    email: 'e.reed@school.edu',
    phone: '123-456-7890',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    bio: 'With over 20 years of experience in educational leadership, Dr. Reed is dedicated to fostering an environment of academic excellence and holistic development. He believes in nurturing every student to their fullest potential.',
    qualifications: 'Ph.D. in Education, M.Ed. in School Administration'
  },
  {
    name: 'Mr. Samuel Greene',
    role: 'Head of Science Department',
    department: 'Science',
    email: 's.greene@school.edu',
    phone: '123-456-7891',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    bio: 'Mr. Greene has been leading the Science Department for over 15 years. He is passionate about science education and inspiring the next generation of scientists.',
    qualifications: 'Ph.D. in Biology, M.Sc. in Environmental Science'
  },
  {
    name: 'Ms. Clara Evans',
    role: 'Head of Mathematics Department',
    department: 'Mathematics',
    email: 'c.evans@school.edu',
    phone: '123-456-7892',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd',
    bio: 'Ms. Evans has been at the forefront of mathematics education for over 20 years. She is dedicated to making math accessible and enjoyable for all students.',
    qualifications: 'Ph.D. in Mathematics, M.A. in Education'
  },
  {
    name: 'Mr. Leo Hayes',
    role: 'Sports Coordinator',
    department: 'Sports',
    email: 'l.hayes@school.edu',
    phone: '123-456-7893',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    bio: 'Mr. Hayes has been coordinating sports activities for the school for over 10 years. He is passionate about sports and physical education.',
    qualifications: 'B.Sc. in Physical Education, M.A. in Sports Management'
  },
];

const StaffModal = ({ member, onClose }: { member: StaffMember; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
        <X size={24} />
      </button>
      <div className="text-center">
        <img
          src={`${member.image}?auto=format&fit=crop&w=500&q=80`}
          alt={member.name}
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-200"
        />
        <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
        <p className="text-blue-600 text-lg mb-4">{member.role}</p>
        <div className="text-left mt-6">
          <h4 className="font-bold text-gray-800 text-lg mb-2">About</h4>
          <p className="text-gray-600 mb-4">{member.bio}</p>
          <h4 className="font-bold text-gray-800 text-lg mb-2">Qualifications</h4>
          <p className="text-gray-600">{member.qualifications}</p>
        </div>
      </div>
    </div>
  </div>
);

function Staff() {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStaff = staff.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Meet Our Dedicated Staff</h1>
          <p className="mt-2 text-lg text-gray-600">
            Our team of experienced educators and professionals is committed to providing the best learning experience.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input 
              type="text"
              placeholder="Search by name or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStaff.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md text-center p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedStaff(member)}
            >
              <img
                src={`${member.image}?auto=format&fit=crop&w=500&q=80`}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedStaff && <StaffModal member={selectedStaff} onClose={() => setSelectedStaff(null)} />}
    </div>
  );
}

export default Staff;