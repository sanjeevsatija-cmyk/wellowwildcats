import Topbar        from "@/components/layout/Topbar";
import Nav           from "@/components/layout/Nav";
import Footer        from "@/components/layout/Footer";
import Hero          from "@/components/home/Hero";
import MatchesStrip  from "@/components/home/MatchesStrip";
import ProgramsGrid  from "@/components/home/ProgramsGrid";
import PhotoMosaic   from "@/components/home/PhotoMosaic";
import SponsorsGrid  from "@/components/home/SponsorsGrid";
import JoinCTA       from "@/components/home/JoinCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellington Point Cricket Club — Wello Wildcats | Est. 1895",
  description:
    "Wellington Point Cricket Club — Est. 1895. Community cricket at Mooroondu Road, Thorneside QLD. Junior Blasters, Junior, Senior and Masters cricket for all ages in the Redlands.",
};

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <Hero />
        <MatchesStrip />
        <ProgramsGrid />
        <PhotoMosaic />
        <SponsorsGrid />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
