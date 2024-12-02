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
import Footer_1 from "./components/Landing/footer";
import Toast from "./utils/toast";
import { ToastEnum } from "./utils/toast-type";
import Hero_1 from "./components/Landing/Hero_1";
import Navbar_1 from "./components/Landing/navbar_1";
import Navbar_2 from "./components/Landing/navbar_2";

export default function Home() {
  return (
    <main className="bg-[#292727] raleway">
      <Toast
        icon={ToastEnum.STREAK}
        message="hello"
        close={false}
        delay={3000}
      />
      {/* <Navbar /> */}
      {/* <Navbar_1 /> */}
      <Navbar_2 />
      {/* <Hero /> */}
      <Hero_1 />
      <TodayDeals />
      <Categories />
      <SponsoredProducts />
      <OfficialDealers />
      <Appliance />
      <OfficialStores />
      <Computer />
      <Beauty />
      <SameDay />
      {/* <AboutUs /> */}
      <NewsLetter />
      <Footer_1 />
    </main>
  );
}
