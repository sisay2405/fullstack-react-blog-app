import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../utils/globalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CatagoryBar from '../components/CatagoryBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
    margin: 0 auto 1.5rem;
    padding: 0 1.5rem 1rem;
    width: 90%;
    & > div {
      white-space: pre-line;
    }
    a:visited {
      color: blue;
    }
    h2 {
      color: #009900;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }
}
`;

const CatagoryWrapper = styled.div`
display: flex;
flex-direction: row;
// height: 100vh;

`;
const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <CatagoryWrapper>
          <Outlet />
          <CatagoryBar />
        </CatagoryWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
