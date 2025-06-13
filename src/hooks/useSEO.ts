import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const useSEO = ({ title, description, keywords, image, url }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | School Name`;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Add new meta tags
    metaTags.forEach(tag => {
      if (tag.content) {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Cleanup function
    return () => {
      existingMetaTags.forEach(tag => tag.remove());
    };
  }, [title, description, keywords, image, url]);
};

export default useSEO; 