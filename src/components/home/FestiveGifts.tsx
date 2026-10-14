'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Gift,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Heart,
  Briefcase,
  Users,
  Compass
} from 'lucide-react';

export interface GiftCategory {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  startingPrice: string;
  image: string;
  goldTicketGradient: string;
  pedestalColor: string;
  textColor: string;
  link: string;
}

export const FESTIVE_GIFT_CATEGORIES: GiftCategory[] = [
  {
    id: 'family-friends',
    title: 'Family & friends',
    subtitle: 'Bespoke hampers, gourmet sweets & silk wear',
    badge: 'Most Popular',
    startingPrice: 'Starting ₹799',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
    goldTicketGradient: 'from-amber-200 via-yellow-100 to-amber-300',
    pedestalColor: 'from-[#380e68] via-[#541696] to-[#28084d]',
    textColor: 'text-[#1e3a8a]',
    link: '/shop?category=Fashion'
  },
  {
    id: 'gifting-ideas',
    title: 'Gifting ideas',
    subtitle: 'Trending festive curations, perfumes & combos',
    badge: 'Curated Picks',
    startingPrice: 'Under ₹1,499 & ₹2,999',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop',
    goldTicketGradient: 'from-amber-100 via-yellow-50 to-amber-200',
    pedestalColor: 'from-[#2b0857] via-[#451087] to-[#1f0540]',
    textColor: 'text-[#1e3a8a]',
    link: '/shop?category=Beauty'
  },
  {
    id: 'corporate-gifting',
    title: 'Corporate gifting',
    subtitle: 'Executive brass sets, leather & custom logo branding',
    badge: 'Bulk Savings',
    startingPrice: 'Special GST Invoicing',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop',
    goldTicketGradient: 'from-amber-200 via-yellow-100 to-amber-300',
    pedestalColor: 'from-[#3a0a6d] via-[#59149f] to-[#250549]',
    textColor: 'text-[#1e3a8a]',
    link: '/shop?category=Electronics'
  },
  {
    id: 'gifts-for-her',
    title: 'Gifts for Her',
    subtitle: 'Pure mulberry silk scarves, fine jewellery & sets',
    badge: 'Luxury Edit',
    startingPrice: 'Up to 50% Off',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop',
    goldTicketGradient: 'from-amber-100 via-yellow-50 to-amber-200',
    pedestalColor: 'from-[#420a59] via-[#651287] to-[#2d053d]',
    textColor: 'text-[#1e3a8a]',
    link: '/shop?category=Fashion'
  },
  {
    id: 'gifts-for-him',
    title: 'Gifts for Him',
    subtitle: 'Chronograph timepieces, grooming kits & tech',
    badge: 'Bestseller',
    startingPrice: 'Starting ₹1,199',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    goldTicketGradient: 'from-amber-200 via-yellow-100 to-amber-300',
    pedestalColor: 'from-[#2e095a] via-[#4a108e] to-[#210542]',
    textColor: 'text-[#1e3a8a]',
    link: '/shop?category=Electronics'
  }
];

