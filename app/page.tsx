import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import SponsoredProducts from "./components/Landing/SponsoredProducts";
import TodayDeals from "./components/Landing/TodayDeals";
import SameDay from "./components/Landing/SameDay";
import Categories from "./components/Landing/Categories";

export default function Home() {
  return (
    <main className="bg-[#FBFBFB] raleway">
      <Navbar />
      <Hero />
      <TodayDeals/>
      <SponsoredProducts/>
      <SameDay/>
      <Categories/>
    </main>
  );
}