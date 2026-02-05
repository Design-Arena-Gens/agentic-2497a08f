import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Jhanak Gautam | Senior Transformer Assembly Technician",
  description:
    "Portfolio resume for Jhanak Gautam, Senior Transformer Assembly Technician with over 15 years of experience in power transformer manufacturing.",
  openGraph: {
    title: "Jhanak Gautam | Senior Transformer Assembly Technician",
    description:
      "Over 15 years of expertise in transformer assembly, oil processing, and testing at leading Saudi Arabian manufacturers.",
    url: "https://agentic-2497a08f.vercel.app",
    siteName: "Jhanak Gautam",
    locale: "en_US",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhanak Gautam | Senior Transformer Assembly Technician",
    description:
      "Experienced Senior Transformer Assembly Technician specializing in 100 MVA, 230 kV transformers.",
    creator: "@jhanak_gautam"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-midnight-900 text-slate-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
