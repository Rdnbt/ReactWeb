import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
    title: 'Project 1',
    description: 'This is project about exploring the notion of the word "Home" for foreign students studying abroad.',
  },
  {
    title: 'Project 2',
    description: 'SDGs has affected the lives of many people in the world. This project creates opportunities for students to volunteer to help those in need.',
  },
  {
    title: 'Project 3',
    description: 'Energy has become a major problem for human society. This short movie features the possible future for humanity if we do not take action now.',
  },
  {
    title: 'Project 4',
    description: 'Short Movie featured in internation film festival. The movie Hope received Grand Prix price in 2022 International Film Festival for Young People.', 
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key = {id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent> 
            <TagList>
              {tags.map((tag, i) => (
                <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  );

export default Projects;