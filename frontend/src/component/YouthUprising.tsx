import Image from "next/image";

export default function YouthUprising() {
    return (
      <section id="youth-uprising" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/youth-protest.jpg"
            alt="Youth protest against corruption in Nepal"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="text-primary">Youth</span> Uprising
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-red-300 font-light italic">
              September 8–9, 2025: A Turning Point in Nepal
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-white leading-relaxed text-xl md:text-2xl font-light text-center">
              On September 8–9, 2025, Nepal witnessed a powerful youth-led protest that shook the foundations of the
              nation's politics. Sparked by the government's controversial ban on major social media platforms, thousands
              of young people took to the streets demanding an end to corruption, censorship, and systemic inequality.
            </p>
  
            <p className="text-gray-200 leading-relaxed text-xl md:text-2xl text-center">
              What began as peaceful demonstrations quickly turned deadly as security forces responded with tear gas,
              rubber bullets, and live ammunition, leading to the tragic deaths of nearly twenty protesters and injuries
              to many more.
            </p>
  
            <p className="text-gray-200 leading-relaxed text-xl md:text-2xl text-center">
              The sacrifice of these youths, hailed as martyrs, ignited nationwide outrage and forced the resignation of
              senior officials, the lifting of the social media ban, and a political commitment to hold new elections.
            </p>
  
            <p className="text-red-300 leading-relaxed text-xl md:text-2xl font-medium text-center italic">
              More than just a protest, the movement has come to symbolize a generational demand for accountability,
              justice, and a new era of leadership in Nepal.
            </p>
          </div>
        </div>
      </section>
    )
  }
  