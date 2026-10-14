'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export interface SpotlightItem {
  id: string;
  brand: string;
  brandSubtext?: string;
  headline: string;
  tagline: string;
  offerBadge: string;
  image: string;
  imageAlt: string;
  bgColor: string;
  ribbonColor: string;
  textColor?: string;
  link: string;
}

export const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    id: 'loreal',
    brand: "L'ORÉAL PARIS",
    brandSubtext: 'PARIS',
    headline: '72H Oil-Free Scalp',
    tagline: '& Hydrated Soft Hair',
    offerBadge: 'Up to 30% Off',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    imageAlt: "L'Oreal Scalp & Hair Hydration",
    bgColor: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-pink-50',
    ribbonColor: 'bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600',
    link: '/shop?category=Beauty'
  },
  {
    id: 'mivi',
    brand: 'MIVI',
    brandSubtext: 'AUDIO',
    headline: 'More bass for less',
    tagline: 'Fort Sonic 900 with 900 Watts Subwoofer',
    offerBadge: 'From ₹1,199',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Mivi Fort Sonic Soundbar',
    bgColor: 'bg-gradient-to-br from-[#12072b] via-[#241147] to-[#3a156e]',
    ribbonColor: 'bg-gradient-to-r from-violet-600 to-purple-600',
    textColor: 'text-white',
    link: '/shop?category=Electronics'
  },
  {
    id: 'fireboltt',
    brand: 'FIRE-BOLTT',
    brandSubtext: 'SMARTWATCHES',
    headline: 'Hurricane Air',
    tagline: '1.43" AMOLED BT Calling & Sleek Dial',
    offerBadge: 'From ₹999',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Fire-Boltt Hurricane Air Smartwatch',
    bgColor: 'bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]',
    ribbonColor: 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600',
    link: '/shop?category=Electronics'
  },
  {
    id: 'littleangel',
    brand: 'Little Angel',
    brandSubtext: 'BABY ESSENTIALS',
    headline: 'Every baby deserves',
    tagline: 'a gentle Little Angel touch',
    offerBadge: 'Up to 60% Off',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Little Angel Soft Baby Care',
    bgColor: 'bg-gradient-to-br from-blue-50 via-sky-50 to-amber-50',
    ribbonColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600',
    link: '/shop?category=Toys%20%26%20Baby'
  },
  {
    id: 'nivea',
    brand: 'NIVEA',
    brandSubtext: 'BODY & FACE',
    headline: "World's No.1",
    tagline: 'Deep Hydration Skin Care Brand',
    offerBadge: 'Up to 50% Off',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Nivea Soft Skin Care',
    bgColor: 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50',
    ribbonColor: 'bg-gradient-to-r from-violet-600 to-purple-600',
    link: '/shop?category=Beauty'
  },
  {
    id: 'swarn',
    brand: 'SWARN BHARAT',
    brandSubtext: 'HERITAGE ATELIER',
    headline: 'Pure Mulberry Silk',
    tagline: '500 GSM Heavyweight Luxe Knits',
    offerBadge: 'Flat 40% Off',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Swarn Bharat Heritage Apparel',
    bgColor: 'bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857]',
    ribbonColor: 'bg-gradient-to-r from-amber-600 to-amber-500',
    textColor: 'text-white',
    link: '/shop?category=Fashion'
  },
  {
    id: 'sony',
    brand: 'SONY',
    brandSubtext: 'HI-RES AUDIO',
    headline: 'Studio Acoustics',
    tagline: 'WF-1000XM5 Dual Noise Sensor ANC',
    offerBadge: 'From ₹3,499',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Sony Noise Cancelling Headphones',
    bgColor: 'bg-gradient-to-br from-slate-900 via-neutral-900 to-zinc-900',
    ribbonColor: 'bg-gradient-to-r from-violet-600 to-indigo-600',
    textColor: 'text-white',
    link: '/shop?category=Electronics'
  },
  {
    id: 'puma',
    brand: 'PUMA',
    brandSubtext: 'NITRO SERIES',
    headline: 'Zero Fatigue Run',
    tagline: 'Velocity Nitro 3 Cushioning',
    offerBadge: 'Up to 60% Off',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Puma Velocity Nitro Athletic Shoes',
    bgColor: 'bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b]',
    ribbonColor: 'bg-gradient-to-r from-rose-600 via-red-600 to-orange-600',
    textColor: 'text-white',
    link: '/shop?category=Sports'
  }
];

