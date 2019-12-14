import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection1.scss";

function HeroSection1(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-centered is-desktop">
        <figure className="HeroSection__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
            />
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
         <div className="column is-1" />
           <div className="column">
            {/* <figure className="HeroSection__image image">
              <img src={props.image} alt="Illustration" />
            </figure> */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection1;
