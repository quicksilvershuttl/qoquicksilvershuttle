import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LayoutShell from "./components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goquicksilver.com'),
  title: {
    default: "Kansas City Airport Shuttle | Quicksilver Car Service",
    template: "%s | Quicksilver Shuttle"
  },
  icons: {
    icon: '/favicon.svg',
  },
  description: "Quicksilver provides premium airport shuttle and car services in the Kansas City metropolitan area. Reliable, flat-rate transportation with professional chauffeurs since 1982.",
  keywords: "Kansas City airport shuttle, MCI airport transportation, airport car service, Kansas City shuttle, private car service",
  openGraph: {
    title: "Kansas City Airport Shuttle | Quicksilver Car Service",
    description: "Quicksilver provides premium airport shuttle and car services in the Kansas City metropolitan area. Reliable, flat-rate transportation with professional chauffeurs since 1982.",
    type: "website",
    locale: "en_US",
    siteName: "Quicksilver Airport Shuttle"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://randomuser.me" />
        <style id="critical-path-css">{`
          :root {
            --primary: 222 47% 11%;
            --primary-dark: 222 47% 7%;
            --royal: #2463eb;
            --orange-cta: #ea580c;
          }
          body { background-color: #0c1d3d; color: #ffffff; }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
          }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        `}</style>
        {/* LocalBusiness Schema for Knowledge Panel & Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Quicksilver Airport Shuttle",
              "alternateName": "Quicksilver Kansas City",
              "image": "https://www.goquicksilver.com/Home%20page%20images/Airport-Shuttle-Services.webp",
              "@id": "https://www.goquicksilver.com",
              "url": "https://www.goquicksilver.com",
              "telephone": "+19132620905",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "MCI Airport Zone",
                "addressLocality": "Kansas City",
                "addressRegion": "MO",
                "postalCode": "64153",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.2968,
                "longitude": -94.7139
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/quicksilverairportshuttle/",
                "https://www.google.com/maps?cid=5710892298717846459"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "342"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LayoutShell
          navigation={<Navigation />}
          footer={<Footer />}
        >
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
