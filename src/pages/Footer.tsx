import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-8 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Join the Osmania Family</h3>
        <p className="text-lg mb-8">
          Stay connected and updated with the latest news about our events and
          activities!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com/OsmaniaUniversityhyderabad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 transition"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/osmania.university?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-600 transition"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 Blitzkrieg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
