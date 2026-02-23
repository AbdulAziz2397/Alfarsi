"use client"

import CategoryHeader from "@/components/main/CategoryHeader"
import HeroBanner from "@/components/main/HeroBanner"
import ProductCard from "@/components/main/ProductCard"

const ana_digi_clocks = [
  {
    id: 1,
    name: 'Wall Clock CR-23',
    price: '380',
    img: '/assets/images/download.webp'
  },
  {
    id: 2,
    name: 'Wall Clock CR-23 Makkah',
    price: '380',
    img: '/assets/images/download.webp'
  },
  {
    id: 3,
    name: 'Wall Clock CR-23 Madinah',
    price: '380',
    img: '/assets/images/download.webp'
  },
  {
    id: 4,
    name: 'Wall Clock CR-23 White',
    price: '350',
    img: '/assets/images/download.webp'
  },
  {
    id: 5,
    name: 'Digital Clock AL-21',
    price: '290',
    img: '/assets/images/download.webp'
  }
];
const digital_clocks = [
  {
    id: 1,
    name: 'Wall Clock CR-23',
    price: '380',
    img: '/assets/images/desk_clock.webp'
  },
  {
    id: 2,
    name: 'Wall Clock CR-23 Makkah',
    price: '380',
    img: '/assets/images/desk_clock.webp'
  },
  {
    id: 3,
    name: 'Wall Clock CR-23 Madinah',
    price: '380',
    img: '/assets/images/desk_clock.webp'
  },
  {
    id: 4,
    name: 'Wall Clock CR-23 White',
    price: '350',
    img: '/assets/images/desk_clock.webp'
  },
  {
    id: 5,
    name: 'Digital Clock AL-21',
    price: '290',
    img: '/assets/images/desk_clock.webp'
  }
];

export default function page() {
  return (
    <div>
      <HeroBanner />
      <CategoryHeader subtitle="Elegance and more" title="ANA-DIGI CLOCKS" />
      <ProductCard products={ana_digi_clocks} />
      <CategoryHeader subtitle="With all details" title="DIGITAL CLOCKS" />
      <ProductCard products={digital_clocks} />
    </div>
  )
}
