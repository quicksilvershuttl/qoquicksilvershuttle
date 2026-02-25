import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Phone, Star, Shield, DollarSign, Award, ArrowRight, Clock
} from 'lucide-react';
import HeroImage from './components/HeroImage';
import BackgroundOverlay from './components/BackgroundOverlay';
import TrustAvatars from './components/TrustAvatars';

// Dynamic imports for sections below the fold to improve TBT (Total Blocking Time)
const Welcome = dynamic(() => import('./components/home/Welcome'));
const TrustSection = dynamic(() => import('./components/home/TrustSection'));
const FleetShowcase = dynamic(() => import('./components/home/FleetShowcase'));
const HowToBook = dynamic(() => import('./components/home/HowToBook'));
const UniversityDeals = dynamic(() => import('./components/home/UniversityDeals'));
const CorporateSection = dynamic(() => import('./components/home/CorporateSection'));
const GroupSection = dynamic(() => import('./components/home/GroupSection'));
const Guarantee = dynamic(() => import('./components/home/Guarantee'));
const PricingTable = dynamic(() => import('./components/home/PricingTable'));
const Testimonials = dynamic(() => import('./components/home/Testimonials'));
const FAQSection = dynamic(() => import('./components/home/FAQSection'));
const FinalCTA = dynamic(() => import('./components/home/FinalCTA'));

export const metadata: Metadata = {
  title: 'Airport Shuttle Service | Airport Car service | Quicksilver Airport car',
  description: 'Quicksilver provides premium airport shuttle and private car services in the Kansas City metro. Professional chauffeurs and flat-rate pricing since 1982.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Designed using the "Perfect Hero Section" framework
          Optimized for LCP (Largest Contentful Paint)
       ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pb-12">
        <div className="absolute inset-0 z-0">
          <BackgroundOverlay />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2463eb]/8 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

            {/* LEFT COLUMN: Value Proposition */}
            <div className="animate-fade-in text-white flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">SINCE 1982</p>
              </div>

              <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                Quicksilver <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                  Airport Shuttle & Car Service
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0 px-4 sm:px-0">
                Kansas City Airport Shuttle & Airport Car Services.
                Reliable, fixed-rate transportation since 1982.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12 px-2 sm:px-0">
                <Link
                  href="/fare-quote"
                  className="btn btn-cta text-base sm:text-lg px-8 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center rounded-2xl sm:rounded-full"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
                <a
                  href="tel:913-262-0905"
                  className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-2xl sm:rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                >
                  <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                  <span className="font-bold tracking-wide text-sm sm:text-base">913-262-0905</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                <TrustAvatars />
                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={14} />
                    ))}
                    <span className="text-white text-sm ml-1 font-bold">4.8/5</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Rick, Scott & 4,000+ riders</strong> trust Quicksilver
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                {[
                  { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                  { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                  { label: 'Fixed Pricing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                  { label: 'TripAdvisor ★', icon: <Award size={16} className="text-amber-500" /> },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Hero Imagery (No fade-in to improve LCP) */}
            <div className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
              <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                  <HeroImage
                    src="/Home page images/Saloon Class.png"
                    alt="Quicksilver premium business sedan for Kansas City airport transfers"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* Modular sections loaded dynamically for performance */}
      <Welcome />
      <TrustSection />
      <FleetShowcase />
      <HowToBook />
      <UniversityDeals />
      <CorporateSection />
      <GroupSection />
      <Guarantee />
      <PricingTable />
      <Testimonials />
      <FAQSection />
      <FinalCTA />

      {/* FAQ Schema for AI Overviews (SGE) & Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does an airport shuttle in Kansas City cost in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quicksilver Airport Shuttle offers fixed 2026 rates starting from $35 for economy transfers, $55 for business class sedans, and $75 for premium SUVs to and from MCI Airport."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book an airport shuttle to MCI in Kansas City?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can seamlessly book your Quicksilver airport shuttle or car service online through our digital reservation system or call our 24/7 dispatch at 913-262-0905."
                }
              },
              {
                "@type": "Question",
                "name": "Are there discounted university shuttle rates in Kansas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Quicksilver offers specialized, direct shuttle routes for university students across Kansas and Missouri at fixed rates, including Baker University, Benedictine College, and Bethany College."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if my flight is delayed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our team monitors live flight telemetry for all MCI arrivals. If your flight is delayed, your chauffeur will adjust their schedule to meet you exactly when you land at no extra cost."
                }
              },
              {
                "@type": "Question",
                "name": "Does Quicksilver provide pet-friendly airport transportation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Quicksilver offers pet-friendly airport shuttle services across Kansas City. Pets must be secured in a travel carrier for safety during transit."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
