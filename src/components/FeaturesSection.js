import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={4}
        />
        <Features
          items={[
            {
              // title: "Vision driven",
              description:
                "Research and technology to feed Nigerian society",
              image: "/image/vegetables.jpg"
            },
            {
              // title: "Mission",
              description:
                "cutting across all state in Nigeria",
              image:
                "/image/apple.jpeg"
            },
            {
              // title: "Goal",
              description:
                "Improving Nigerian's Agriculture systems",
              image: "/image/wheat.jpg"
            },
            {
              // title: "Focus",
              description:
                "Establishing graduates with Agricultural jobs",
              image: "/image/forestry.jpg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
