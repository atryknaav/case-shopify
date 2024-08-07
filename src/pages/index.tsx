import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className=" ">
      <Suspense fallback={<Loading />}>
        <Header />
        <Hero />
        <ProductCarousel />
        <Footer />
      </Suspense>
    </div>
  );
}