export function FestiveGifts() {
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
    <section className="py-6 sm:py-8 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between gap-4 mb-5 sm:mb-7">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 font-serif tracking-tight flex items-center gap-2">
                Festive gifts
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200/60">
                <Gift className="w-3 h-3 text-amber-600" /> Season of Giving
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              Curated festive gift boxes, family hampers & corporate collections ready for celebration
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop?category=Fashion"
              className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 transition-colors pr-1"
            >
              <span>Explore All Gifts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

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

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Scroll Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 pt-1 px-1"
          >
            {FESTIVE_GIFT_CATEGORIES.map((gift) => (
              <div
                key={gift.id}
                className="w-[260px] sm:w-[290px] md:w-[320px] shrink-0"
              >
                <Link
                  href={gift.link}
                  className="group/card block relative h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Top: Golden Plaque / Ticket (matching screenshot gold ticket design) */}
                  <div className="relative z-20 mx-2 sm:mx-3">
                    
                    {/* Golden Ticket Container with notched ticket borders & golden gradient */}
                    <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-400 shadow-lg group-hover/card:shadow-[0_8px_25px_rgba(251,191,36,0.45)] transition-all">
                      
                      {/* Ticket Inner Surface */}
                      <div className={`relative rounded-xl bg-gradient-to-b ${gift.goldTicketGradient} px-4 py-5 sm:py-6 border border-amber-300/80 overflow-hidden shadow-inner flex flex-col justify-between min-h-[140px] sm:min-h-[155px]`}>
                        
                        {/* Shimmer light flare */}
                        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/40 rounded-full blur-xl pointer-events-none group-hover/card:scale-150 transition-transform duration-700" />
                        
                        {/* Ticket Edge Notches */}
                        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-zinc-900/10 border border-amber-400/50" />
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-zinc-900/10 border border-amber-400/50" />

                        {/* Sparkle decorative star */}
                        <div className="absolute top-2 right-3 text-amber-500 animate-pulse">
                          <Sparkles className="w-4 h-4 fill-amber-400" />
                        </div>

                        {/* Main Title Inside Ticket (bold royal blue font matching screenshot) */}
                        <div className="pr-4 z-10">
                          <h3 className={`text-xl sm:text-2xl font-black tracking-tight leading-[1.15] ${gift.textColor} drop-shadow-2xs`}>
                            {gift.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-amber-900/80 font-medium mt-1 line-clamp-1">
                            {gift.subtitle}
                          </p>
                        </div>

                        {/* Bottom Row: 3D Gift Box on Left & Circular Arrow Pill on Right */}
                        <div className="flex items-end justify-between gap-2 mt-3 z-10">
                          
                          {/* 3D Wrapped Gift Box Icon / Graphic (matching screenshot magenta gift box) */}
                          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-md group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform duration-300">
                            {/* Realistic Festive Gift Box */}
                            <div className="w-full h-full rounded-lg bg-gradient-to-tr from-rose-700 via-fuchsia-600 to-pink-500 p-0.5 shadow-md flex items-center justify-center relative overflow-hidden">
                              {/* Golden Cross Ribbons */}
                              <div className="absolute inset-y-0 w-2 bg-gradient-to-b from-yellow-200 via-amber-300 to-yellow-400 shadow-xs" />
                              <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 shadow-xs" />
                              {/* Golden Bow Tie on top */}
                              <div className="absolute -top-1 w-3.5 h-2 bg-amber-300 rounded-full border border-yellow-200 shadow-xs transform rotate-12" />
                              <Gift className="w-5 h-5 text-white/95 relative z-10" />
                            </div>
                          </div>

                          {/* Action Arrow Pill Button inside ticket (matching screenshot white pill with blue arrow) */}
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-blue-700 shadow-md flex items-center justify-center border border-amber-200/60 group-hover/card:scale-110 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all">
                            <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] group-hover/card:translate-x-0.5 transition-transform" />
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Bottom: Royal Velvet Draped Pedestal (matching screenshot royal purple velvet cloth with tassels) */}
                  <div className="relative -mt-4 z-10 pt-2">
                    
                    {/* Draped Purple Velvet Fabric Shape */}
                    <div className={`relative rounded-b-2xl bg-gradient-to-b ${gift.pedestalColor} px-4 pt-5 pb-4 shadow-xl border-t-2 border-amber-400/40 text-white overflow-hidden`}>
                      
                      {/* Velvet Fabric Folds & Gold Glitter Texture */}
                      <div className="absolute inset-0 bg-[radial-gradient(#fde047_1px,transparent_1px)] bg-[size:16px_16px] opacity-25 pointer-events-none" />
                      
                      {/* Draped Velvet Shadow Folds */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                      {/* Golden Hanging Tassels along the bottom edge */}
                      <div className="flex justify-between px-3 -mb-1 opacity-90">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_4px_#fde047]" />
                            <div className="w-[1.5px] h-3 bg-gradient-to-b from-amber-300 to-amber-500" />
                          </div>
                        ))}
                      </div>

                      {/* Pedestal Caption & Price Hook */}
                      <div className="flex items-center justify-between text-xs pt-1.5 border-t border-amber-400/20">
                        <span className="font-extrabold text-amber-300 text-[11px] sm:text-xs tracking-wide">
                          {gift.startingPrice}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider group-hover/card:text-white">
                          View Range →
                        </span>
                      </div>

                    </div>

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
