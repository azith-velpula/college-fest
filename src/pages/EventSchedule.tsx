import { useState } from "react";
import { Clock, MapPin, Users } from "lucide-react";

const eventsByDay = {
  1: [
    {
      time: "10:00 AM",
      title: "Talentrix",
      venue: "Main Auditorium",
      capacity: 1000,
    },
    {
      time: "2:00 PM",
      title: "Finquest",
      venue: "Open Air Theater",
      capacity: 500,
    },
    {
      time: "4:00 PM",
      title: "Market Arena",
      venue: "Gallery Hall",
      capacity: 200,
    },
    {
      time: "6:00 PM",
      title: "Start-O-Sphere",
      venue: "Mini Auditorium",
      capacity: 300,
    },
    {
      time: "8:00 PM",
      title: "Grand Strategist",
      venue: "Main Stage",
      capacity: 800,
    },
    {
      time: "11:00 AM",
      title: "Human Knot",
      venue: "Open Ground",
      capacity: 200,
    },
    {
      time: "3:00 PM",
      title: "Wanderer",
      venue: "College Streets",
      capacity: 500,
    },
    {
      time: "5:00 PM",
      title: "Brand Pictionary",
      venue: "Dance Studio",
      capacity: 100,
    },
    {
      time: "7:00 PM",
      title: "Blind Fold Trust",
      venue: "Main Ground",
      capacity: 300,
    },
  ],
  2: [
    {
      time: "10:00 AM",
      title: "Blitzkrieg Talks",
      venue: "Main Auditorium",
      capacity: 1000,
    },
    {
      time: "12:00 PM",
      title: "Corporate Skit",
      venue: "Open Air Theater",
      capacity: 500,
    },
    { time: "2:00 PM", title: "Ramp Walk", venue: "Main Stage", capacity: 800 },
    {
      time: "4:00 PM",
      title: "Dance Competitions",
      venue: "College Grounds",
      capacity: 1500,
    },
    {
      time: "6:00 PM",
      title: "Mic Drop",
      venue: "Mini Auditorium",
      capacity: 300,
    },
  ],
};

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);

  const events = eventsByDay[activeDay] || [];
  const displayedEvents = showAll ? events : events.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-[#0B0B3B]/30 backdrop-blur-sm">
      <section className="py-20 px-4 bg-transparent ">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event Schedule
          </h2>

          <div className="flex justify-center mb-12 space-x-4">
            {[1, 2].map((day) => (
              <button
                key={day}
                onClick={() => {
                  setActiveDay(day);
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDay === day
                    ? "bg-white text-black shadow-lg shadow-white/20"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {displayedEvents.map((event, index) => (
              <div
                key={index}
                className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <Clock className="text-purple-400" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-purple-300 transition">
                        {event.title}
                      </h3>
                      <p className="text-purple-300">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-purple-400" size={20} />
                      <span className="text-gray-300">{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="text-purple-400" size={20} />
                      <span className="text-gray-300">
                        Capacity: {event.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {events.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white text-black hover:bg-white/80 shadow-md"
              >
                {showAll ? "View Less" : "View All Events"}
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
