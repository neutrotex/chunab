import { Users , MapPin, BarChart3 } from "lucide-react"


export default function HomeWhy() {
    return (
        <div>         
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Why <span className="text-primary">Chunab</span>?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Unorthodox diagonal layout */}
            <div className="space-y-32">
                {/* First feature - diagonal left */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="border-l-4 border-primary p-12 rounded-r-3xl">
                    <Users className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Candidate Bios</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                        Deep dive into comprehensive profiles of all candidates with their backgrounds, qualifications, and
                        track records.
                    </p>
                    </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="text-8xl font-bold text-primary/10 mb-4">01</div>
                    <p className="text-xl text-muted-foreground">
                    Know who you&apos;re voting for with detailed candidate information
                    </p>
                </div>
                </div>

                {/* Second feature - diagonal right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="border-r-4 border-primary p-12 rounded-l-3xl">
                    <MapPin className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Policy Agendas</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                        Clear breakdown of each candidate&apos;s promises, policies, and vision for Nepal&apos;s future development.
                    </p>
                    </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-right">
                    <div className="text-8xl font-bold text-primary/10 mb-4">02</div>
                    <p className="text-xl text-muted-foreground">
                    Understand the policies that will shape Nepal&apos;s tomorrow
                    </p>
                </div>
                </div>

                {/* Third feature - diagonal left */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="border-l-4 border-primary p-12 rounded-r-3xl">
                    <BarChart3 className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Live Results</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                        Real-time election results and vote counting updates from across all constituencies in Nepal.
                    </p>
                    </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="text-8xl font-bold text-primary/10 mb-4">03</div>
                    <p className="text-xl text-muted-foreground">Stay updated with live election results as they happen</p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}