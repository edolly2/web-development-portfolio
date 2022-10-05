import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import React from 'react';
import styled from 'styled-components';

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 34px;
  width: 50px;
  height: 100%;
  gap: 50px;
  margin-left: auto;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;
const HeroSocialMedia = () => {
  return (
    <SocialIconsContainer>
      <FiTwitter className='social-icon' />
      <FiFacebook className='social-icon' />
      <FiLinkedin className='social-icon' />
      <FiGithub className='social-icon' />
    </SocialIconsContainer>
  );
};

export default HeroSocialMedia;
