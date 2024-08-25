import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import { Testimonials } from "./components/testimonials";
import USP from "./components/usp";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero />
      <USP/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
