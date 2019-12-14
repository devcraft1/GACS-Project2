import React from "react";
import Navbar from "./../components/Navbar";
import SectionHeader from "./SectionHeader";
// import VideoSection from "./../components/VideoSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
import "./AboutPage.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="info"
        spaced={true}
        logo="/image/gacs.jpeg"
        buttonOnClick={() => {
          router.push("/AboutPage");
        }}
      />
      <div className="column">
        <SectionHeader title="BRIEF HISTORY" size={4} />
        <p className="HeroSection__image image">
          Gacs started under the leadership of Comr. Iregebu Frank in 2019.This
          vision was engineered to revolutionize the agricultural Sector to feed
          the nation. ... Gacs started under the leadership of Comr. Iregebu
          Frank in 2019.This vision was engineered to revolutionize the
          agricultural Sector to feed the nation. ... Gacs started under the
          leadership of Comr. Iregebu Frank in 2019.This vision was engineered
          to revolutionize the agricultural Sector to feed the nation. ... Gacs
          started under the leadership of Comr. Iregebu Frank in 2019.This
          vision was engineered to revolutionize the agricultural Sector to feed
          the nation. ...
        </p>

        <p className="HeroSection__image image">
          <h1 className="h1">Comr. Frank Iregbu, National coordinator GACS</h1>
        </p>
      </div>

      <div className="FooterHeight">
        <Footer
          color="info"
          size="medium"
          logo="/image/gacs.jpeg"
          description="Repositioned to feed the nation"
        />
      </div>
    </>
  );
}

export default AboutPage;
