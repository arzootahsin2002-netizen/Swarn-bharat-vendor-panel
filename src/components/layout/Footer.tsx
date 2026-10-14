'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Mail,
  CreditCard,
  Lock,
  Check
} from 'lucide-react';
import { useApp } from '@/lib/store';

export function Footer() {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    showToast({
      title: 'Welcome to Swarn Bharat Privé',
      message: 'Here is your 15% discount code: WELCOME15',
      type: 'success'
    });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-zinc-900">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-amber-400 flex items-center justify-center shrink-0 border border-zinc-800">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free Express Shipping</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Complimentary on orders above ₹1,999</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-amber-400 flex items-center justify-center shrink-0 border border-zinc-800">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">7-Day Easy Returns</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Doorstep pickup & instant refunds</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-amber-400 flex items-center justify-center shrink-0 border border-zinc-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Authentic Luxury</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Ethically sourced European fabrics</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-amber-400 flex items-center justify-center shrink-0 border border-zinc-800">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">256-Bit Encrypted</h4>
              <p className="text-xs text-zinc-400 mt-0.5">UPI, Cards & Razorpay secured</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white text-zinc-950 rounded-xl flex items-center justify-center font-bold text-base">
                Æ
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-serif">
                SWARN BHARAT
              </span>
            </Link>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Combining timeless modern silhouettes with uncompromising fabric architecture. Designed in Bengaluru, crafted across artisanal mills in India & Europe.
            </p>

            <div className="pt-2">
              <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Join the Private Circle
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-emerald-400 text-xs">
                  <Check className="w-4 h-4" /> You are subscribed! Enjoy code: <strong className="font-mono">WELCOME15</strong>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      suppressHydrationWarning={true}
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl text-xs text-white placeholder:text-zinc-500 outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    suppressHydrationWarning={true}
                    className="px-4 py-2.5 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Join <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Shop Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Catalog</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/shop?category=Men" className="hover:text-white transition-colors">Men&apos;s Collection</Link></li>
              <li><Link href="/shop?category=Women" className="hover:text-white transition-colors">Women&apos;s Line</Link></li>
              <li><Link href="/shop?subcategory=Hoodies+%26+Sweatshirts" className="hover:text-white transition-colors">Heavyweight Hoodies</Link></li>
              <li><Link href="/shop?subcategory=Shirts" className="hover:text-white transition-colors">Camp Collar Linen Shirts</Link></li>
              <li><Link href="/shop?subcategory=Trousers+%26+Pants" className="hover:text-white transition-colors">Pleated Wide Trousers</Link></li>
              <li><Link href="/shop?subcategory=Jackets+%26+Coats" className="hover:text-white transition-colors">Wool Overcoats & Shells</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Client Care</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/account?tab=orders" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Shipping & Delivery Rates</Link></li>
              <li><Link href="/faq#returns" className="hover:text-white transition-colors">7-Day Doorstep Returns</Link></li>
              <li><Link href="/faq#sizing" className="hover:text-white transition-colors">Comprehensive Size Guide</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Concierge</Link></li>
              <li><Link href="/vendor/login" className="hover:text-amber-400 font-bold text-amber-500/90 transition-colors">Merchant / Vendor Hub</Link></li>
              <li><Link href="/admin" className="hover:text-amber-400 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Brand</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link href="/about#fabrics" className="hover:text-white transition-colors">Sustainable Fabric Mills</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Studio Locations</Link></li>
              <li><Link href="/faq#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & payment methods */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 SWARN BHARAT & CO. All rights reserved.</p>

          <div className="flex items-center gap-3 text-zinc-400">
            <span className="flex items-center gap-1 text-[11px] bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" /> UPI / Cards / COD
            </span>
            <div className="flex items-center space-x-2">
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
