"use client"
import { useState } from "react"
import { X, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-black border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/images/chunab-sym-light.png"
                alt="Chunab Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/home" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Home
              </Link>
              
              <Link 
                href="/election-guide" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Election Guide
              </Link>
              
              <Link 
                href="/voting-process" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Voting Process
              </Link>
              
              <a 
                href="#faq" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQs
              </a>
              
              <button 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => {
                  document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Search Now
              </button>
            </div>

            <button
              className="md:hidden text-white hover:text-white/80 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <X className={`w-5 h-5 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`} />
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`} />
              </div>
            </button>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-border/10">
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/home" 
                  className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium transform hover:translate-x-2 transition-transform duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  href="/election-guide" 
                  className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium transform hover:translate-x-2 transition-transform duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Election Guide
                </Link>
                
                <Link 
                  href="/voting-process" 
                  className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium transform hover:translate-x-2 transition-transform duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Voting Process
                </Link>
                
                <a 
                  href="#faq" 
                  className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium transform hover:translate-x-2 transition-transform duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  FAQs
                </a>
                
                <button 
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 mx-4 mt-2 w-fit transform hover:scale-105"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}