import Hero from "@/components/parts/home/hero";
import SectionOne from "@/components/parts/home/section-one";
import SectionTwo from "@/components/parts/home/section-two";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SectionOne />
        <SectionTwo />
      </main>
      <Footer />
    </>
  );
}
