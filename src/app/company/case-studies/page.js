import CaseCta from "../../components/company/case-studies/CaseCta";
import CaseGrid from "../../components/company/case-studies/CaseGrid";
import CaseHero from "../../components/company/case-studies/CaseHero";
import CaseSolutions from "../../components/company/case-studies/CaseSolutions";
import Testimonials from "../../components/global/Testimonials";

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseHero />
      <CaseGrid />
      <CaseSolutions />
      <Testimonials />
      <CaseCta />
    </main>
  );
}
