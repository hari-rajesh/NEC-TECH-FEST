import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-16 mt-20 bg-transparent
                     md:border-none
                     border-t-[3px] border-b-[3px]
                     border-t-transparent border-b-transparent
                     bg-gradient-to-r from-[#7928CA] via-[#FF0080] to-[#7928CA]
                     bg-[length:200%_3px]
                     bg-no-repeat
                     bg-[0_0,0_100%]
                     animate-borderFlow">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#7700ff_0%,transparent_70%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#ff00ea_0%,transparent_70%)] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              {/* <img src="/logos/NEC-LOGO.png" alt="NEC Tech Fest" className="h-12 w-12 group-hover:animate-pulse" /> */}
              <h3 className="font-orbitron text-2xl text-white group-hover:[text-shadow:_0_0_10px_#8000ff]">NEC TECH FEST</h3>
            </div>
            <p className="text-purple-200/90 mb-6 font-space-grotesk">
              Join us for an incredible journey into technology and innovation at NEC Tech Fest 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-orbitron text-white text-lg mb-6 [text-shadow:_0_0_10px_#8000ff]">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {['About Us', 'Events', 'Schedule', 'Speakers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-purple-200/90 hover:text-white transition-all duration-300 w-fit relative group font-space-grotesk
                           hover:[text-shadow:_0_0_10px_#8000ff] before:content-[''] before:absolute before:-bottom-1 
                           before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-500 
                           before:to-pink-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-orbitron text-white text-lg mb-6 [text-shadow:_0_0_10px_#8000ff]">Contact Us</h4>
            <div className="space-y-4 text-purple-200/90 font-space-grotesk">
              <p className="hover:[text-shadow:_0_0_10px_#8000ff] transition-all duration-300">National Engineering College</p>
              <p className="hover:[text-shadow:_0_0_10px_#8000ff] transition-all duration-300">K.R.Nagar, Kovilpatti</p>
              <p className="hover:[text-shadow:_0_0_10px_#8000ff] transition-all duration-300">support@nectechfest.com</p>
              <p className="hover:[text-shadow:_0_0_10px_#8000ff] transition-all duration-300">+91 1234567890</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-orbitron text-white text-lg mb-6 [text-shadow:_0_0_10px_#8000ff]">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-purple-200/90 font-space-grotesk">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-purple-900/20 border-purple-500/30 text-white placeholder:text-purple-300/50 focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-space-grotesk text-purple-200/90 text-sm">
              &copy; 2024 NEC TECH FEST. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[FaGithub, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-purple-200/90 hover:text-white transition-all duration-300 hover:scale-110 hover:[text-shadow:_0_0_10px_#8000ff]"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<style jsx>{`
  @keyframes borderFlow {
    0% {
      background-position: 0 0, 200% 100%;
    }
    50% {
      background-position: 200% 0, 0 100%;
    }
    100% {
      background-position: 0 0, 200% 100%;
    }
  }

  .animate-borderFlow {
    animation: borderFlow 3s linear infinite;
  }
`}</style>

export default Footer;