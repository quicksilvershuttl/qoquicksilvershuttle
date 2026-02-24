'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
    title?: string;
}

export default function FAQAccordion({ faqs, title }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom max-w-4xl mx-auto">
                {title && (
                    <div className="text-center mb-16">
                        <h2 className="mb-6 font-display text-4xl md:text-5xl text-[#0c1d37] tracking-tight font-black uppercase">
                            {title}
                        </h2>
                    </div>
                )}
                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="bg-slate-50 border border-white rounded-[32px] shadow-sm overflow-hidden ring-1 ring-blue-600/5">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-7 text-left cursor-pointer transition-all duration-300 hover:bg-blue-50 min-h-[52px]"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-bold text-[#0c1d37] text-lg font-display">
                                        {faq.q}
                                    </span>
                                    <div
                                        className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    >
                                        <ChevronDown size={28} />
                                    </div>
                                </button>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-7 pb-7 text-slate-600 leading-relaxed border-t border-slate-100 pt-5 bg-white font-medium">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
