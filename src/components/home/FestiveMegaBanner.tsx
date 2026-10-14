'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, Zap, Flame, Gift } from 'lucide-react';

export function FestiveMegaBanner() {
  // Live festive countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4 sm:py-6 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop?sale=true"
          className="group block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          {/* Main Panoramic Background Canvas */}
          <div className="relative min-h-[170px] sm:min-h-[210px] md:min-h-[230px] lg:min-h-[250px] bg-gradient-to-r from-[#180438] via-[#350b78] to-[#1a0540] flex items-center overflow-hidden text-white">
            
            {/* Ambient Background Glow & Light Streaks */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Central radiant light ray */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-32 bg-gradient-to-r from-violet-500/20 via-pink-500/25 to-transparent rotate-12 blur-2xl" />
              {/* Golden corner ambient flare */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

              {/* Decorative Hanging Golden Fairy Lights & Lanterns Pattern along the top */}
              <div className="absolute top-0 inset-x-0 h-10 sm:h-14 opacity-80 pointer-events-none overflow-hidden">
                {/* Dotted light string */}
                <div className="w-full h-2 border-b-2 border-dashed border-amber-300/40" />
                {/* Hanging glowing lantern bulbs */}
                <div className="flex justify-between px-6 sm:px-12 -mt-1 text-amber-300">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                      <div className="w-[1px] h-3 sm:h-5 bg-gradient-to-b from-amber-300 to-amber-400" />
                      <div className="w-2.5 h-3.5 sm:w-3 sm:h-4.5 rounded-full bg-gradient-to-b from-yellow-200 via-amber-400 to-orange-500 shadow-[0_0_8px_#fde047]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Flex Grid */}
            <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 py-5 sm:py-7 flex items-center justify-between gap-3 sm:gap-6">
              
              {/* Left Side: Circular Golden Festival Seal & Big Typography */}
              <div className="flex items-center gap-3.5 sm:gap-6 md:gap-8 flex-1 min-w-0">
                
                {/* Golden Medallion Seal (matching screenshot circular badge with ribbon) */}
                <div className="relative shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-500 p-1 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                    <div className="w-full h-full rounded-full bg-[#1b3a8a] text-yellow-300 flex flex-col items-center justify-center text-center font-black leading-none border-2 border-dashed border-amber-300/90 relative">
                      
                      <span className="text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-amber-200 font-extrabold">
                        THE BIG
                      </span>
                      
                      {/* Ribbon banner overlay across center of medallion */}
                      <div className="w-[115%] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-zinc-950 font-black text-[9px] sm:text-[12px] md:text-[14px] py-0.5 my-0.5 shadow-md uppercase tracking-tight transform -rotate-2">
                        SWARN
                      </div>
                      
                      <span className="text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-amber-300 font-extrabold">
                        DAYS
                      </span>

                    </div>
                  </div>
                </div>

                {/* Big Festival Headlines */}
                <div className="space-y-0.5 sm:space-y-1 min-w-0">
                  
                  {/* Top Eyebrow Tag */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/90 text-white text-[9px] sm:text-[11px] font-black uppercase tracking-wider shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Live Now
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-amber-300 font-bold">
                      <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      Mega Festive Carnivals
                    </span>
                  </div>

                  {/* Primary Massive Headlines */}
                  <div className="leading-tight">
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight drop-shadow-md">
                      SWARN FESTIVAL DAYS
                    </h2>
                    <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans text-yellow-300 tracking-tight drop-shadow-[0_2px_12px_rgba(253,224,71,0.5)]">
                      LIVE NOW
                    </div>
                  </div>

                  {/* Offer Subtext & Countdown Timer */}
                  <div className="hidden sm:flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-200">
                    <span className="font-semibold text-amber-200">
                      Up to 80% Off on 10,000+ Items
                    </span>
                    <span className="text-zinc-500">•</span>
                    <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-lg border border-white/10 font-mono text-[11px] text-white">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>Ends In:</span>
                      <strong className="text-yellow-300">
                        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                      </strong>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Side: Celebratory Model Visual & Action Button */}
              <div className="relative shrink-0 flex items-center gap-3 sm:gap-6">
                
                {/* Celebratory Model Image */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                      alt="Celebratory Festive Shopping Model"
                      fill
                      unoptimized
                      className="object-cover object-top mask-image-gradient"
                    />
                    {/* Soft gradient blend into purple background */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#2f0868]/40" />
                  </div>
                </div>

                {/* White Floating Action Pill Button (matching screenshot white pill with arrow) */}
                <div className="hidden sm:flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-violet-700 shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-300 group-hover:text-zinc-950 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Festive Beaded Bulb Marquee Strip (matching screenshot bottom marquee border) */}
            <div className="absolute bottom-0 inset-x-0 h-3 sm:h-3.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 border-t border-amber-300/80 shadow-[0_-2px_10px_rgba(251,191,36,0.5)] z-20 overflow-hidden flex items-center">
              <div className="w-full flex justify-between px-2 sm:px-4">
                {Array.from({ length: 42 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white shadow-[0_0_4px_#ffffff] shrink-0"
                  />
                ))}
              </div>
            </div>

          </div>
        </Link>
      </div>
    </section>
  );
}
