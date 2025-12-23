import DashboardMode from "@/components/planner/DashboardMode";
import { Helmet } from "react-helmet";

const Planner = () => {
  return (
    <>
      <Helmet>
        <title>Your Trip Dashboard - TravelAI</title>
        <meta name="description" content="View your personalized trip itinerary, budget, and recommendations." />
      </Helmet>
      <DashboardMode />
    </>
  );
};

export default Planner;
