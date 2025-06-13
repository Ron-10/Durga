import React from 'react';

interface SkeletonLoaderProps {
  type?: 'text' | 'card' | 'image';
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type = 'text', 
  className = '' 
}) => {
  const getLoader = () => {
    switch (type) {
      case 'text':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        );
      case 'card':
        return (
          <div className="p-4 border rounded-lg shadow-sm">
            <div className="h-32 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="h-48 bg-gray-200 rounded animate-pulse" />
        );
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {getLoader()}
    </div>
  );
};

export default SkeletonLoader; 