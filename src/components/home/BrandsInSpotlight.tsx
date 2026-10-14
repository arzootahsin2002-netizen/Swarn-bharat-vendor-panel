'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export interface BrandQuickBadge {
  id: string;
  name: string;
  category: string;
  offerText: string;
  logoColor: string;
  logoBg: string;
  link: string;
}

export interface BrandShowcaseBanner {
  id: string;
  brand: string;
  headline: string;
  subtext: string;
  ribbonText: string;
  image: string;
  imageAlt: string;
  overlayGradient: string;
  link: string;
}

export const TOP_BRAND_BADGES: BrandQuickBadge[] = [
  {
    id: 'eveready',
    name: 'EVEREADY',
    category: 'Lighting & Power',
    offerText: 'Min 60% off',
    logoColor: 'text-red-600',
    logoBg: 'bg-red-50',
    link: '/shop?category=Appliances'
  },
  {
    id: 'greenchef',
    name: 'Greenchef',
    category: 'Cooktops & Stoves',
    offerText: 'Min 60% off',
    logoColor: 'text-emerald-700',
    logoBg: 'bg-emerald-50',
    link: '/shop?category=Appliances'
  },
  {
    id: 'cello',
    name: 'cello',
    category: 'Homeware & Lunch',
    offerText: 'Min 50% off',
    logoColor: 'text-zinc-950 font-serif font-black',
    logoBg: 'bg-zinc-50',
    link: '/shop?category=Home'
  },
  {
    id: 'pigeon',
    name: 'Pigeon',
    category: 'Non-Stick Cookware',
    offerText: 'Min 55% off',
    logoColor: 'text-rose-600 font-bold',
    logoBg: 'bg-rose-50',
    link: '/shop?category=Home'
  },
  {
    id: 'waaree',
    name: 'WAAREE',
    category: 'Solar & Clean Energy',
    offerText: 'Special Deals',
    logoColor: 'text-green-700 font-black',
    logoBg: 'bg-green-50',
    link: '/shop?category=Electronics'
  },
  {
    id: 'milton',
    name: 'MILTON',
    category: 'Thermosteel & Storage',
    offerText: 'Min 45% off',
    logoColor: 'text-red-700 font-bold',
    logoBg: 'bg-red-50',
    link: '/shop?category=Home'
  }
];

export const BRAND_SHOWCASE_BANNERS: BrandShowcaseBanner[] = [
  {
    id: 'eveready-banner',
    brand: 'EVEREADY',
    headline: 'Effortless utility. Lasting brilliance.',
    subtext: '10 W basic standard LED bulb pack with surge protection',
    ribbonText: 'Min 60% off',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Eveready Standard LED Bulbs',
    overlayGradient: 'from-[#450a0a]/95 via-[#570b0b]/75 to-transparent',
    link: '/shop?category=Appliances'
  },
  {
    id: 'cello-banner',
    brand: 'cello',
    headline: 'Food grade lunch box',
    subtext: 'Your perfect office & school companion with insulated bag',
    ribbonText: 'Min 50% off',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Cello Insulated Food Grade Lunch Box',
    overlayGradient: 'from-zinc-950/90 via-zinc-900/70 to-transparent',
    link: '/shop?category=Home'
  },
  {
    id: 'waaree-banner',
    brand: 'WAAREE',
    headline: 'Go Solar with India’s leading solar brand',
    subtext: 'Clean power everyday with high-efficiency rooftop monocrystalline cells',
    ribbonText: 'Shop now',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Waaree Rooftop Solar Panels',
    overlayGradient: 'from-[#062c16]/95 via-[#0d4023]/70 to-transparent',
    link: '/shop?category=Electronics'
  },
  {
    id: 'pigeon-banner',
    brand: 'Pigeon',
    headline: 'Safe everyday cooking',
    subtext: 'Food grade 5-layer non-stick coating pans & kadai combo',
    ribbonText: 'Explore now',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Pigeon Non-Stick Cookware Set',
    overlayGradient: 'from-[#2e0909]/95 via-[#4a1212]/75 to-transparent',
    link: '/shop?category=Home'
  },
  {
    id: 'greenchef-banner',
    brand: 'Greenchef',
    headline: 'Sleek glass for kitchen',
    subtext: 'Easy control & thermal efficiency toughened glass gas cooktop',
    ribbonText: 'Shop now',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Greenchef Toughened Glass Gas Stove',
    overlayGradient: 'from-[#17120a]/95 via-[#291e10]/75 to-transparent',
    link: '/shop?category=Appliances'
  },
  {
    id: 'milton-banner',
    brand: 'MILTON',
    headline: 'Thermosteel 24H Temperature Lock',
    subtext: 'Stainless steel vacuum insulated flask with leakproof seal',
    ribbonText: 'Min 45% off',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Milton Thermosteel Bottle',
    overlayGradient: 'from-[#0b172b]/95 via-[#13284a]/75 to-transparent',
    link: '/shop?category=Home'
  }
];

