import { BrandDealsSlider } from '@/components/home/BrandDealsSlider';
import { InTheSpotlight } from '@/components/home/InTheSpotlight';
import { FestiveGifts } from '@/components/home/FestiveGifts';
import { FestiveMegaBanner } from '@/components/home/FestiveMegaBanner';
import { BrandsInSpotlight } from '@/components/home/BrandsInSpotlight';
import { FlashDeals } from '@/components/home/FlashDeals';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { LookbookSection } from '@/components/home/LookbookSection';
import { TrustSection } from '@/components/home/TrustSection';
import { CustomerReviewsSection } from '@/components/home/CustomerReviewsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <BrandDealsSlider />
      <InTheSpotlight />
      <FestiveGifts />
      <FestiveMegaBanner />
      <BrandsInSpotlight />
      <FlashDeals />
      <CategoryTiles />
      <HeroBanner />
      <FeaturedProducts />
      <LookbookSection />
      <TrustSection />
      <CustomerReviewsSection />
    </div>
  );
}
