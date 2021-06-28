import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { blogs } from "../../constants/constants";

const Projects = () => (
  <Section id="blog">
    <SectionDivider />
    <SectionTitle main>Blogs</SectionTitle>
    <GridContainer>
      {blogs.map(({ id, image, title, visit }) => {
        return (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">
                Visit
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
