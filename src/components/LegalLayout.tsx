import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-semibold text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
          <div className="mt-8 prose-legal space-y-6 text-sm sm:text-base text-foreground/90 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
