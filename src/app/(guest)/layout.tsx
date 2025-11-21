import Footer from "@/presentation/components/general/footer";
import ScrollToTop from "@/presentation/components/action/scroll.to.top";
import Navbar from "@/presentation/components/action/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-white">
      <Navbar />
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        {children}
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
