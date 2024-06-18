import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Hero />
    </div>
  );
}
