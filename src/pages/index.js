import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import HeroSection1 from "./../components/HeroSection1";
import FeaturesSection from "./../components/FeaturesSection";
import VideoSection from "./../components/VideoSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
// import Slide from "../components/Slide";
import ContactSection from "./../components/ContactSection";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar color="info" spaced={true} logo="/image/gacs.jpeg" />

      {/* <Slide /> */}

      <HeroSection1
        color="warning"
        size="medium"
        title="Welcome to Graduates of Agriculture Cooporative Society Online Platform"
        subtitle="The home of Agriculture Graduates and like minds"
        buttonText="Become a member"
        image="/image/hd1.jpg"
        buttonOnClick={() => {
          router.push("/register");
        }}
      />

      <HeroSection
        color="light"
        size="medium"
        title="BRIEF HISTORY"
        subtitle=""
        image="/image/dennis.jpg"
        // title="Graduates of Agriculture Cooperative Society"
        logo="/image/gacs.jpeg"
        motto="Repositioned to feed the nation"
      />

      <FeaturesSection
        color="warning"
        size="medium"
        title=""
        subtitle="OUR PHILOSOPHY"
      />

      <VideoSection
        color="light"
        size="medium"
        title=""
        subtitle="YOUTH IN AGRICULTURE"
        embedUrl="https://www.youtube.com/embed/E1NGLbjxBa8"
      />

      <TeamBiosSection
        color="white"
        size="medium"
        title=""
        subtitle="MEET AN AGRICULTURIST"
      />
      <ContentCardsSection
        color="warning"
        size="medium"
        title=""
        subtitle="GLOBAL NEWS"
      />

      <ContactSection
        color="light"
        size="medium"
        title=""
        subtitle="CONTACT US"
        showNameField={true}
        buttonText="Send message"
      />

      <Footer
        color="info"
        size="medium"
        logo="/image/gacs.jpeg"
        description="Repositioned to feed the nation"
      />
    </>
  );
}

export default IndexPage;
