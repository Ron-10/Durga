import React from 'react';
import { hoverEffects, mobileStyles } from '../utils/hoverEffects';

interface ResponsiveCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  className?: string;
}

const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  title,
  description,
  image,
  link,
  className = '',
}) => {
  const cardContent = (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverEffects.card} ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover ${hoverEffects.image}`}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className={`${mobileStyles.text.subheading} font-bold mb-2 ${hoverEffects.link}`}>
          {title}
        </h3>
        <p className={`${mobileStyles.text.body} text-gray-600`}>
          {description}
        </p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ResponsiveCard; 