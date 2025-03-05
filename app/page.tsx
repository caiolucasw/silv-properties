import Hero from "@/components/server/Hero";
import HomeProperties from "@/components/server/HomeProperties";
import InfoBoxes from "@/components/server/InfoBoxes";
import "photoswipe/dist/photoswipe.css";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
