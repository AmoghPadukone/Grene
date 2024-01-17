import Footer from "@/components/LandingPage/Footer";
import Footer2 from "@/components/LandingPage/Footer2";
import HeroSection from "@/components/LandingPage/HeroSection";

import HowToInvest from "@/components/LandingPage/HowToInvest";
import Navbar from "@/components/LandingPage/Navbar";
import Sources from "@/components/LandingPage/Sources";
import Steps from "@/components/LandingPage/Steps";

export default function Home() {
  // imprort components here
  return (
    <main>
      <HeroSection />
      <Steps />
      <Sources />
      <HowToInvest />
      {/* <Footer /> */}
      <Footer2 />
    </main>
  );
}
