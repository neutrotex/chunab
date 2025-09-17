import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import { ChevronDown, Users, BarChart3, AlertCircle, FileText, Calendar, Vote } from "lucide-react"
import Image from "next/image"

export default function ElectionGuide() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0">
                <Image
                    src="/images/nepal-landscape.jpg"
                    alt="Nepal landscape with mountains"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90"></div>
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

            <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Federal <span className="text-primary">Parliament</span>
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

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Why It <span className="text-primary">Matters</span>
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
            
            <Footer />
        </div>
    )
}
