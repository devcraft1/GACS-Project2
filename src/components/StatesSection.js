import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import States from "./States";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "../util/router.js";

function StatesSection(props) {
  const router = useRouter();
  return (
    <>
      <Navbar
        color="info"
        spaced={true}
        logo="/image/gacs.jpeg"
        buttonOnClick={() => {
          router.push("/indexpage");
        }}
      />
      <Section color={props.color} size={props.size}>
        <div className="container">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            centered={true}
            size={3}
          />
          <States
            people={[
              {
                avatar: "image/frank2.jpeg",
                name: "Iregbu Frank",
                role: "National Director",
              },
              {
                avatar: "/image/forestry.jpg",
                name: "mr Lagos ",
                role: "Lagos state coordinator"
              },
              {
                avatar: "/image/apple.jpeg",
                name: "mr Aba ",
                role: "Abia state coordinator"
              },
              {
                avatar: "/image/hd3.jpg",
                name: "Mr Wise",
                role: "Ogun state coordinator"
               },
              {
                 avatar: "/image/apple.jpeg",
                name: "mr Aba ",
                role: "Abia state coordinator"
               },
              {
                avatar: "/image/forestry.jpg",
                name: "mr Lagos ",
                role: "Lagos state coordinator"
              },
              {
               
                avatar: "/image/hd3.jpg",
                name: "Mr Wise",
                role: "Ogun state coordinator"
              },
              {
               
                avatar: "/image/hd4.jpg",
                name: "Mr Obu",
                role: "Oyo state coordinator"
              },
              {
                avatar: "image/frank2.jpeg",
                name: "Iregbu Frank",
                role: "National Director",
              },
              {
                avatar: "/image/forestry.jpg",
                name: "mr Lagos ",
                role: "Lagos state coordinator"
              },
              {
                avatar: "/image/apple.jpeg",
                name: "mr Aba ",
                role: "Abia state coordinator"
              },
              {
                avatar: "/image/hd3.jpg",
                name: "Mr Wise",
                role: "Ogun state coordinator"
               },
               {
                avatar: "/image/apple.jpeg",
               name: "mr Aba ",
               role: "Abia state coordinator"
              },
             {
               avatar: "/image/forestry.jpg",
               name: "mr Lagos ",
               role: "Lagos state coordinator"
             },
             {
              
               avatar: "/image/hd3.jpg",
               name: "Mr Wise",
               role: "Ogun state coordinator"
             },
             {
              
               avatar: "/image/hd4.jpg",
               name: "Mr Obu",
               role: "Oyo state coordinator"
             },
            ]}
          />
        </div>
      </Section>
      <Footer
        color="info"
        size="medium"
        logo="/image/gacs.jpeg"
        description="Repositioned to feed the nation"
      />
    </>
  );
}

export default StatesSection;
