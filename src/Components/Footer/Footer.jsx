import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-black mb-3">FetchApps</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover, download and manage your favorite apps securely from one trusted platform.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-black mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/about" className="hover:text-[#632EE3] transition">About Us</a></li>
            <li><a href="/apps" className="hover:text-[#632EE3] transition">All Apps</a></li>
            <li><a href="/privacy" className="hover:text-[#632EE3] transition">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-[#632EE3] transition">Contact</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-black mb-3">Support</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/faq" className="hover:text-[#632EE3] transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-[#632EE3] transition">Terms of Service</a></li>
            <li><a href="/help" className="hover:text-[#632EE3] transition">Help Center</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-black mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" className="hover:text-[#632EE3] transition"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-[#632EE3] transition"><FaTwitter size={22} /></a>
            <a href="#" className="hover:text-[#632EE3] transition"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-[#632EE3] transition"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-[#632EE3] transition"><FaGithub size={22} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-5 text-center text-gray-500 text-sm max-w-[1300px] mx-auto">
        © {new Date().getFullYear()} <span className="font-semibold text-black">FetchApps</span>. All rights reserved.
      </div>
    </footer>
  );
}
