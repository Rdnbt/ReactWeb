import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio 
      </SectionTitle>
      <SectionText>
        Hello! I'm a Machine Learning enthusiast with a background in Transdisciplinary Engineering. I'm passionate about learning required skills in order to solve difficult problems.
        I am also a motion designer and filmmaker. Please feel free to reach out to me if you have any questions or would like to collaborate. 
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1O3dkr6PwsJi3k76fjbnXKEjNA_G6tGTn/view?usp=share_link'}>Résumé</Button> 
    </LeftSection>
  </Section>
  );

export default Hero;
