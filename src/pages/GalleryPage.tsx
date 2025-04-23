import React, { useState, useMemo } from 'react';
import ImageGallery from '../components/ImageGallery';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import MobileMenu from '../components/MobileMenu';
import MasonryGrid from '../components/MasonryGrid';

interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMasonryView, setIsMasonryView] = useState(false);

  const sampleImages: Image[] = [
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Mountain Landscape",
      title: "Mountain View",
      description: "Beautiful mountain landscape with snow-capped peaks",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Ocean Sunset",
      title: "Ocean Sunset",
      description: "Stunning sunset over the ocean waves",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Forest Path",
      title: "Forest Path",
      description: "Serene path through a dense forest",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "City Skyline",
      title: "City Skyline",
      description: "Modern city skyline at night",
      category: "Urban"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Desert Dunes",
      title: "Desert Dunes",
      description: "Golden sand dunes stretching to the horizon",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Waterfall",
      title: "Waterfall",
      description: "Majestic waterfall in the wilderness",
      category: "Nature"
    }
  ];

  const categories = ['All', ...new Set(sampleImages.map(img => img.category))];

  const filteredImages = useMemo(() => {
    return sampleImages.filter(image => {
      const matchesCategory = activeCategory === 'All' || image.category === activeCategory;
      const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          image.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [sampleImages, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Gallery</h1>
            <p className="text-xl text-gray-600">Explore our collection of stunning images</p>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setIsMasonryView(!isMasonryView)}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMasonryView ? 'Grid View' : 'Masonry View'}
            </button>
          </div>
        </div>

        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Open Categories
          </button>
        </div>

        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by title or description..."
        />

        <div className="hidden md:block">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {filteredImages.length > 0 ? (
          isMasonryView ? (
            <MasonryGrid
              images={filteredImages}
              onImageClick={setSelectedImage}
            />
          ) : (
            <ImageGallery
              images={filteredImages}
              onImageClick={setSelectedImage}
            />
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found matching your criteria.</p>
          </div>
        )}

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </div>
  );
};

export default GalleryPage; 