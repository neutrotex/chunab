import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import { ChevronDown, Users, BarChart3, AlertCircle, FileText, Calendar, Vote } from "lucide-react"
import Image from "next/image"

// Timeline data for House of Representatives election process
const electionTimeline = [
    {
        id: 1,
        nepali: "उम्मेदवारको मनोनयन पत्र दर्ता",
        english: "Registration of Candidates' Nomination Papers"
    },
    {
        id: 2,
        nepali: "निर्वाचन आयोगद्वारा मनोनित उम्मेदवारको नामावली प्रकाशन",
        english: "Publication of Nominated Candidates List by the Election Commission"
    },
    {
        id: 3,
        nepali: "उम्मेदवारविरुद्ध उजुरी दर्ता",
        english: "Submission of Complaints Against Candidates"
    },
    {
        id: 4,
        nepali: "मनोनयन पत्र र उजुरीको सत्यापन तथा छानबिन",
        english: "Verification and Investigation of Nomination Papers and Complaints"
    },
    {
        id: 5,
        nepali: "सत्यापित उम्मेदवारको नामावली प्रकाशन",
        english: "Publication of Verified Candidates List"
    },
    {
        id: 6,
        nepali: "उम्मेदवारले मनोनयन फिर्ता लिन पाउने अन्तिम मिति (यदि लागू भएमा)",
        english: "Withdrawal of Nominations by Candidates (if applicable)"
    },
    {
        id: 7,
        nepali: "अन्तिम उम्मेदवार नामावली प्रकाशन",
        english: "Publication of Final Candidates List"
    },
    {
        id: 8,
        nepali: "उम्मेदवारलाई निर्वाचन चिन्ह तोक्नु",
        english: "Allocation of Election Symbols to Candidates"
    },
    {
        id: 9,
        nepali: "मतदान गर्ने दिन",
        english: "Voting Day",
        isHighlighted: true
    }
]

