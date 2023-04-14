import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>Call</LinkColumn>
        <LinkItem href="tel:070-3221-7896">070-3221-7896</LinkItem>
        <LinkColumn>Email</LinkColumn>
        <LinkItem href="mailto:battseren.e.aa@m.titech.ac.jp">battseren.e.aa@m.titech.ac.jp</LinkItem>
      </LinkList>
    </FooterWrapper>
    );
};

export default Footer;
