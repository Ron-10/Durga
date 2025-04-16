import React from 'react';
import { Facebook, Twitter, Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const socialPosts = [
  {
    id: 1,
    platform: 'facebook',
    content: 'Congratulations to our students for their outstanding performance in the district science competition! 🏆 #ProudSchool #Achievement',
    image: '/images/social/science-competition.jpg',
    likes: 245,
    comments: 32,
    date: '2 hours ago'
  },
  {
    id: 2,
    platform: 'instagram',
    content: 'Annual Sports Day preparations in full swing! Our students are ready to showcase their athletic prowess. 🏃‍♂️🎯 #SchoolSports',
    image: '/images/social/sports-prep.jpg',
    likes: 189,
    comments: 24,
    date: '5 hours ago'
  },
  {
    id: 3,
    platform: 'twitter',
    content: 'Join us for the upcoming Parent-Teacher Meeting on May 5th. Your involvement makes a difference in your child\'s education! 📚',
    likes: 156,
    comments: 18,
    date: '1 day ago'
  }
];

const platformIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram
};

const platformColors = {
  facebook: 'text-blue-600',
  twitter: 'text-sky-500',
  instagram: 'text-pink-600'
};

const SocialFeed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Social Media Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay connected with our school community through our social media channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialPosts.map((post) => {
            const PlatformIcon = platformIcons[post.platform as keyof typeof platformIcons];
            const platformColor = platformColors[post.platform as keyof typeof platformColors];

            return (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full ${platformColor} bg-opacity-10`}>
                      <PlatformIcon className={`w-5 h-5 ${platformColor}`} />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{post.date}</span>
                  </div>

                  <p className="text-gray-800 mb-4">{post.content}</p>

                  {post.image && (
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center hover:text-[#007BFF] transition-colors">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </button>
                      <button className="flex items-center hover:text-[#007BFF] transition-colors">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </button>
                    </div>
                    <button className="hover:text-[#007BFF] transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-4">
            {Object.entries(platformIcons).map(([platform, Icon]) => (
              <motion.a
                key={platform}
                href={`#${platform}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${platformColors[platform as keyof typeof platformColors]} bg-opacity-10 hover:bg-opacity-20 transition-colors`}
              >
                <Icon className={`w-6 h-6 ${platformColors[platform as keyof typeof platformColors]}`} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed; 