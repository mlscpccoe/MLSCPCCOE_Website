import React, { useRef, useEffect } from "react";
import "./Events.css";

const Events = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (e) => {
        e.preventDefault();
        const cardWidth = scrollContainer.firstChild.getBoundingClientRect().width;
        if (e.deltaY > 0) {
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const events = [
    {
      id: 1,
      title: "Event 1",
      date: "October 1, 2024",
      description: "This is the description of Event 1.",
    },
    {
      id: 2,
      title: "Event 2",
      date: "October 10, 2024",
      description: "This is the description of Event 2.",
    },
    {
      id: 3,
      title: "Event 3",
      date: "October 15, 2024",
      description: "This is the description of Event 3.",
    },
    {
      id: 4,
      title: "Event 4",
      date: "October 20, 2024",
      description: "This is the description of Event 4.",
    },
    {
      id: 5,
      title: "Event 5",
      date: "October 25, 2024",
      description: "This is the description of Event 5.",
    },
  ];

  return (
    <div className="events-section w-full bg-gray-100 py-8 absolute w-full h-full bg-white">
      <h2 className="text-4xl text-center font-bold mb-6">Upcoming Events</h2>
      <div
        className="events-container flex space-x-4 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card bg-white rounded-lg shadow-lg p-4 min-w-[70vw] max-w-[70vw] flex-shrink-0 snap-center"
          >
            {/* Image Section */}
            <div className="event-image bg-blue-200 h-[400px] mb-4 rounded-lg"></div>

            {/* Event Details */}
            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-800 mt-4">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
