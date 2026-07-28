import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
              <Link href="/" className="text-sm hover:text-white transition-colors w-fit">Home</Link>
              <Link href="/events" className="text-sm hover:text-white transition-colors w-fit">Events</Link>
              <Link href="/announcements" className="text-sm hover:text-white transition-colors w-fit">Announcements</Link>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Members</div>
            <div className="flex flex-col gap-2">
              <Link href="/login" className="text-sm hover:text-white transition-colors w-fit">Login</Link>
              <Link href="/follow_us" className="text-sm hover:text-white transition-colors w-fit">Follow Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
