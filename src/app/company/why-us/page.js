import WhyApproach from "../../components/company/why/WhyApproach";
import WhyCta from "../../components/company/why/WhyCta";
import WhyDelivery from "../../components/company/why/WhyDelivery";
import WhyHero from "../../components/company/why/WhyHero";
import WhyIntro from "../../components/company/why/WhyIntro";
import WhySolutions from "../../components/company/why/WhySolutions";
import WhyTechnology from "../../components/company/why/WhyTechnology";
import Logos from "../../components/global/Logos";
import ThreeTestimonialsBlock from "../../components/global/ThreeTestimonialsBlock";

export default function WhyUs() {
  return (
    <main>
      <WhyHero />
      <WhyIntro />
      <WhySolutions />
      <WhyTechnology />
      <WhyApproach />
      <WhyDelivery />
      <ThreeTestimonialsBlock />
      <Logos />
      <WhyCta />
    </main>
  );
}
