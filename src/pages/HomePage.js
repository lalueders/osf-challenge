import styled from 'styled-components';
import Form from '../components/Form';
import Insights from '../components/Insights';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Form />
        <Insights />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  margin: 2rem auto;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 1rem;
`;
