import AnnouncementBanner from "@/components/sections/AnnouncementBanner";
import Nav               from "@/components/sections/Nav";
import Hero              from "@/components/sections/Hero";
import Latest            from "@/components/sections/Latest";
import Mission           from "@/components/sections/Mission";
import BoardMembers      from "@/components/sections/BoardMembers";
import Worship           from "@/components/sections/Worship";
import Messages          from "@/components/sections/Messages";
import CTASection        from "@/components/sections/CTASection";
import Events            from "@/components/sections/Events";
import Give              from "@/components/sections/Give";
import PrayerRequest     from "@/components/sections/PrayerRequest";
import Newsletter        from "@/components/sections/Newsletter";
import Footer            from "@/components/sections/Footer";
import { Marquee }       from "@/components/ui/marquee";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={["WORSHIP", "PRAYER", "COMMUNITY", "ARISE", "HEAVEN TO EARTH", "FAITH", "PRESENCE"]}
          speed={35}
          className="py-5 border-y text-[11px] font-semibold tracking-[0.18em]"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        />
        <Latest />
        <Mission />
        <BoardMembers />
        <Worship />
        <Messages />
        <Marquee
          items={["UNSHAKEABLE FAITH", "RUNNING YOUR RACE", "THE ANCHOR HOLDS", "WHEN GOD FEELS SILENT"]}
          speed={50}
          reverse
          className="py-5 border-y text-[11px] font-semibold tracking-[0.18em]"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        />
        <CTASection />
        <Events />
        <Give />
        <PrayerRequest />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
