import { ChevronDown } from "lucide-react"
import Image from "next/image"


export default function HomeLanding() {
    return (
        <div>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
                <h1 className="text-7xl md:text-9xl font-bold mb-6 text-balance">
                <span className="text-primary">Chunab.</span>
                </h1>
            </div>

            <p className="text-xl md:text-2xl mb-4 text-foreground font-medium">Your Vote. Your Voice. Your Info Hub.</p>

            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover candidates, agendas, and live vote counts in Nepal&apos;s elections.
            </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
            </div>
        </section>

        </div>
    )
}