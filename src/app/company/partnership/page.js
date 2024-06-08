import PartnerHero from "../../components/company/partnership/PartnerHero";
import PartnerIntro from "../../components/company/partnership/PartnerIntro";
import PartnerTestimonials from "../../components/company/partnership/PartnerTestimonials";
import PartnerWhy from "../../components/company/partnership/PartnerWhy";
import Logos from "../../components/global/Logos";
import ThreeTestimonialsBlock from "../../components/global/ThreeTestimonialsBlock";

export default function Partnership() {
  return (
    <main>
      <PartnerHero />
      <Logos />
      <PartnerIntro />
      <PartnerWhy />
      <PartnerTestimonials />
    </main>
  );
}
