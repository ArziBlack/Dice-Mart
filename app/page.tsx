import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import TodayDeals from "./components/Landing/TodayDeals";

export default function Home() {
  return (
    <main className="bg-[#FBFBFB]">
      <Navbar />
      <Hero />
      <TodayDeals/>
    </main>
  );
}
