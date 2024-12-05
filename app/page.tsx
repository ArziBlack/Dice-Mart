import SponsoredProducts from "./components/Landing/SponsoredProducts";
import TodayDeals from "./components/Landing/TodayDeals";
import SameDay from "./components/Landing/SameDay";
import Categories from "./components/Landing/Categories";
import OfficialDealers from "./components/Landing/OfficialDealers";
import OfficialStores from "./components/Landing/OfficialStores";
import Appliance from "./components/Landing/Appliance";
import Beauty from "./components/Landing/Beauty";
import Computer from "./components/Landing/Computer";
import NewsLetter from "./components/Landing/NewsLetter";
import Toast from "./utils/toast";
import { ToastEnum } from "./utils/toast-type";
import Hero_1 from "./components/Landing/Hero_1";

export default function Home() {
  return (
    <main className="text-black-950 raleway w-screen max-w-screen-2xl flex flex-col justify-center">
      <Toast
        icon={ToastEnum.STREAK}
        message="hello"
        close={false}
        delay={3000}
      />
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
      <NewsLetter />
    </main>
  );
}
