import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { faqs } from '@/app/data/faqs';
import { HelpCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

// Generate static params so Next.js renders all these "Compact Keywords" pages statically at build time.
export function generateStaticParams() {
    return faqs.flatMap((category) =>
        category.questions.map((faq) => ({
            slug: faq.slug,
        }))
    );
}

// Generate specific SEO metadata for each compact keyword page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const allQuestions = faqs.flatMap(cat => cat.questions);
    const faq = allQuestions.find(f => f.slug === params.slug);

    if (!faq) return { title: 'Not Found' };

    return {
        title: `${faq.question} | Quicksilver Airport Shuttle`,
        description: faq.answer.substring(0, 160),
    };
}

export default function SingleFAQPage({ params }: { params: { slug: string } }) {
    const category = faqs.find(cat => cat.questions.some(q => q.slug === params.slug));
    const faq = category?.questions.find(f => f.slug === params.slug);

    if (!category || !faq) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="container-custom">
                <FadeIn>
                    <Link href="/faq" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-10 font-black uppercase tracking-widest text-xs">
                        <ChevronLeft size={16} />
                        Back to Knowledge Base
                    </Link>

                    <div className="bg-white rounded-[50px] p-10 md:p-20 shadow-2xl border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                            <HelpCircle size={200} />
                        </div>

                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] mb-10 uppercase tracking-[0.2em] border border-blue-100 relative z-10">
                            <HelpCircle size={14} />
                            {category.category}
                        </div>

                        <h1 className="text-3xl md:text-6xl font-display font-black text-[#0c1d37] mb-10 leading-[1.1] tracking-tight relative z-10 uppercase">
                            {faq.question}
                        </h1>

                        {/* SIGNAL 2: Build Author & Brand Authority (E-A-T for AI) */}
                        <div className="flex items-center gap-5 mb-12 pb-10 border-b border-slate-100 relative z-10">
                            <div className="w-14 h-14 bg-[#0c1d37] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3">
                                QS
                            </div>
                            <div>
                                <p className="font-black text-[#0c1d37] uppercase tracking-tight text-lg">Quicksilver Dispatch Team</p>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Verified Local Logistics Experts</p>
                            </div>
                        </div>

                        <div className="prose prose-xl prose-slate max-w-none relative z-10">
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
                                {faq.answer}
                            </p>
                        </div>

                        {/* SIGNAL 3 & 4: Structure for Scanners & Make Data Explicit */}
                        <div className="mt-10 bg-slate-50 p-8 md:p-12 rounded-[40px] border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <HelpCircle size={120} />
                            </div>

                            <h3 className="font-display font-black text-[#0c1d37] mb-6 uppercase tracking-tight text-xl">Quick Reference Guide</h3>
                            <ul className="grid md:grid-cols-2 gap-6 text-[#0c1d37]/80 font-medium relative z-10">
                                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-50 shadow-sm">
                                    <span className="text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                                    <div>
                                        <strong className="block text-blue-600 mb-1">24/7 Availability</strong>
                                        <p className="text-sm">Active dispatch in Kansas City & suburbs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-50 shadow-sm">
                                    <span className="text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                                    <div>
                                        <strong className="block text-blue-600 mb-1">MCI Pickup Zone</strong>
                                        <p className="text-sm">Commercial lane pillar #14 - New Terminal.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-50 shadow-sm">
                                    <span className="text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                                    <div>
                                        <strong className="block text-blue-600 mb-1">Fleet Capacity</strong>
                                        <p className="text-sm">Sedans (3), SUVs (6), Vans (14 seats).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-50 shadow-sm">
                                    <span className="text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                                    <div>
                                        <strong className="block text-blue-600 mb-1">Flight Tracking</strong>
                                        <p className="text-sm">Automatic arrival time syncing via FAA.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {faq.linkUrl && faq.linkText && (
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <Link
                                    href={faq.linkUrl}
                                    className="btn-primary inline-flex items-center gap-2 py-4 px-8 text-lg hover:scale-105 transition-transform"
                                >
                                    {faq.linkText} <span className="text-xl leading-none">&rarr;</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="mt-16 bg-[#0c1d37] text-white rounded-[40px] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden max-w-4xl mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>

                        <h2 className="mb-6 font-display text-4xl md:text-5xl font-black relative z-10 uppercase tracking-tight">Start Your Journey</h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto relative z-10 font-medium">
                            Now that your question is answered, experience the premier Quicksilver shuttle service firsthand.
                        </p>
                        <Link href="/reservation" className="bg-blue-600 text-white font-black py-6 px-16 text-xl inline-flex items-center gap-4 hover:bg-blue-700 transition-all relative z-10 shadow-xl rounded-2xl group/btn hover:scale-105 border-none">
                            Book Your Ride Now
                            <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </FadeIn>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }],
                            "author": {
                                "@type": "Organization",
                                "name": "Quicksilver Fleet & Dispatch Team",
                                "url": "https://www.goquicksilver.com/about"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Quicksilver Airport Shuttle",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.goquicksilver.com/Home%20page%20images/Airport-Shuttle-Services.webp"
                                }
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.goquicksilver.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Knowledge Base Hub",
                                    "item": "https://www.goquicksilver.com/faq"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": faq.question,
                                    "item": `https://www.goquicksilver.com/faq/${faq.slug}`
                                }
                            ]
                        }
                    ])
                }}
            />
        </main>
    );
}
