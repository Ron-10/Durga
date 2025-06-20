import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Users, BookOpen } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistently achieving high pass rates in SEE examinations",
      icon: Trophy,
      color: "bg-yellow-500",
      stats: "95%"
    },
    {
      title: "Sports Champions",
      description: "Multiple district level sports championships",
      icon: Target,
      color: "bg-red-500",
      stats: "15+"
    },
    {
      title: "Cultural Events",
      description: "Recognition in district level cultural competitions",
      icon: Star,
      color: "bg-purple-500",
      stats: "10+"
    },
    {
      title: "Teacher Excellence",
      description: "Awards for innovative teaching methods",
      icon: Award,
      color: "bg-blue-500",
      stats: "5+"
    },
    {
      title: "Student Success",
      description: "Students placed in top colleges and universities",
      icon: Users,
      color: "bg-green-500",
      stats: "100+"
    },
    {
      title: "Community Service",
      description: "Active participation in community development",
      icon: BookOpen,
      color: "bg-indigo-500",
      stats: "20+"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in education, sports, and cultural activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${achievement.color} p-6`}>
                <div className="flex items-center justify-between">
                  <achievement.icon className="w-8 h-8 text-white" />
                  <span className="text-2xl font-bold text-white">
                    {achievement.stats}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Successful Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Expert Teachers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection; 