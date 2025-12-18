import Hero from "@/components/landing/Hero";
import FeatureCards from "@/components/landing/FeatureCards";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>TravelAI - The Travel Agent That Negotiates With Your Friends</title>
        <meta name="description" content="Plan group trips effortlessly with AI. Handle different budgets, preferences, and schedules automatically." />
      </Helmet>
      <main className="min-h-screen">
        <Hero />
        <FeatureCards />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
