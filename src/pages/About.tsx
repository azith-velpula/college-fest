import { PartyPopper, Camera, Music, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B3B] via-[#1A1A4D] to-[#2D2D6D] pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold text-center mb-12">
            About Blitzkrieg
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Blitzkrieg is an immersive management fest designed to challenge
                participants, test their courage, and transform them into future
                leaders.
              </p>
              <p className="text-lg leading-relaxed">
                It brings together visionaries and innovators to showcase
                strategic thinking and ignite creativity. The event mirrors the
                fast-paced dynamics of the business world, pushing attendees to
                adapt, evolve, and excel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20 hover:border-purple-500/40 transition">
                <PartyPopper
                  className="mx-auto mb-4 text-purple-400"
                  size={32}
                />
                <h3 className="font-semibold">20+ Events</h3>
              </div>
              <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20 hover:border-purple-500/40 transition">
                <Camera className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold">Branding</h3>
              </div>
              <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20 hover:border-purple-500/40 transition">
                <Music className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold">Live Concerts</h3>
              </div>
              <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg text-center border border-purple-500/20 hover:border-purple-500/40 transition">
                <Trophy className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold">Competitions</h3>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To establish Blitzkrieg as a premier management fest that
                inspires future leaders, fosters innovation, and creates a
                dynamic platform for strategic thinking, collaboration, and
                entrepreneurial excellence.
              </p>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide an engaging and competitive environment where
                students develop leadership, creativity, and problem-solving
                skills through immersive challenges, networking opportunities,
                and real-world business simulations.
              </p>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-300">
                We uphold excellence, innovation, collaboration, and growth by
                encouraging strategic thinking, fostering creativity, building
                networks, and creating opportunities for continuous personal and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
