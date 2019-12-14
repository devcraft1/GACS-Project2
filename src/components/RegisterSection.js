import React from "react";
import "./RegisterSection.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "../util/router.js";

function RegisterSection(props) {
  const router = useRouter();
  return (
    <div>
      <Navbar
        color="info"
        spaced={true}
        logo="/image/gacs.jpeg"
        buttonOnClick={() => {
          router.push("/indexpage");
        }}
      />
      <div className="RegisterSection">
        <iframe
          className="RegisterSection frame"
          src={props.url}
          allowfullscreen={true}
          frameBorder={0}
        />
      </div>

      <Footer
        color="info"
        size="medium"
        logo="/image/gacs.jpeg"
        description="Repositioned to feed the nation"
      />
    </div>
  );
}

export default RegisterSection;
