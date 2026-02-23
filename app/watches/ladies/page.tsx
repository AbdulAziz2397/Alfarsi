import HeroBanner from '@/components/main/HeroBanner'
import ProductCarousel from '@/components/main/ProductCard'

const analog_clocks = [
  {
    id: 1,
    name: 'Wall Clock CR-23',
    price: '380',
    img: '/assets/images/Black-Bord-clock.webp'
  },
  {
    id: 2,
    name: 'Wall Clock CR-23 Makkah',
    price: '380',
    img: '/assets/images/Black-Bord-clock.webp'
  },
  {
    id: 3,
    name: 'Wall Clock CR-23 Madinah',
    price: '380',
    img: '/assets/images/Black-Bord-clock.webp'
  },
  {
    id: 4,
    name: 'Wall Clock CR-23 White',
    price: '350',
    img: '/assets/images/Black-Bord-clock.webp'
  },
  {
    id: 5,
    name: 'Digital Clock AL-21',
    price: '290',
    img: '/assets/images/Black-Bord-clock.webp'
  }
];

export default function page() {
  return (
    <div>
        <HeroBanner title="Ladies Watches" />
        <ProductCarousel products={analog_clocks} />
    </div>
  )
}
