import React from 'react';
import styled from 'styled-components';
import header from '../assets/header.jpg';
import logo from '../assets/hermes_logo.png';

export default function Header() {
  return (
    <header>
      <LogoContainer>
        <img src={logo} alt="Hermes Logo" />
      </LogoContainer>
      <HeaderContainer>
        <ImageWrapper>
          <Background />
          <TextWrapper>
            <h1>Die neuesten eCommerce Insights für Sie</h1>
          </TextWrapper>
        </ImageWrapper>
      </HeaderContainer>
    </header>
  );
}

const HeaderContainer = styled.div`
  position: relative;
  background: #0091cd;
  display: grid;
  justify-items: center;
`;

const LogoContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 100%;
  padding: 2rem 1rem;

  img {
    width: 170px;
    vertical-align: bottom;
  }
`;

const ImageWrapper = styled.div`
  height: 234px;
  background: #0091cd;
  background-image: url(${header});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  max-width: 1170px;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  height: 234px;
  width: 40%;
  background: #0091cd;
  border-radius: 70% 25% 2% 80% / 0% 15% 60% 0%;
  transform: skew(-20deg);
`;

const TextWrapper = styled.div`
  background: #0091cd;
  position: absolute;
  left: 0;
  height: 200px;
  width: 30%;
  z-index: 1;
  margin-right: 4rem;
  padding: 2rem 0rem 2rem 2rem;
  color: #ffffff;
`;
