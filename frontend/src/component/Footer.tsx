import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-border/10 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 mandala-pattern opacity-30"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <Image
                                src="/images/chunab-sym-light.png"
                                alt="Chunab Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Your trusted source for transparent and accessible election information in Nepal. 
                            Discover candidates, agendas, and live vote counts.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Home</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Candidates</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Results</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>About</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Search</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Election Guide</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Voting Process</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Constituency Map</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>FAQ</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                                    <span>Help Center</span>
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Email</p>
                                    <a href="mailto:info@chunab.com" className="text-foreground hover:text-primary transition-colors text-sm">
                                        info@chunab.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Phone</p>
                                    <a href="tel:+977-1-1234567" className="text-foreground hover:text-primary transition-colors text-sm">
                                        +977-1-1234567
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Address</p>
                                    <p className="text-foreground text-sm">
                                        Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-muted-foreground text-sm">
                                © 2025 <a href="https://www.neutrotex.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Neutrotex IT Solutions</a>. All rights reserved. | 
                                <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
                                <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-muted-foreground text-sm">
                                Made with <span className="text-primary">♥</span> for Nepal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
