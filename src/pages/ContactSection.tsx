import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      {/* Contact Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="flex items-center space-x-4 bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <MapPin className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">
                  Administrative Building, Osmania University Campus
                  Hyderabad-500007, Telangana State, India.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <Phone className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+916304203886</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <Mail className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">blitzkriegdbm@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
