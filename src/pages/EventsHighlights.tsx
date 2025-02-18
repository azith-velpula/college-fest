import { Calendar, Music, Trophy, Users, School } from "lucide-react";

export default function EventHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Days of Entertainment */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <Calendar className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">2 Days</h3>
            <p className="text-gray-300">Of Entertainment</p>
          </div>

          {/* Number of Events */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <Music className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">20+ Events</h3>
            <p className="text-gray-300">To Participate</p>
          </div>

          {/* Years of Excellence */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <Trophy className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">63+ Years of Excellence</h3>
            <p className="text-gray-300">Journey</p>
          </div>

          {/* Alumni Network */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <Users className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">1000+</h3>
            <p className="text-gray-300">Alumni Network</p>
          </div>

          {/* Participants */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <Users className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">5000+</h3>
            <p className="text-gray-300">Participants</p>
          </div>

          {/* Affiliated Institutions */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20">
            <School className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">1300+</h3>
            <p className="text-gray-300">Affiliated Every Year</p>
          </div>
        </div>
      </div>
    </section>
  );
}
