import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Chunab | Nepal Election Information Portal | Candidates, Agendas & Live Vote Count",
  description: "Stay updated with the latest election information in Nepal. Explore candidate profiles, bios, agendas, and real-time vote counts across all regions. Your trusted source for transparent and accessible election updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}
