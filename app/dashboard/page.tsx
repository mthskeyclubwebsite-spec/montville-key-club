"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500 text-sm">Loading...</div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-gray-50" style={{ fontFamily: 'var(--font-source-sans), sans-serif' }}>
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Image src="/images/KC-logo-with-seal.png" alt="Key Club" width={120} height={30} className="object-contain" />
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {session.user?.name}
          </span>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-sm text-gray-500 hover:text-gray-900 border border-gray-200 px-4 py-1.5 rounded-lg transition-colors"
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        
        {/* Welcome */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#003366] font-semibold mb-1">Member Dashboard</p>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Welcome back, {session.user?.name?.split(" ")[0]}
          </h1>
          <p className="text-gray-500 mt-1">Here's your service summary for this year.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Hours logged</div>
            <div className="text-4xl font-bold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>—</div>
            <div className="text-sm text-gray-500 mt-1">Loading from Google Sheets</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Hours goal</div>
            <div className="text-4xl font-bold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>25</div>
            <div className="text-sm text-gray-500 mt-1">Required for the year</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Events attended</div>
            <div className="text-4xl font-bold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>—</div>
            <div className="text-sm text-gray-500 mt-1">Loading from Google Sheets</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-gray-900">Hours progress</div>
            <div className="text-sm text-gray-500">— / 25 hrs</div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div className="bg-[#003366] h-3 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="text-xs text-gray-400 mt-2">Connect Google Sheets to see your progress</div>
        </div>

        {/* Upcoming events */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Upcoming events</h2>
          <div className="flex flex-col gap-3">
            {[
              { day: "7", month: "Jun", title: "Food pantry volunteer shift", time: "9:00 AM – 12:00 PM", hours: "2 hrs" },
              { day: "14", month: "Jun", title: "Park cleanup day", time: "8:00 AM – 11:00 AM", hours: "3 hrs" },
              { day: "21", month: "Jun", title: "Senior center visit", time: "1:00 PM – 3:00 PM", hours: "2 hrs" },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-[#003366] text-white rounded-lg px-3 py-2 text-center min-w-12">
                  <div className="text-lg font-bold leading-none">{event.day}</div>
                  <div className="text-xs uppercase tracking-wide mt-0.5 text-blue-300">{event.month}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">{event.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{event.time}</div>
                </div>
                <div className="bg-blue-50 text-[#003366] text-xs px-3 py-1 rounded-full font-semibold">{event.hours}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}