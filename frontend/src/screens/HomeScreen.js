import { useEffect } from "react";

import HomeTopSection from "../components/HomeTopSection";

const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeTopSection />
    </>
  );
};

export default HomeScreen;
