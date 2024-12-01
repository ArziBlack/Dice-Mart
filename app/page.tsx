import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import SponsoredProducts from "./components/Landing/SponsoredProducts";
import TodayDeals from "./components/Landing/TodayDeals";
import SameDay from "./components/Landing/SameDay";
import Categories from "./components/Landing/Categories";
import OfficialDealers from "./components/Landing/OfficialDealers";
import OfficialStores from "./components/Landing/OfficialStores";
import Appliance from "./components/Landing/Appliance";
import Beauty from "./components/Landing/Beauty";
import Computer from "./components/Landing/Computer";
import AboutUs from "./components/Landing/AboutUs";
import NewsLetter from "./components/Landing/NewsLetter";
import Footer from "./components/Landing/Footer";
import Toast from "./utils/toast";
import { ToastEnum } from "./utils/toast-type";

export default function Home() {
  return (
    <main className="bg-[#FBFBFB] raleway">
      <Toast
        icon={ToastEnum.STREAK}
        message="hello"
        close={false}
        delay={3000}
      />
      <Navbar />
      <Hero />
      <TodayDeals />
      <Categories />
      <SponsoredProducts />
      <OfficialDealers />
      <Appliance />
      <OfficialStores />
      <Computer />
      <Beauty />
      <SameDay />
      <AboutUs />
      <NewsLetter />
      <Footer />
    </main>
  );
}
