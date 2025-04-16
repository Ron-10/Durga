import React, { useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Admission Open for 2024-25',
    date: '2024-04-15',
    time: '9:00 AM',
    location: 'School Campus',
    type: 'admission'
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    date: '2024-04-20',
    time: '8:00 AM',
    location: 'School Ground',
    type: 'sports'
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    date: '2024-04-25',
    time: '10:00 AM',
    location: 'School Auditorium',
    type: 'academic'
  },
  {
    id: 4,
    title: 'Science Exhibition',
    date: '2024-05-05',
    time: '11:00 AM',
    location: 'School Labs',
    type: 'academic'
  }
];

const typeColors = {
  admission: 'bg-green-100 text-green-800',
  sports: 'bg-blue-100 text-blue-800',
  academic: 'bg-purple-100 text-purple-800',
  cultural: 'bg-pink-100 text-pink-800'
};

const CalendarWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;
    
    const animate = () => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        if (newPosition >= scrollHeight / 2) {
          scrollContainer.scrollTop = 0;
          return 0;
        }
        scrollContainer.scrollTop = newPosition;
        return newPosition;
      });
    };

    const interval = setInterval(animate, 50);

    return () => clearInterval(interval);
  }, []);

  // Double the events array to create a seamless loop
  const displayEvents = [...upcomingEvents, ...upcomingEvents];

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
        <button className="text-sm text-[#007BFF] hover:text-blue-700 font-medium flex items-center">
          View All
          <CalendarIcon size={18} className="ml-2" />
        </button>
      </div>

      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <div 
          ref={containerRef}
          className="absolute inset-0 overflow-y-hidden"
        >
          <div className="space-y-2 p-4">
            {displayEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="group p-4 rounded-lg transition-all duration-300 flex items-start space-x-4 hover:bg-blue-50"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex flex-col items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white transition-colors duration-300">
                    <span className="text-lg font-bold text-gray-900">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#007BFF] transition-colors duration-300 line-clamp-1">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1.5" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center px-4 py-2 border border-[#007BFF] text-[#007BFF] rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm">
          <CalendarIcon size={16} className="mr-2" />
          <span className="font-medium">Add to Calendar</span>
        </button>
      </div>
    </div>
  );
};

export default CalendarWidget; 