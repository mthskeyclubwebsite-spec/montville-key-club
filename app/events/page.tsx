import Image from "next/image";

const events = [
  { day: "7", month: "Jun", title: "Food Pantry Volunteer Shift", location: "Montville Community Center", address: "195 Changebridge Rd", time: "9:00 AM – 12:00 PM", hours: "2 hrs", description: "Help sort and package food donations for local families in need. No experience necessary — just bring your energy and a good attitude." },
  { day: "14", month: "Jun", title: "Park Cleanup Day", location: "Horseneck Road Park", address: "Horseneck Rd, Montville", time: "8:00 AM – 11:00 AM", hours: "3 hrs", description: "Join us for a morning of trail cleanup, litter collection, and light landscaping to keep our community parks beautiful." },
  { day: "21", month: "Jun", title: "Senior Center Visit", location: "Montville Senior Center", address: "356 Rt 202, Montville", time: "1:00 PM – 3:00 PM", hours: "2 hrs", description: "Spend an afternoon with local seniors playing games, chatting, and brightening their day. A chapter favorite." },
  { day: "28", month: "Jun", title: "Blood Drive Support", location: "MTHS Gymnasium", address: "245 Horseneck Rd", time: "9:00 AM – 2:00 PM", hours: "4 hrs", description: "Assist with check-in, refreshments, and logistics for the Red Cross blood drive hosted at our school." },
];

export default function EventsPage() {
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
          <a href="/events" className="text-sm text-[#003366] font-semibold">Events</a>
          <a href="/announcements" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Announcements</a>
          <a href="/join" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Join</a>
        </div>
        <a href="/login" className="bg-[#003366] hover:bg-blue-900 text-white text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg font-medium transition-colors">Member Login</a>
      </nav>

      {/* Header */}
      <div className="bg-[#003366] px-6 md:px-8 py-14 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3">Get involved</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Upcoming Events
        </h1>
        <p className="text-blue-100 mt-4 max-w-md mx-auto">
          Sign up, show up, and earn service hours while making a real difference in Montville.
        </p>
      </div>

      {/* Events list */}
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-5 bg-white border border-gray-100 rounded-2xl p-6 md:p-7 hover:shadow-md transition-all">
              <div className="bg-[#003366] text-white rounded-xl px-5 py-4 text-center flex md:flex-col items-center justify-center gap-2 md:gap-0 md:min-w-24">
                <div className="text-3xl font-bold leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>{event.day}</div>
                <div className="text-xs uppercase tracking-widest text-blue-300 md:mt-1">{event.month}</div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h2 className="font-bold text-lg text-gray-900">{event.title}</h2>
                  <span className="bg-blue-50 text-[#003366] text-xs px-3 py-1 rounded-full font-semibold w-fit">{event.hours}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{event.location} · {event.address}</p>
                <p className="text-sm text-gray-500 mb-3">{event.time}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
              </div>
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