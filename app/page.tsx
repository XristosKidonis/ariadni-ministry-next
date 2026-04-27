import AnnouncementBanner from "@/components/sections/AnnouncementBanner";
import Nav               from "@/components/sections/Nav";
import Hero              from "@/components/sections/Hero";
import SocialProofBand   from "@/components/sections/SocialProofBand";
import Testimonials      from "@/components/sections/Testimonials";
import Vision            from "@/components/sections/Vision";
import CTASection        from "@/components/sections/CTASection";
import Mission           from "@/components/sections/Mission";
import InviteAriadni     from "@/components/sections/InviteAriadni";
import BoardMembers      from "@/components/sections/BoardMembers";
import Give              from "@/components/sections/Give";
import Messages          from "@/components/sections/Messages";
import Worship           from "@/components/sections/Worship";
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
        <SocialProofBand />
        <Testimonials />
        <Vision />
        <CTASection />
        <Mission />
        <InviteAriadni />
        <BoardMembers />
        <Give />
        <Messages />
        <Worship />
        <PrayerRequest />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
