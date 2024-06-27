import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import SponsoredProducts from "./components/Landing/SponsoredProducts";
import TodayDeals from "./components/Landing/TodayDeals";
import SameDay from "./components/Landing/SameDay";
import Categories from "./components/Landing/Categories";
import OfficialDealers from "./components/Landing/OfficialDealers";
import OfficialStores from "./components/Landing/OfficialStores";
import AboutUs from "./components/Landing/AboutUs";

export default function Home() {
  return (
    <main className="bg-[#FBFBFB] raleway">
      <Navbar />
      <Hero />
      <TodayDeals/>
      <Categories/>
      <SponsoredProducts/>
      <OfficialDealers/>
      <SameDay/>
      <OfficialStores/>
      <AboutUs/>
    </main>
  );
}