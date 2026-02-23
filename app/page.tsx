import BestSellerCarousel from "@/components/home/BestSeller";
import ClocksFeature from "@/components/home/ClockFeature";
import CollectionFeature from "@/components/home/CollectionFeature";
import CollectionTabs from "@/components/home/CollectionTabs";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/main/ProductCard";
import WatchGrid from "@/components/home/WatchGrid";
import DiscoverAllBtn from "@/components/main/DiscoverAllBtn";
import DividerIcon from "@/public/assets/icons/DividerIcon";

const products = [
  { id: 1, name: 'Premier 360 Silver', price: '1,160 - 1,215', img: '/assets/images/p-1.webp' },
  { id: 2, name: 'Premier 360 Leather Gold', price: '1,120 - 1,170', img: '/assets/images/p-2.webp' },
  { id: 3, name: 'Premier 360 Gold', price: '1,300 - 1,360', img: '/assets/images/p-1.webp' },
  { id: 4, name: 'Premier 360 Leather', price: '1,050 - 1,100', img: '/assets/images/p-2.webp' },
  { id: 5, name: 'Premier 360 Black', price: '1,200 - 1,250', img: '/assets/images/p-1.webp' },
];

const bestSellers = [
  { id: 1, name: 'Sport Watch WY-16', price: '190', img: '/assets/images/p-1.webp', },
  { id: 2, name: 'Alfajr Desk Clock CF-19', price: '190', img: '/assets/images/p-1.webp', },
  { id: 3, name: 'Wall Clock CR-23', price: '380', img: '/assets/images/p-1.webp', },
  { id: 4, name: 'Alfajr Wall Clock CJ-17', price: '390', img: '/assets/images/p-1.webp', },
];


export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionFeature />
      <CollectionTabs />
      <ProductCard products={products} />
      <DiscoverAllBtn />
      <ClocksFeature />
      <WatchGrid />
      <div className="text-center my-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003d4d] uppercase tracking-widest m-4">
          Best Seller
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center w-full max-w-[300px]">
          <DividerIcon />
        </div>
      </div>
      <ProductCard products={bestSellers} />
    </div>
  );
}
