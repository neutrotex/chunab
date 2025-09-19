"use client"

import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import { CheckCircle, UserCheck, MapPin, Vote, Clock, FileText, Users, BarChart3, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function VotingProcess() {
    const steps = [
        {
          number: 1,
          title: "Voter Registration",
          icon: <UserCheck className="w-8 h-8" />,
          description:
            "Ensure your name is on the official electoral roll maintained by the Election Commission of Nepal (ECN).",
          details: [
            "Registration is open at district election offices and sometimes through mobile registration centers",
            "You must present a valid citizenship certificate to register",
          ],
        },
        {
          number: 2,
          title: "Get Your Voter ID",
          icon: <FileText className="w-8 h-8" />,
          description: "Once registered, you'll be issued a voter identity card.",
          details: ["This card is required on election day to cast your vote"],
        },
        {
          number: 3,
          title: "Know Your Polling Station",
          icon: <MapPin className="w-8 h-8" />,
          description:
            "Before election day, check your voter slip or the ECN website to confirm your designated polling location.",
          details: ["Each voter must cast their vote at their assigned station"],
        },
        {
          number: 4,
          title: "Polling Day – What to Bring",
          icon: <Clock className="w-8 h-8" />,
          description: "Carry your voter ID card (or approved identification).",
          details: ["Go to your polling booth during official polling hours (usually 7 AM – 5 PM)"],
        },
        {
          number: 5,
          title: "Inside the Polling Station",
          icon: <CheckCircle className="w-8 h-8" />,
          description: "Your identity will be verified against the voter list.",
          details: [
            "You'll receive two ballot papers:",
            "FPTP ballot → for choosing a candidate in your constituency",
            "PR ballot → for choosing a political party",
            "Go into the secret voting booth",
          ],
        },
        {
          number: 6,
          title: "Casting Your Vote",
          icon: <Vote className="w-8 h-8" />,
          description: "On the FPTP ballot, stamp/mark your chosen candidate's symbol.",
          details: [
            "On the PR ballot, stamp/mark the party you want to support",
            "Be careful not to make stray marks — unclear votes may be invalid",
          ],
        },
        {
          number: 7,
          title: "Submitting the Ballots",
          icon: <Users className="w-8 h-8" />,
          description: "Fold each ballot as instructed and drop it into the designated sealed ballot boxes.",
          details: ["Your finger may be inked to indicate that you've voted"],
        },
        {
          number: 8,
          title: "Vote Counting & Results",
          icon: <BarChart3 className="w-8 h-8" />,
          description: "After polling ends, ballots are transported to counting centers.",
          details: [
            "FPTP results: candidate with the most votes in each constituency wins",
            "PR results: seats are distributed to parties based on the percentage of votes they received nationwide",
          ],
        },
      ]
    
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
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
            </div>
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Voting <span className="text-primary">Process</span>
                </h2>
                <div className="w-38 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
            </div>
        </section>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Your complete step-by-step guide to participating in Nepal&apos;s democratic process
              </p>
            </div>
    
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-red-800/50 to-transparent hidden md:block"></div>
                  )}
    
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-10">
                        <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
                        <div className="w-16 h-16 bg-red-800/20 rounded-full flex items-center justify-center text-red-800">
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-lg md:text-xl text-foreground font-medium">{step.description}</p>
    
                      {step.details.length > 0 && (
                        <div className="space-y-3 mt-6">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
                              <p className="text-muted-foreground text-lg">{detail}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Call to action */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 bg-red-800/10 px-8 py-6 rounded-2xl">
                <Vote className="w-12 h-12 text-red-800" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to Vote?</h3>
                  <p className="text-muted-foreground">
                    Make sure you&apos;re registered and know your polling station location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
      )
}
