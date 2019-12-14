import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";
import "./VideoSection.scss";

function VideoSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="VideoSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={4}
        />
        <VideoEmbed url={props.embedUrl} />
      </div>
    </Section>
  );
}

export default VideoSection;
