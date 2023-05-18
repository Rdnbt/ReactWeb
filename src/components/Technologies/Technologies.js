import React from 'react';
import { DiFirebase, DiGithub, DiGoogleDrive, DiPython, DiReact, DiTerminal, DiVim, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies including Machine Learning, UI/UX Design, Motion Graphics and Graphic Design.
      I am familiar and have experience with the following:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />  
            HTML, CSS, JS, React.js, Next.js, git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, R, SQL, Tableau, and Excel
          </ListParagraph>
        </ListContainer>
      </ListItem>
     <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            TensorFlow, Keras, PyTorch, Scikit-Learn, Pandas, OpenCV, Seaborn, Matplotlib</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Video Editing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Premiere Pro, Adobe After Effects, Davinci Resolve, Final Cut Pro, Blender
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleDrive size="3rem" />
        <ListContainer>
          <ListTitle>Motion Graphics + 3D Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe After Effects, Blender, Cinema 4D, Adobe Illustrator, Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
  );

export default Technologies;