export default function ElectionGuide() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0">
                <Image
                    src="/images/nepal-landscape.jpg"
                    alt="Nepal landscape with mountains"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                        Parliamentalry <span className="text-primary">Election Guide</span>
                    </h2>
                    <div className="w-38 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-primary" />
                </div>
            </section>

            {/* Federal Parliament */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-primary">Federal</span> Parliament
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Nepal has a bicameral legislature with two houses working together to govern the nation
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* House of Representatives */}
                    <div className="space-y-6">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6">
                        <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                        <h3 className="text-3xl font-bold">House of Representatives</h3>
                        <p className="text-primary text-lg">Pratinidhi Sabha — the lower house</p>
                        </div>
                    </div>
                    <div className="space-y-4 pl-4">
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Total Seats:</span>
                        <span className="text-primary font-bold text-xl">275 members</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">FPTP Seats:</span>
                        <span className="text-lg">165 seats</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">PR Seats:</span>
                        <span className="text-lg">110 seats</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Term:</span>
                        <span className="text-lg">5 years</span>
                        </div>
                    </div>
                    </div>

                    {/* National Assembly */}
                    <div className="space-y-6">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6">
                        <BarChart3 className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                        <h3 className="text-3xl font-bold">National Assembly</h3>
                        <p className="text-primary text-lg">Rastriya Sabha — the upper house</p>
                        </div>
                    </div>
                    <div className="space-y-4 pl-4">
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Total Seats:</span>
                        <span className="text-primary font-bold text-xl">59 members</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Elected:</span>
                        <span className="text-lg">56 members</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Appointed:</span>
                        <span className="text-lg">3 members</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium">Term:</span>
                        <span className="text-lg">6 years</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Upcoming Elections */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <AlertCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Upcoming Elections</h3>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    The current House of Representatives was dissolved on September 12, 2025 due to protests.
                </p>
                <div className="mb-12">
                    <p className="text-5xl font-bold text-primary mb-4">March 5, 2026</p>
                    <p className="text-2xl">Next General Election for House of Representatives</p>
                </div>
                </div>
            </section>

            {/* How to Vote */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    How to <span className="text-primary">Vote</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                    Step-by-step guide to participating in Nepal&apos;s democratic process
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold">Check Your ID</h3>
                    <p className="text-muted-foreground text-lg">
                        Verify your voter ID card and find your designated polling station location.
                    </p>
                    </div>

                    <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold">Go to Polling Station</h3>
                    <p className="text-muted-foreground text-lg">
                        Visit your designated polling station on election day with valid identification.
                    </p>
                    </div>

                    <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold">Cast Your Vote</h3>
                    <p className="text-muted-foreground text-lg">
                        Mark your preferred candidate (FPTP) and party (PR) on separate ballots.
                    </p>
                    </div>

                    <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-bold">Results</h3>
                    <p className="text-muted-foreground text-lg">Follow live vote counting and results after polls close.</p>
                    </div>
                </div>
                </div>
            </section>

            {/* Election Video Guide */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-primary">Election</span> Video Guide
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Watch this comprehensive guide to understand Nepal&apos;s electoral process
                    </p>
                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                                src="https://www.youtube.com/embed/IE53LCoIah0?si=qf6qkqfQtug8wZ1H" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Voting Eligibility */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Voting <span className="text-primary">Eligibility</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Requirements to participate in Nepal&apos;s elections</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Citizenship</h3>
                    <p className="text-muted-foreground text-lg">Must be a Nepali citizen with valid documentation</p>
                    </div>

                    <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Age Requirement</h3>
                    <p className="text-muted-foreground text-lg">Must be at least 18 years old on election date</p>
                    </div>

                    <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Vote className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Voter Registration</h3>
                    <p className="text-muted-foreground text-lg">Name must be on electoral roll with valid voter ID</p>
                    </div>
                </div>

                <div className="mt-16 text-center space-y-6">
                    <h3 className="text-3xl font-bold">For Nepalis Abroad</h3>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Supreme Court ruling allows Nepali citizens abroad who haven&apos;t renounced citizenship and have voter ID to
                    vote via diplomatic missions. Implementation details are still under discussion.
                    </p>
                </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-primary">Why </span>It Matters
                    </h2>
                    <p className="text-xl text-muted-foreground">Your vote shapes Nepal&apos;s future</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                        <h3 className="text-xl font-bold mb-2">Government Formation</h3>
                        <p className="text-muted-foreground">
                            The elected House of Representatives forms the government, choosing the Prime Minister and Council
                            of Ministers.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                        <h3 className="text-xl font-bold mb-2">Policy Making</h3>
                        <p className="text-muted-foreground">
                            Laws, policies, and budget decisions that affect your daily life are made by elected
                            representatives.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                        <h3 className="text-xl font-bold mb-2">Proportional Representation</h3>
                        <p className="text-muted-foreground">
                            The PR system ensures smaller parties and minorities have a voice in parliament.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                        <h3 className="text-xl font-bold mb-2">Democratic Oversight</h3>
                        <p className="text-muted-foreground">
                            The National Assembly provides continuity and oversight to ensure balanced governance.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Election Timeline Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">प्रतिनिधिसभा <span className="text-white">निर्वाचनको </span> समयरेखा</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-4">Timeline of House of Representatives Elections</p>
                    </div>

                    <div className="space-y-8">
                        {electionTimeline.map((step) => (
                            <div 
                                key={step.id}
                                className={`flex items-start space-x-6 p-6 rounded-lg border ${
                                    step.isHighlighted 
                                        ? 'bg-primary/10 border-2 border-primary' 
                                        : 'bg-card'
                                }`}
                            >
                                {/* Step number indicator */}
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">{step.id}</span>
                                </div>
                                
                                {/* Step content */}
                                <div className="flex-1">
                                    {/* Nepali title */}
                                    <h3 className="text-xl font-bold mb-2 text-foreground">
                                        {step.nepali}
                                    </h3>
                                    
                                    {/* English translation */}
                                    <p className="text-muted-foreground text-lg">
                                        {step.english}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}
