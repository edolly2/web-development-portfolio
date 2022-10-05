import HeroSocialMedia from './HeroSocialMedia';
import NavBar from './NavBar';
import React from 'react';
import styled from 'styled-components';
const HeroBackDrop = styled.div`
  background-color: gray;
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 200px;
  right: 200px;
  /* width: 100%; */
  /* height: 100%; */
  box-shadow: 0 10px 50px 15px black;
  transform: rotate(2.5deg);
  z-index: 1;
`;
const HeroContainer = styled.div`
  /* width: 90%; */
  /* height: 90%; */
  background-color: white;
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 200px;
  right: 200px;
  color: blue;
  box-shadow: 0 10px 50px 15px black;
  padding: 2% 4%;
  padding-right: 0;
  display: flex;
  z-index: 2;
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 40px;
  -webkit-text-stroke: 2.5px black;
  /* text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000; */
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  display: flex;
`;

const HeroTitle2 = styled.h1`
  color: black;
  font-size: 40px;
  margin-right: 10px;
  -webkit-text-stroke: 2.5px black;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  /* text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000; */
`;

const HomeHero = () => {
  return (
    <>
      <HeroBackDrop />
      <HeroContainer>
        <HeroLeft>
          <HeroTitle>
            <HeroTitle2>Eric</HeroTitle2>Dollinger
          </HeroTitle>
          <NavBar />
        </HeroLeft>
        <HeroSocialMedia />
      </HeroContainer>
    </>
  );
};

export default HomeHero;
