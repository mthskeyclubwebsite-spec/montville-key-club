import Image from "next/image";

const announcements = [
  { title: "End of year hours deadline — June 30", date: "May 18, 2026", category: "Deadline", body: "All service hours must be submitted by June 30 to count toward this year's totals. Log in to your dashboard to check your current hours and submit any pending forms before the cutoff." },
  { title: "Officer applications now open", date: "May 12, 2026", category: "Leadership", body: "Applications for 2026–27 officer positions are now open through June 15. Positions available include President, Vice President, Secretary, Treasurer, and Webmaster. Apply today and take on a leadership role in the chapter." },
  { title: "Summer volunteer schedule released", date: "May 5, 2026", category: "Events", body: "Our summer volunteer calendar is live. Expect weekly opportunities at the food pantry, senior center, and local parks. Sign up early since spots fill up fast." },
  { title: "New member orientation recap", date: "April 28, 2026", category: "Announcement", body: "Thank you to everyone who attended our new member orientation. We covered chapter expectations, how to log hours, and upcoming events. Slides are available on request." },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-source-sans), sans-serif' }}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <a href="/" className="flex items-center gap-2 md:gap-3">
          <Image src="/images/KC-logo-with-seal.png" alt="Key Club" width={120} height={30} className="object-contain w-24 md:w-40" />
          <div className="border-l border-gray-200 pl-2 md:pl-3 hidden sm:block">
            <div className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">Montville</div>
            <div className="text-xs text-gray-400 leading-tight">New Jersey</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Home</a>
          <a href="/events" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Events</a>
          <a href="/announcements" className="text-sm text-[#003366] font-semibold">Announcements</a>
          <a href="/follow_us" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Follow Us</a>
        </div>
        <a href="/login" className="bg-[#003366] hover:bg-blue-900 text-white text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg font-medium transition-colors">Member Login</a>
      </nav>

      {/* Header */}
      <div className="bg-[#003366] px-6 md:px-8 py-14 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3">Stay informed</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Announcements
        </h1>
        <p className="text-blue-100 mt-4 max-w-md mx-auto">
          Everything happening in the chapter, all in one place.
        </p>
      </div>

      {/* Announcements list */}
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {announcements.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-50 text-[#003366] text-xs px-3 py-1 rounded-full font-semibold">{item.category}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{item.date}</span>
              </div>
              <h2 className="font-bold text-xl text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#001a33] text-blue-300 px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div>
            <Image src="/images/KC-logo-with-seal.png" alt="Key Club" width={120} height={30} className="object-contain brightness-0 invert mb-3" />
            <div className="text-sm font-semibold text-white mb-1">Montville Key Club</div>
            <div className="text-sm">Montville Township High School</div>
            <div className="text-sm mt-1">© 2026 Kiwanis International</div>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Navigate</div>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-sm hover:text-white transition-colors">Home</a>
                <a href="/events" className="text-sm hover:text-white transition-colors">Events</a>
                <a href="/announcements" className="text-sm hover:text-white transition-colors">Announcements</a>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Members</div>
              <div className="flex flex-col gap-2">
                <a href="/login" className="text-sm hover:text-white transition-colors">Login</a>
                <a href="/join" className="text-sm hover:text-white transition-colors">Join Key Club</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}