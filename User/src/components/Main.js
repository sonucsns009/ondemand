import Section from "./Section";
import HeroSection from "./HeroSection";

const Main = () => {
  return (
    <div className="col-sm-10 scrollDiv">
      <div id="main">
        <HeroSection />
        <Section />
      </div>
    </div>
  );
};

export default Main;
