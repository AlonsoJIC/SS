import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-card/80 border-t border-primary/20 py-6 mt-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} SecureSight. All rights reserved.</span>
        <div className="flex gap-6 text-primary text-xl">
          <a href="https://www.instagram.com/alonsojic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://github.com/AlonsoJIC" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alonsojic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://dev-alonso.vercel.app/portfolio" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="hover:text-amber-500 transition-colors">
            <FaBriefcase />
          </a>
        </div>
      </div>
    </footer>
  );
}
