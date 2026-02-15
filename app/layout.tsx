import type { Metadata } from "next";
import "./globals.css";
import Navigation, { Footer } from "./components/Navigation";

export const metadata: Metadata = {
  title: "Quicksilver Airport Shuttle | Kansas City Airport Car Service",
  description: "Premium airport shuttle and car service to Kansas City International Airport (MCI). Serving Kansas City metro since 1982. 24/7 service, lowest rates guaranteed. Call (913) 262-0905",
  keywords: "Kansas City airport shuttle, MCI airport transportation, airport car service, Kansas City shuttle, private car service",
  openGraph: {
    title: "Quicksilver Airport Shuttle | Kansas City Airport Car Service",
    description: "Premium airport shuttle and car service to Kansas City International Airport (MCI). 24/7 service since 1982.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
