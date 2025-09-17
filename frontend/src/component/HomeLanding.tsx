"use client"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function HomeLanding() {
    const [currentSlogan, setCurrentSlogan] = useState(0);
    const slogans = [
        "Your Vote. Your Voice. Your Info Hub.",
        "तपाईँको मत । तपाईँको आवाज । तपाईँको जानकारी केन्द्र ।"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        }, 3000); // Switch every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0">
            <Image
                src="/images/nepal-landscape.jpg"
                alt="Nepal landscape with mountains"
                fill
                className="object-cover opacity-40"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="">
                <h1 className="text-7xl md:text-9xl font-bold mb-4 text-balance">
                <span className="text-primary" style={{ textShadow: '.5px .5px 0px gray, -.5px -.5px 0px gray, .5px -.5px 0px gray, -.5px .5px 0px gray' }}>Chunab.</span>
                </h1>
            </div>

            <div className="h-16 flex items-center justify-center mb-2 py-4">
                <p 
                    key={currentSlogan}
                    className="text-xl md:text-2xl text-foreground font-medium text-center animate-fade-in"
                >
                    {slogans[currentSlogan]}
                </p>
            </div>

            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover candidates, agendas, and live vote counts in Nepal&apos;s elections.
            </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-14 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-10 h-10 text-primary" />
            </div>
        </section>

        </div>
    )
}