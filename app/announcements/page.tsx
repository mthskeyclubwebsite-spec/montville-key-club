import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const announcements = [
  { title: "End of year hours deadline — June 30", date: "May 18, 2026", category: "Deadline", body: "All service hours must be submitted by June 30 to count toward this year's totals. Log in to your dashboard to check your current hours and submit any pending forms before the cutoff." },
  { title: "Officer applications now open", date: "May 12, 2026", category: "Leadership", body: "Applications for 2026–27 officer positions are now open through June 15. Positions available include President, Vice President, Secretary, Treasurer, and Webmaster. Apply today and take on a leadership role in the chapter." },
  { title: "Summer volunteer schedule released", date: "May 5, 2026", category: "Events", body: "Our summer volunteer calendar is live. Expect weekly opportunities at the food pantry, senior center, and local parks. Sign up early since spots fill up fast." },
  { title: "New member orientation recap", date: "April 28, 2026", category: "Announcement", body: "Thank you to everyone who attended our new member orientation. We covered chapter expectations, how to log hours, and upcoming events. Slides are available on request." },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-source-sans), sans-serif' }}>

      <Header />

      {/* Header */}
      <div className="bg-[#003366] px-6 md:px-8 py-14 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3 animate-fade-in-up">Stay informed</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up" style={{ fontFamily: 'var(--font-playfair), serif', animationDelay: "0.1s" }}>
          Announcements
        </h1>
        <p className="text-blue-100 mt-4 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Everything happening in the chapter, all in one place.
        </p>
      </div>

      {/* Announcements list */}
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {announcements.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-50 text-[#003366] text-xs px-3 py-1 rounded-full font-semibold">{item.category}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{item.date}</span>
              </div>
              <h2 className="font-bold text-xl text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />

    </main>
  );
}
