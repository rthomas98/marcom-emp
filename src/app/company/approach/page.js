import React from "react";

import ApproachHero from "src/app/components/company/approach/ApproachHero";
import ApproachIntro from "../../components/company/approach/ApproachIntro";
import ApproachPlanning from "../../components/company/approach/ApproachPlanning";
import ApproachDesign from "../../components/company/approach/ApproachDesign";
import ApproachTesting from "../../components/company/approach/ApproachTesting";
import ApproachLaunch from "../../components/company/approach/ApproachLaunch";
import ApproachSupport from "../../components/company/approach/ApproachSupport";
import ApproachCta from "../../components/company/approach/ApproachCta";
import ApproachFaqs from "../../components/company/approach/ApproachFaqs";

export default function Approach() {
  return (
    <main>
      <ApproachHero />
      <ApproachIntro />
      <ApproachPlanning />
      <ApproachDesign />
      <ApproachTesting />
      <ApproachLaunch />
      <ApproachSupport />
      <ApproachCta />
      <ApproachFaqs />
    </main>
  );
}
