import { Test } from "@relume_io/relume-ui";
import AboutHero from "../../components/company/about-us/AboutHero";
import BetterFuture from "../../components/company/about-us/BetterFuture";
import TeamSection from "../../components/company/about-us/TeamSection";
import Testimonials from "../../components/global/Testimonials";
import Logos from "../../components/global/Logos";
import AboutSolutions from "../../components/company/about-us/AboutSolutions";

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <BetterFuture />
      <TeamSection />
      <Testimonials />
      <AboutSolutions />
      <Logos />
    </main>
  );
}
