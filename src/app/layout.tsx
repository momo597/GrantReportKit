import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GrantReportKit — Grant Reporting Readiness for Small Nonprofits",
  description:
    "GrantReportKit helps small nonprofits turn award letters into grant report deadlines, deliverables, required financial and impact data, owner checklists, and reminder dates.",
  openGraph: {
    title: "Be ready before every grant report is due",
    description:
      "GrantReportKit turns award letters into a report-readiness plan: deadlines, deliverables, required data, and reminders for small nonprofits.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
