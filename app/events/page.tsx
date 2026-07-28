import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const events = [
  { day: "7", month: "Jun", title: "Food Pantry Volunteer Shift", location: "Montville Community Center", address: "195 Changebridge Rd", time: "9:00 AM – 12:00 PM", hours: "2 hrs", description: "Help sort and package food donations for local families in need. No experience necessary — just bring your energy and a good attitude." },
  { day: "14", month: "Jun", title: "Park Cleanup Day", location: "Horseneck Road Park", address: "Horseneck Rd, Montville", time: "8:00 AM – 11:00 AM", hours: "3 hrs", description: "Join us for a morning of trail cleanup, litter collection, and light landscaping to keep our community parks beautiful." },
  { day: "21", month: "Jun", title: "Senior Center Visit", location: "Montville Senior Center", address: "356 Rt 202, Montville", time: "1:00 PM – 3:00 PM", hours: "2 hrs", description: "Spend an afternoon with local seniors playing games, chatting, and brightening their day. A chapter favorite." },
  { day: "28", month: "Jun", title: "Blood Drive Support", location: "MTHS Gymnasium", address: "245 Horseneck Rd", time: "9:00 AM – 2:00 PM", hours: "4 hrs", description: "Assist with check-in, refreshments, and logistics for the Red Cross blood drive hosted at our school." },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-source-sans), sans-serif' }}>

      <Header />

      {/* Header */}
      <div className="bg-[#003366] px-6 md:px-8 py-14 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3 animate-fade-in-up">Get involved</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up" style={{ fontFamily: 'var(--font-playfair), serif', animationDelay: "0.1s" }}>
          Upcoming Events
        </h1>
        <p className="text-blue-100 mt-4 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Sign up, show up, and earn service hours while making a real difference in Montville.
        </p>
      </div>

      {/* Events list */}
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {events.map((event, i) => (
            <Reveal key={i} delay={i * 100} className="flex flex-col md:flex-row gap-5 bg-white border border-gray-100 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />

    </main>
  );
}
