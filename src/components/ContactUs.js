import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

function ContactUs(props) {
  return (
    <div>
      <Navbar color="info" spaced={true} logo="/image/gacs.jpeg" />

      <div>
        <ContactSection
          color="white"
          size="medium"
          title=""
          subtitle=""
          showNameField={true}
          buttonText="Send message"
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

export default ContactUs;
