import { Handshake } from "lucide-react";

export default function Sponsorship() {
  const mainEvents = [
    {
      title: "Title Sponsor",
      description:
        "Prime branding, exclusive mentions, logo on merchandise, major media coverage, event-stage branding, and access to participant data.",
      amount: "₹4 Lakhs+",
    },
    {
      title: "Platinum Sponsor",
      description:
        "Featured branding on banners, digital promotions, exclusive shout-outs, and priority stall placement on campus.",
      amount: "₹3 Lakhs",
    },
    {
      title: "Gold Sponsor",
      description:
        "Visibility on event posters, certificates, social media, website, and prime advertising at the fest.",
      amount: "₹2 Lakhs",
    },
  ];

  const partnershipOptions = [
    "Gift Partner",
    "Travel Partner",
    "Hospitality Partner",
    "Food & Beverage Partner",
    "Print Media Partner",
    "Radio Partner",
    "Beauty Partner",
    "Fashion Partner",
  ];

  return (
    <section className=" bg-[#0B0B3B]/30 backdrop-blur-sm">
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B3B] via-[#1A1A4D] to-[#2D2D6D] pt-20 text-white font-sans">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
              Be Our Sponsor
            </h1>
            <p className="text-center mb-12 text-xl leading-relaxed text-gray-300">
              Advertise your organization to thousands of vibrant, energetic
              youth and watch your brand appeal soar! Join us to connect with a
              dynamic audience, build lasting relationships, and gain loyal
              customers.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {mainEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-800 to-indigo-900 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 border border-purple-500/40 hover:border-purple-500/60"
                >
                  <h3 className="text-2xl font-bold mb-3 text-purple-200">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="text-purple-300 font-semibold">
                    {event.amount}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
              If Not a Sponsor, Be Our Partner!
            </h2>
            <p className="text-center mb-8 text-lg text-gray-300 leading-relaxed">
              Can't sponsor us? No worries! Partner with us and gain exclusive
              brand visibility through various collaboration opportunities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-purple-800/50 backdrop-blur-md p-6 rounded-2xl text-center border border-purple-500/40 shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  <Handshake
                    className="mx-auto mb-4 text-purple-400"
                    size={40}
                  />
                  <p className="text-2xl font-bold text-purple-200">{option}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
