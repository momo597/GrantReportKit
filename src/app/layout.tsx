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
    "Turn award letters and grant agreements into a grant reporting readiness plan with deadlines, deliverables, financial and impact data items to collect, owner checklists, and reminders.",
  openGraph: {
    title: "GrantReportKit — Grant Reporting Readiness for Small Nonprofits",
    description:
      "Turn award letters and grant agreements into a grant reporting readiness plan with deadlines, deliverables, financial and impact data items to collect, owner checklists, and reminders.",
    type: "website",
    url: "https://grantreportkit.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrantReportKit — Grant Reporting Readiness for Small Nonprofits",
    description:
      "Turn award letters and grant agreements into a grant reporting readiness plan with deadlines, deliverables, financial and impact data items to collect, owner checklists, and reminders.",
  },
  alternates: {
    canonical: "https://grantreportkit.com",
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
