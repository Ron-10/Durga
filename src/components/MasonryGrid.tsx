import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MasonryGridProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  onImageClick: (index: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, onImageClick }) => {
  const [columns, setColumns] = useState(3);
  const [heights, setHeights] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    const calculateHeights = () => {
      const newHeights = images.map(() => Math.random() * 200 + 200);
      setHeights(newHeights);
    };

    calculateHeights();
  }, [images]);

  const getColumnImages = (columnIndex: number) => {
    return images.filter((_, index) => index % columns === columnIndex);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4" ref={containerRef}>
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="space-y-4">
          {getColumnImages(columnIndex).map((image, index) => {
            const globalIndex = columnIndex + index * columns;
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={globalIndex}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => onImageClick(globalIndex)}
                style={{ height: heights[globalIndex] }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid; 