export function InTheSpotlight() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const current = scrollContainerRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll);
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 font-serif tracking-tight">
                In The Spotlight
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 text-[11px] font-bold border border-violet-200/60">
                <Sparkles className="w-3 h-3 text-violet-600" /> Featured Brands
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              Handpicked brand highlights with exclusive season discounts & instant savings
            </p>
          </div>

          {/* Action Links & Header Navigation Controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="text-xs font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1 transition-colors pr-1"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Desktop Prev/Next Buttons */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-zinc-200">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'text-zinc-800 hover:bg-zinc-100 hover:scale-105 cursor-pointer shadow-2xs'
                    : 'text-zinc-300 cursor-not-allowed bg-zinc-50'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'text-zinc-800 hover:bg-zinc-100 hover:scale-105 cursor-pointer shadow-2xs'
                    : 'text-zinc-300 cursor-not-allowed bg-zinc-50'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container with Floating Edge Navigation Arrow */}
        <div className="relative group">
          
          {/* Left Floating Button (visible on hover/active) */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-xl border border-zinc-200/80 flex items-center justify-center transition-all hover:scale-110 cursor-pointer hidden sm:flex"
              aria-label="Previous spotlights"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Floating Button (matching screenshot circular arrow) */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-xl border border-zinc-200/80 flex items-center justify-center transition-all hover:scale-110 cursor-pointer flex"
              aria-label="Next spotlights"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1 px-0.5"
          >
            {SPOTLIGHT_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-[230px] sm:w-[260px] md:w-[275px] shrink-0"
              >
                <Link
                  href={item.link}
                  className="group/card flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-200/85 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card Visual Content Area */}
                  <div className={`relative ${item.bgColor} p-3.5 sm:p-4 flex-1 flex flex-col justify-between overflow-hidden min-h-[190px] sm:min-h-[210px]`}>
                    
                    {/* Top Header: Brand Name + AD Tag */}
                    <div className="flex items-start justify-between gap-2 z-10">
                      <div className="space-y-0.5">
                        <span className={`text-xs sm:text-sm font-black tracking-tight uppercase font-sans ${item.textColor ? item.textColor : 'text-zinc-900'}`}>
                          {item.brand}
                        </span>
                        {item.brandSubtext && (
                          <span className={`block text-[9px] uppercase tracking-wider font-semibold ${item.textColor ? 'text-zinc-300' : 'text-zinc-400'}`}>
                            {item.brandSubtext}
                          </span>
                        )}
                      </div>

                      <span className="text-[8px] uppercase font-mono tracking-wider bg-black/30 text-white/90 px-1 py-0.5 rounded border border-white/10 shrink-0">
                        AD
                      </span>
                    </div>

                    {/* Headline & Value Proposition Text */}
                    <div className="my-2 z-10 space-y-0.5">
                      <h3 className={`text-sm sm:text-base font-black tracking-tight leading-tight ${item.textColor ? item.textColor : 'text-zinc-950'}`}>
                        {item.headline}
                      </h3>
                      <p className={`text-[10px] sm:text-[11px] font-medium line-clamp-2 ${item.textColor ? 'text-zinc-200' : 'text-zinc-600'}`}>
                        {item.tagline}
                      </p>
                    </div>

                    {/* Product Photo Showcase */}
                    <div className="relative w-full h-24 sm:h-28 mt-1 flex items-center justify-center">
                      <div className="relative w-full h-full group-hover/card:scale-105 transition-transform duration-500 drop-shadow-md">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          unoptimized
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Bottom Offer Ribbon Banner (matching screenshot solid purple / colored footer) */}
                  <div className={`${item.ribbonColor} text-white px-3.5 py-2 sm:py-2.5 flex items-center justify-between transition-colors`}>
                    <span className="text-xs sm:text-sm font-black tracking-tight font-sans drop-shadow-xs">
                      {item.offerBadge}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 flex items-center gap-0.5 group-hover/card:translate-x-1 transition-transform">
                      Shop Now <ArrowRight className="w-3 h-3" />
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
