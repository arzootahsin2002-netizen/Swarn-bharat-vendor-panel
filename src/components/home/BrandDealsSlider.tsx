'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  CreditCard,
  ArrowRight,
  Zap,
  ShieldCheck,
  Tag
} from 'lucide-react';

export interface BrandDealBanner {
  id: string;
  brand: string;
  brandTagline: string;
  title: string;
  dealHighlight: string;
  subdeal: string;
  category: 'Mobiles' | 'Electronics' | 'Beauty' | 'Fashion' | 'Sports' | 'All';
  festiveBadgeTop: string;
  festiveBadgeMid: string;
  festiveBadgeBottom: string;
  specBadge?: string;
  image: string;
  imageAlt: string;
  gradientBg: string;
  bankOffer: {
    banks: string[];
    discountText: string;
  };
  link: string;
}

export const BRAND_DEAL_BANNERS: BrandDealBanner[] = [
  {
    id: 'oppo-k14x',
    brand: 'oppo',
    brandTagline: '45W Flash Charge • 6500mAh Monster Battery',
    title: 'OPPO K14x 5G',
    dealHighlight: 'From ₹16,999*',
    subdeal: 'Lowest price ever of the season!',
    category: 'Mobiles',
    festiveBadgeTop: 'THE BIG',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'DAYS',
    specBadge: '6500 mAh',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'OPPO K14x 5G Smartphone',
    gradientBg: 'from-[#050b1a] via-[#0d1b3e] to-[#1a2f64]',
    bankOffer: {
      banks: ['AXIS BANK', 'ICICI Bank'],
      discountText: '10% Instant Discount* + No Cost EMI'
    },
    link: '/shop?category=Mobiles'
  },
  {
    id: 'vivo-v80',
    brand: 'vivo',
    brandTagline: 'Powered by OriginOS • 50MP ZEISS Studio Optics',
    title: 'vivo V80 5G',
    dealHighlight: 'From ₹2,625/M*',
    subdeal: 'AI creative studio camera with Aura Light',
    category: 'Mobiles',
    festiveBadgeTop: 'THE BIG',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'DAYS',
    specBadge: 'ZEISS AI',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'vivo V80 Smartphone',
    gradientBg: 'from-[#2b1003] via-[#481c06] to-[#7a300a]',
    bankOffer: {
      banks: ['AXIS BANK', 'ICICI Bank'],
      discountText: '10% Instant Discount* | No Cost EMI'
    },
    link: '/shop?category=Mobiles'
  },
  {
    id: 'haircare-pilgrim',
    brand: 'PILGRIM & DOVE',
    brandTagline: 'Red Vine & Jeju Island Volcanic Actives',
    title: 'Healthy Hair & Scalp Care',
    dealHighlight: 'Up to 75% Off',
    subdeal: 'Pilgrim, Dove, Plum & top organic brands',
    category: 'Beauty',
    festiveBadgeTop: 'THE BIG',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'DAYS',
    specBadge: 'FLAT 75% OFF',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Luxury Haircare and Serums',
    gradientBg: 'from-[#23023b] via-[#3a065e] to-[#601297]',
    bankOffer: {
      banks: ['AXIS BANK', 'ICICI Bank'],
      discountText: 'Extra 10% Savings on Bank Credit Card'
    },
    link: '/shop?category=Beauty'
  },
  {
    id: 'apple-macbook',
    brand: 'Apple',
    brandTagline: 'M4 Next-Gen Silicon • 24h All-Day Battery',
    title: 'MacBook Air & iPad Pro',
    dealHighlight: 'From ₹34,900*',
    subdeal: 'Flat ₹5,000 instant cashback on cards',
    category: 'Electronics',
    festiveBadgeTop: 'FESTIVAL',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'MEGA',
    specBadge: 'M4 SILICON',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Apple MacBook and iPad',
    gradientBg: 'from-[#0b0c10] via-[#1f2833] to-[#2b3543]',
    bankOffer: {
      banks: ['HDFC BANK', 'SBI Card'],
      discountText: 'Flat ₹5,000 Instant Discount*'
    },
    link: '/shop?category=Electronics'
  },
  {
    id: 'sony-audio',
    brand: 'SONY',
    brandTagline: 'Industry Leading Noise Cancellation • Hi-Res LDAC',
    title: 'Sony WH-1000XM5 & Earbuds',
    dealHighlight: 'Up to 55% Off',
    subdeal: 'Experience studio acoustics & deep punchy bass',
    category: 'Electronics',
    festiveBadgeTop: 'AUDIO',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'DEALS',
    specBadge: '30H BATTERY',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Sony Noise Cancelling Headphones',
    gradientBg: 'from-[#031926] via-[#0b3c5d] to-[#1d5978]',
    bankOffer: {
      banks: ['AXIS BANK', 'ICICI Bank'],
      discountText: '10% Instant Savings + Flat ₹500 Bonus'
    },
    link: '/shop?category=Electronics'
  },
  {
    id: 'nike-sneakers',
    brand: 'NIKE & PUMA',
    brandTagline: 'Air Cushioning • Maximum Energy Return',
    title: 'Retro Sneakers & Athletics',
    dealHighlight: '40% - 60% Off',
    subdeal: 'Extra 15% with code SWARN15 at checkout',
    category: 'Sports',
    festiveBadgeTop: 'THE BIG',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'DAYS',
    specBadge: 'AIR ZOOM',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Nike Sneakers Athletic Footwear',
    gradientBg: 'from-[#380208] via-[#5e0712] to-[#8f1220]',
    bankOffer: {
      banks: ['AXIS BANK', 'HDFC BANK'],
      discountText: '10% Instant Off on Orders > ₹2,999'
    },
    link: '/shop?category=Sports'
  },
  {
    id: 'swarn-apparel',
    brand: 'SWARN BHARAT',
    brandTagline: '500 GSM Heavyweight Terry & Pure Mulberry Silk',
    title: 'Festive Handcrafted Silk & Knits',
    dealHighlight: 'Flat 40% Off',
    subdeal: 'Heritage artisanal craftsmanship & tailor fit',
    category: 'Fashion',
    festiveBadgeTop: 'ROYAL',
    festiveBadgeMid: 'SWARN',
    festiveBadgeBottom: 'FEST',
    specBadge: 'HANDLOOM',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Swarn Bharat Luxury Fashion',
    gradientBg: 'from-[#042416] via-[#094127] to-[#126b42]',
    bankOffer: {
      banks: ['AXIS BANK', 'ICICI Bank'],
      discountText: 'Free Express Shipping + 10% Instant Card Discount'
    },
    link: '/shop?category=Fashion'
  }
];