export function BrandsInSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll);
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-6 sm:py-8 bg-zinc-50/70 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 font-serif tracking-tight">
                Brands in highlights
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 text-[11px] font-bold border border-violet-200">
                <CheckCircle2 className="w-3 h-3 text-violet-700" /> 100% Brand Certified
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              India&apos;s trusted everyday household & utility icons with verified festive offers
            </p>
          </div>

          <Link
            href="/shop"
            className="text-xs font-bold text-violet-700 hover:text-violet-950 flex items-center gap-1 transition-colors"
          >
            <span>All Highlight Brands</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Top Row: Brand Logo Quick Cards with Sparkle Purple Offer Ribbon (matching top row of screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-3.5 mb-5 sm:mb-6">
          {TOP_BRAND_BADGES.map((b) => (
            <Link
              key={b.id}
              href={b.link}
              className="group/brand block rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Brand Logo Body */}
              <div className="p-4 sm:p-5 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[105px] bg-gradient-to-b from-white to-purple-50/30">
                <span className={`text-base sm:text-lg tracking-tight uppercase transition-transform group-hover/brand:scale-105 duration-300 ${b.logoColor}`}>
                  {b.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium mt-1">
                  {b.category}
                </span>
              </div>

              {/* Bottom Sparkle Purple Discount Ribbon (matching screenshot Min 60% off / Min 50% off) */}
              <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white py-1.5 px-2 text-center relative overflow-hidden">
                {/* Subtle sparkle stars */}
                <div className="absolute top-0.5 left-2 text-amber-200 opacity-80 animate-pulse">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
                <div className="absolute bottom-0.5 right-2 text-amber-200 opacity-80 animate-pulse">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
                
                <span className="text-[11px] sm:text-xs font-black tracking-tight font-sans drop-shadow-xs">
                  {b.offerText}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Row: Wide Contextual Brand Product Showcase Carousel with Arrow Button */}
        <div className="relative group/carousel">
          
          {/* Floating Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-xl border border-zinc-200/80 flex items-center justify-center transition-all hover:scale-110 cursor-pointer hidden sm:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Floating Right Arrow Button (matching circular arrow button in screenshot) */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-xl border border-zinc-200/80 flex items-center justify-center transition-all hover:scale-110 cursor-pointer flex"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-0.5 px-0.5"
          >
            {BRAND_SHOWCASE_BANNERS.map((banner) => (
              <div
                key={banner.id}
                className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0"
              >
                <Link
                  href={banner.link}
                  className="group/card flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Photo & Story Content Area */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden flex flex-col justify-between p-3.5 text-white">
                    
                    {/* Background Product Image */}
                    <Image
                      src={banner.image}
                      alt={banner.imageAlt}
                      fill
                      unoptimized
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for text contrast */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${banner.overlayGradient} pointer-events-none`} />

                    {/* Top Header inside card: Brand Logo Badge + AD tag */}
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white border border-white/20">
                        {banner.brand}
                      </span>
                      <span className="text-[8px] font-mono uppercase bg-black/40 text-zinc-300 px-1 py-0.5 rounded border border-white/10">
                        AD
                      </span>
                    </div>

                    {/* Narrative Headline & Spec */}
                    <div className="relative z-10 space-y-0.5 pr-2">
                      <h3 className="text-xs sm:text-sm font-black tracking-tight text-white drop-shadow-sm line-clamp-1">
                        {banner.headline}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-zinc-200 font-medium line-clamp-2 leading-tight">
                        {banner.subtext}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Action Ribbon (matching screenshot solid purple footer bar) */}
                  <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white px-3.5 py-2 sm:py-2.5 flex items-center justify-between transition-colors">
                    <span className="text-xs sm:text-sm font-black tracking-tight font-sans drop-shadow-xs">
                      {banner.ribbonText}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 flex items-center gap-0.5 group-hover/card:translate-x-1 transition-transform">
                      View Deals <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
