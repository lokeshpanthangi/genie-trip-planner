import { useState } from "react";
import DiscoveryMode from "@/components/planner/DiscoveryMode";
import DashboardMode from "@/components/planner/DashboardMode";
import { Helmet } from "react-helmet";

const Planner = () => {
  const [mode, setMode] = useState<"discovery" | "dashboard">("discovery");

  return (
    <>
      <Helmet>
        <title>Plan Your Trip - TravelAI</title>
        <meta name="description" content="Chat with our AI to plan the perfect group trip. Get personalized itineraries and budget management." />
      </Helmet>
      {mode === "discovery" ? (
        <DiscoveryMode onReady={() => setMode("dashboard")} />
      ) : (
        <DashboardMode />
      )}
    </>
  );
};

export default Planner;
