import Image from "next/image";
import HomeHero from "./components/home/HomeHero";
import ImageLeft from "./components/home/ImageLeft";
import SolutionsSection from "./components/home/SolutionsSection";
import ServicesSection from "./components/home/ServicesSection";
import HomeWhyUs from "./components/home/HomeWhyUs";
import HomeProcess from "./components/home/HomeProcess";
import HomeCta from "./components/home/HomeCta";
import RecentPosts from "./components/global/RecentPost";
import Test from "./components/home/Test";

export default function Home() {
  return (
    <main>
      <Test />
      <ImageLeft />
      <SolutionsSection />
      <ServicesSection />
      <HomeWhyUs />
      <HomeProcess />
      <HomeCta />
      <RecentPosts />
    </main>
  );
}
