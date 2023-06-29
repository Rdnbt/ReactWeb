import React from 'react';
import {DiAsterisk, DiCompass, DiFirebase, DigGithub, DiGoogleDrive, DiMagento, DiMarkdown, DiMootoolsBadge, DiSpark} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './LanguagesStyles'


const Languages = () => (
    <Section id = 'languages'>
        <SectionDivider />
        <br />
        <SectionTitle>Languages</SectionTitle>
        <SectionText>
            Here is the list of languages I know. Communication is a vital element in expressing ideas and proposal especially in collaboration. 
        </SectionText>
        <List>
            <ListItem> 
                <DiCompass size = '3rem' />    
                <ListContainer>
                    <ListTitle>English</ListTitle>
                    <ListParagraph>
                        Native Level
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiMarkdown size = '3rem' />
                <ListContainer>
                    <ListTitle>Japanese</ListTitle>
                    <ListParagraph>
                        Fully Proficient
                    </ListParagraph>
                </ListContainer>
            </ListItem> 
            <ListItem>
                <DiAsterisk size = '3rem' />
                <ListContainer>
                    <ListTitle>Mongolian</ListTitle>
                    <ListParagraph>
                        Native Level
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiMarkdown size = '3rem' />
                <ListContainer>
                    <ListTitle>German</ListTitle>
                    <ListParagraph>
                        Intermediate Level
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
 );

export default Languages;