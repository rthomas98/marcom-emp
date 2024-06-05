import WorkEcom from "../../components/company/work/WorkEcom";
import WorkFaqs from "../../components/company/work/WorkFaqs";
import WorkGallery from "../../components/company/work/WorkGallery";
import WorkHero from "../../components/company/work/WorkHero";
import WorkSolutions from "../../components/company/work/WorkSolutions";
import ServicesCta from "../../components/global/ServicesCta";

export default function OurWorkPage() {
  return (
    <main>
      <WorkHero />
      <WorkGallery />
      <ServicesCta />
      <WorkEcom />
      <WorkSolutions />
      <WorkFaqs />
    </main>
  );
}
