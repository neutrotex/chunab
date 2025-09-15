import { Search } from "lucide-react";

export default function HomeSearch() {
    return (
        <div>
            {/* Constituency Search Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                    Find Your <span className="text-primary">Constituency</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 text-pretty">
                    Search for candidates and information specific to your area
                </p>

                <div className="relative max-w-2xl mx-auto">
                    <input
                    type="text"
                    placeholder="Enter your constituency name..."
                    className="w-full px-6 py-4 pl-14 bg-input text-secondary-foreground rounded-xl border border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 text-lg"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors">
                    Search
                    </button>
                </div>
                </div>
            </section>
        </div>
    )
}