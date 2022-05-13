import React from 'react';
import styled from 'styled-components';
import document from '../assets/ecc-document.png';

export default function Insights() {
  return (
    <Container>
      <h2>Stadt, Land, Los!</h2>
      <h3>Der Weg zur kundenorientierten Zustellungs- und Retourenlösungen in der Stadt und auf dem Land.</h3>
      <Wrapper>
        <Background />
        <StyledImage src={document} alt="document preview" width="180" />
        <TextWrapper>
          <h4>Insights der Studie</h4>
          <List role="list">
            Stadt vs. Land
            <li>
              <span>✓ </span>Online-Shoppingverhalten
            </li>
            <li>
              <span>✓ </span>Top-Zustellkritieren
            </li>
            <li>
              <span>✓ </span>Retourenablauf
            </li>
          </List>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 1rem 2rem;
  display: grid;
  align-content: start;
  gap: 2rem;
  width: 300px;
  flex: 3;

  h2 {
    color: #0091cd;
    padding-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.5rem;
`;

const Background = styled.div`
  height: 100%;
  width: 85%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledImage = styled.img`
  position: relative;
  top: 40px;
  flex: 1;
  width: 100%;
  max-width: 180px;
  min-width: 140px;
  z-index: 1;
`;

const TextWrapper = styled.div`
  font-size: 14px;
  font-weight: bolder;
  opacity: 1;
  position: relative;
  padding: 2.5rem 0;
  flex: 1;
  width: 100%;

  h4 {
    color: #333;
    font-size: 14px;
    font-weight: bolder;
    padding-bottom: 1rem;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 0.75rem;
  color: #0091cd;
  list-style: none;
  padding: 0;
`;
