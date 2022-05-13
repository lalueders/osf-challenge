import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ListWrapper>
          © 2019 Hermes Germany GmbH
          <List role="list">
            <li>
              <a href="/">Impressum</a>
            </li>
            <li>
              <a href="/">AGB</a>
            </li>
            <li>
              <a href="/">Datenschutz</a>
            </li>
            <li>
              <a href="/">Sicherheitshinweise</a>
            </li>
          </List>
        </ListWrapper>
        <ListWrapper>
          Globale Hermes Links
          <List role="list">
            <li>
              <a href="/">Über uns</a>
            </li>
            <li>
              <a href="/">Presse</a>
            </li>
            <li>
              <a href="/">Karriere</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </List>
        </ListWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  margin: 4rem auto 0;
  font-size: 12px;
  background: #eeeeee;
  padding: 2rem 1rem;
  border-top: 4px solid #0091cd;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ListWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  align-content: start;
  gap: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
`;
