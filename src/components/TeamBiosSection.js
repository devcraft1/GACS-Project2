import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={4}
        />
        <TeamBios
          people={[
            {
              avatar: "/image/minister.jpg",
              name: "Chief Audu Ogbeh",
              role: "Minister of agriculture, Nigeria",
              bio: "A leader with a unique difference.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "/image/frank.jpg",

              name: "Comr.Iregbu Frank",
              role: "GACS national director",
              bio: "A pasionate agronomist with a massive vision.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "/image/dennis2.jpg",
              name: "Comr.Ukonu Dennis",
              role: "GACS technical director",
              bio: "A simple farmer with software development skills",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