const CATEGORIES = [
  'All Deals',
  'Mobiles',
  'Electronics',
  'Beauty',
  'Fashion',
  'Sports'
] as const;

export function BrandDealsSlider() {
  const [activeCategory, setActiveCategory] = useState<string>('All Deals');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredBanners = activeCategory === 'All Deals'
    ? BRAND_DEAL_BANNERS
    : BRAND_DEAL_BANNERS.filter((b) => b.category === activeCategory);

  const totalSlides = filteredBanners.length;
  const maxIndex = Math.max(0, totalSlides - itemsPerView);

  // Auto-advance
  useEffect(() => {
    if (isPaused || totalSlides <= itemsPerView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides, maxIndex, itemsPerView]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="relative bg-zinc-100/70 py-4 sm:py-6 overflow-hidden border-b border-zinc-200/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header Strip with Live Offers Ticker & Category Filter Chips */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500 text-zinc-950 text-xs font-black uppercase tracking-wider shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-zinc-950 animate-bounce" />
              Mega Brand Days
            </span>
            <span className="text-xs font-bold text-zinc-700 hidden sm:inline">
              Exclusive festive discounts across top brands & flagship devices
            </span>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-bold">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Viewport Frame */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-sm"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {filteredBanners.map((banner) => (
              <div
                key={banner.id}
                className="shrink-0 px-1 sm:px-1.5"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <Link
                  href={banner.link}
                  className="group block relative w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Decorative Festive Golden Light Strings / Bulb Border (matching screenshot aesthetic) */}
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl border-2 border-amber-400/80 shadow-[inset_0_0_12px_rgba(251,191,36,0.35)]">
                    {/* Top dotted bulb string */}
                    <div className="absolute -top-[1px] inset-x-2 h-1.5 bg-[radial-gradient(#fde047_1.5px,transparent_1.5px)] bg-[size:11px_11px] opacity-95" />
                    {/* Bottom dotted bulb string */}
                    <div className="absolute -bottom-[1px] inset-x-2 h-1.5 bg-[radial-gradient(#fde047_1.5px,transparent_1.5px)] bg-[size:11px_11px] opacity-95" />
                  </div>

                  {/* Card Background Gradient & Visual Layers */}
                  <div className={`relative bg-gradient-to-r ${banner.gradientBg} h-full min-h-[220px] sm:min-h-[250px] p-4 sm:p-6 flex flex-col justify-between text-white overflow-hidden`}>
                    
                    {/* Glow backdrop behind product */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-amber-400/15 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                    {/* Top Header Row: Brand Logo & Festive Corner Seal */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight font-sans text-white uppercase drop-shadow-md">
                            {banner.brand}
                          </span>
                          {banner.specBadge && (
                            <span className="px-1.5 py-0.5 rounded bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-300 border border-white/20">
                              {banner.specBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-zinc-300 font-medium tracking-wide truncate max-w-[200px] sm:max-w-xs">
                          {banner.brandTagline}
                        </p>
                      </div>

                      {/* Festive Seal / Big Billion Days style circular badge */}
                      <div className="relative shrink-0 flex items-center justify-center">
                        <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 p-0.5 shadow-lg group-hover:rotate-6 transition-transform">
                          <div className="w-full h-full rounded-full bg-[#1e3a8a] text-yellow-300 flex flex-col items-center justify-center p-0.5 text-center font-black leading-none border-2 border-dashed border-amber-300">
                            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-amber-200">{banner.festiveBadgeTop}</span>
                            <span className="text-[9px] sm:text-[11px] font-black text-white">{banner.festiveBadgeMid}</span>
                            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-amber-300">{banner.festiveBadgeBottom}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle Row: Product Name, Price Highlight & Product Visual */}
                    <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-1.5 sm:my-2">
                      {/* Left: Text & Deals */}
                      <div className="col-span-7 sm:col-span-8 space-y-1">
                        <h3 className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-white drop-shadow-sm truncate">
                          {banner.title}
                        </h3>

                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-xl sm:text-3xl md:text-4xl font-black text-amber-300 tracking-tight drop-shadow-md font-sans">
                            {banner.dealHighlight}
                          </span>
                        </div>

                        <p className="text-[11px] sm:text-xs text-zinc-200 font-medium line-clamp-1">
                          {banner.subdeal}
                        </p>
                      </div>

                      {/* Right: Floating Product Image */}
                      <div className="col-span-5 sm:col-span-4 relative h-24 sm:h-36 md:h-40 flex items-center justify-center">
                        <div className="relative w-full h-full drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                          <Image
                            src={banner.image}
                            alt={banner.imageAlt}
                            fill
                            unoptimized
                            className="object-cover sm:object-contain rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Bank Offer Strip & AD Badge */}
                    <div className="relative z-10 pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-1.5 text-xs">
                      {/* Bank Strip */}
                      <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                        <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black text-rose-700 shadow-xs border border-zinc-200 shrink-0">
                          <CreditCard className="w-2.5 h-2.5 text-rose-600" />
                          <span>{banner.bankOffer.banks[0]}</span>
                        </div>
                        {banner.bankOffer.banks[1] && (
                          <div className="hidden sm:flex items-center gap-1 bg-white px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black text-orange-700 shadow-xs border border-zinc-200 shrink-0">
                            <span>{banner.bankOffer.banks[1]}</span>
                          </div>
                        )}
                        <span className="text-[10px] sm:text-[11px] font-bold text-amber-200 truncate">
                          {banner.bankOffer.discountText}
                        </span>
                      </div>

                      {/* AD Label & Callout */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[8px] uppercase tracking-wider text-zinc-400 font-mono bg-black/40 px-1 py-0.5 rounded border border-white/10">
                          AD
                        </span>
                        <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-white group-hover:translate-x-1 transition-transform">
                          Shop <ArrowRight className="w-3 h-3 text-amber-400" />
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous Deal Banner"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
            aria-label="Next Deal Banner"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-7 bg-amber-500 shadow-xs'
                  : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Quick Micro-Banner Perks Strip Under Slider */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mt-3.5 text-xs text-zinc-700">
          <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-zinc-200/80 shadow-2xs">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <div className="min-w-0">
              <p className="font-bold text-zinc-900 truncate">Lowest Price Guarantee</p>
              <p className="text-[10px] text-zinc-500 truncate">Price match across top platforms</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-zinc-200/80 shadow-2xs">
            <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="min-w-0">
              <p className="font-bold text-zinc-900 truncate">Bank Instant Discounts</p>
              <p className="text-[10px] text-zinc-500 truncate">Up to 10% off with Axis & ICICI</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-zinc-200/80 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <div className="min-w-0">
              <p className="font-bold text-zinc-900 truncate">100% Brand Certified</p>
              <p className="text-[10px] text-zinc-500 truncate">Direct manufacturer warranty</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 flex items-center gap-2 border border-zinc-200/80 shadow-2xs">
            <Tag className="w-4 h-4 text-purple-600 shrink-0" />
            <div className="min-w-0">
              <p className="font-bold text-zinc-900 truncate">Extra Coupon SWARN15</p>
              <p className="text-[10px] text-zinc-500 truncate">Additional 15% off first order</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
