"use client"
import { useState } from "react"
import { X, Menu } from "lucide-react"
import Image from "next/image"

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
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Candidates
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Results
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Search
              </button>
            </div>

            <button
              className="md:hidden text-white hover:text-white/80 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/10">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium">
                  Candidates
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium">
                  Results
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors py-2 px-4 text-sm font-medium">
                  About
                </a>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mx-4 mt-2 w-fit">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
}