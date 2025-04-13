import React from 'react';
import { Camera, Filter } from 'lucide-react';

const images = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    title: 'Science Exhibition',
    category: 'Academic',
    year: '2024',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Sports Day',
    category: 'Sports',
    year: '2024',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Cultural Program',
    category: 'Cultural',
    year: '2024',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Annual Day Celebration',
    category: 'Events',
    year: '2023',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    title: 'Art Exhibition',
    category: 'Art',
    year: '2023',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'Graduation Day',
    category: 'Academic',
    year: '2023',
  },
];

const Gallery = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Photo Gallery</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-[#007BFF]" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow">
                <input
                  type="text"
                  placeholder="Search images..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                  <option value="">All Categories</option>
                  <option value="academic">Academic</option>
                  <option value="sports">Sports</option>
                  <option value="cultural">Cultural</option>
                  <option value="events">Events</option>
                  <option value="art">Art</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                  <option value="">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <button className="px-4 py-2 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition-colors duration-200">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-white/20 text-white rounded-full text-sm">
                      {image.category}
                    </span>
                    <span className="px-2 py-1 bg-white/20 text-white rounded-full text-sm">
                      {image.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-[#007BFF] text-white rounded-full hover:bg-[#0056b3] transition-colors duration-200">
            <Camera className="w-5 h-5 mr-2" />
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;