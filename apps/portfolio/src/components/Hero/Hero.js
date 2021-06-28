import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { MdGetApp } from "react-icons/md";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm <br /> Shivam
      </SectionTitle>
      <SectionText>
        Front-end Developer @{" "}
        <a
          href="www.twimbit.com"
          target="_blank"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          twimbit
        </a>
      </SectionText>
      <Button>
        <a href="Shivamk Resume.pdf" style={{ color: "#ffffff" }}>
          <MdGetApp size="2.5rem" style={{ margin: "-6px" }} />{" "}
          <span style={{ margin: "10px" }}> Resume</span>
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
