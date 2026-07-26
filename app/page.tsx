import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-source-sans), sans-serif' }}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <Image src="/images/KC-logo-with-seal.png" alt="Key Club" width={120} height={30} className="object-contain w-24 md:w-40" />
          <div className="border-l border-gray-200 pl-2 md:pl-3 hidden sm:block">
            <div className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">Montville</div>
            <div className="text-xs text-gray-400 leading-tight">New Jersey</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Home</a>
          <a href="/events" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Events</a> 
          <a href="#" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Announcements</a>
          <a href="#" className="text-sm text-gray-600 hover:text-blue-800 font-medium transition-colors">Join</a>
        </div>
        <a href="/login" className="bg-[#003366] hover:bg-blue-900 text-white text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg font-medium transition-colors">Member Login</a>
      </nav>

      {/* Hero */}
      <div className="relative h-[500px] md:h-[620px] w-full overflow-hidden">
        <Image
          src="/images/PXL_20251217_234313713.jpg"
          alt="Key Club members caroling at senior center"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/95 via-[#003366]/75 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs px-3 py-1.5 rounded-full mb-4 md:mb-6 w-fit border border-white/20 uppercase tracking-widest">
            Montville Township High School
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 md:mb-5" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Serving our<br />community,<br />
            <span className="italic font-normal">one hour at a time</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 max-w-md leading-relaxed">
            Join 175+ members making a difference in Montville and beyond through service and leadership.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-[#003366] px-5 md:px-7 py-2.5 md:py-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">Join Key Club</button>
            <button className="border border-white/60 text-white px-5 md:px-7 py-2.5 md:py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">View Events</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#003366] py-10 px-6 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-2 md:gap-4 text-center divide-x divide-blue-500">
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>175+</div>
            <div className="text-blue-300 text-xs md:text-sm mt-2 uppercase tracking-wider">Active members</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>2,400+</div>
            <div className="text-blue-300 text-xs md:text-sm mt-2 uppercase tracking-wider">Service hours</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>30+</div>
            <div className="text-blue-300 text-xs md:text-sm mt-2 uppercase tracking-wider">Events this year</div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="px-5 md:px-8 py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#003366] font-semibold mb-2">Our chapter</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Making an impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-52 md:h-60 rounded-xl overflow-hidden">
              <Image src="/images/IMG_6944.jpg" alt="Key Club event" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-52 md:h-60 rounded-xl overflow-hidden">
              <Image src="/images/IMG_9321.jpg" alt="Key Club event" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-52 md:h-60 rounded-xl overflow-hidden">
              <Image src="/images/IMG_9325.jpg" alt="Key Club event" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-5 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#003366] font-semibold mb-3">Get Involved Today</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'var(--font-playfair), serif' }}>Welcome to MTHS Key Club</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Welcome to the MTHS Key Club website — a hub dedicated to showcasing the engaging activities and initiatives at Montville Township High School. Our digital home captures memorable events and our ongoing service to the community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Join us in our mission to raise awareness, give service, and promote exciting fundraising events that make a difference. Members can also log in to track their service hours, view upcoming events, and stay up to date with everything happening in the chapter.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "⏱", label: "Track your service hours in real time" },
                { icon: "📅", label: "View and sign up for upcoming events" },
                { icon: "📣", label: "Stay updated with chapter announcements" },
                { icon: "🏆", label: "See your ranking on the chapter leaderboard" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/IMG_3913.jpg" alt="Key Club members" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="px-5 md:px-8 py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#003366] font-semibold mb-2">Get involved</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Upcoming events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { day: "7", month: "Jun", title: "Food Pantry Volunteer Shift", location: "Montville Community Center", time: "9:00 AM – 12:00 PM", hours: "2 hrs", color: "bg-[#003366]" },
              { day: "14", month: "Jun", title: "Park Cleanup Day", location: "Horseneck Road Park", time: "8:00 AM – 11:00 AM", hours: "3 hrs", color: "bg-blue-500" },
              { day: "21", month: "Jun", title: "Senior Center Visit", location: "Montville Senior Center", time: "1:00 PM – 3:00 PM", hours: "2 hrs", color: "bg-blue-800" },
            ].map((event, i) => (
              <div key={i} className={`${event.color} rounded-2xl p-7 text-white flex flex-col justify-between min-h-56`}>
                <div>
                  <div className="text-5xl font-bold leading-none opacity-30" style={{ fontFamily: 'var(--font-playfair), serif' }}>{event.day}</div>
                  <div className="text-sm uppercase tracking-widest opacity-60 mt-1">{event.month}</div>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1 leading-snug">{event.title}</div>
                  <div className="text-sm opacity-70">{event.location}</div>
                  <div className="text-sm opacity-70">{event.time}</div>
                  <div className="mt-4 inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">{event.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="px-5 md:px-8 py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#003366] font-semibold mb-2">Stay informed</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Latest announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "End of year hours deadline — June 30", body: "All service hours must be submitted by June 30 to count toward this year's totals. Log in to check your current hours.", date: "May 18, 2026" },
              { title: "Officer applications now open", body: "Applications for 2026–27 officer positions are now open through June 15. Apply today and take on a leadership role.", date: "May 12, 2026" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-all">
                <div className="text-xs text-[#003366] font-semibold uppercase tracking-wider mb-3">{item.date}</div>
                <div className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
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
                <a href="#" className="text-sm hover:text-white transition-colors">Home</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Events</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Announcements</a>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Members</div>
              <div className="flex flex-col gap-2">
              <a href="/login" className="text-sm hover:text-white transition-colors">Login</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Join Key Club</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}