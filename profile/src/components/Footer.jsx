import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 overflow-hidden">

        {/* Social Links */}
        <div
          className="
            flex flex-col items-start gap-4 text-sm
            md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-10 md:text-base
          "
        >
          <span className="text-gray-500 font-medium md:mr-4">
            Socials
          </span>

          <a
            href="https://github.com/vishank020"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition whitespace-nowrap"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://leetcode.com/vishank98"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-yellow-500 transition whitespace-nowrap"
          >
            <SiLeetcode /> LeetCode
          </a>

          <a
            href="https://www.linkedin.com/in/vishank-singh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-500 transition whitespace-nowrap"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="mailto:singhvishank20@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-50 transition break-all md:break-normal"
          >
            <FaEnvelope /> singhvishank20@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center gap-2 text-sm md:justify-center md:text-base">
          <FaLocationDot />
          <span>Mumbai, India</span>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs md:text-sm text-center hover:text-white transition">
          Designed & Built by Vishank Singh © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
