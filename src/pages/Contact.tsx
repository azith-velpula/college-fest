import { MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B3B] via-[#1A1A4D] to-[#2D2D6D] pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Event Query"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-300">
                        Administrative Building, Osmania University Campus
                        Hyderabad-500007, Telangana State, India.
                      </p>
                      <p className="text-gray-300">City, State - 123456</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-300">+916304203886</p>
                      <p className="text-gray-300">+919052473587</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-300">blitzkriegdbm@gmail.com</p>
                      <p className="text-gray-300">blitzkrieg.2k25_ou</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                <h2 className="text-2xl font-semibold mb-6">Event Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="text-purple-400" size={24} />
                    <div>
                      <p className="font-semibold">10:00 AM - 9:00 PM</p>
                      <p className="text-gray-300">All two days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-purple-400" size={24} />
                    <div>
                      <p className="font-semibold">Registration Desk</p>
                      <p className="text-gray-300">Opens at 8:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
