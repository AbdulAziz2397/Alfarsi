import BestSellerCarousel from "@/components/home/BestSeller";
import ClocksFeature from "@/components/home/ClockFeature";
import CollectionFeature from "@/components/home/CollectionFeature";
import CollectionTabs from "@/components/home/CollectionTabs";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/home/ProductCard";
import WatchGrid from "@/components/home/WatchGrid";


export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionFeature />
      <CollectionTabs />
      <ProductCard />
      <ClocksFeature />
      <WatchGrid />
      <BestSellerCarousel />
    </div>
  );
}
