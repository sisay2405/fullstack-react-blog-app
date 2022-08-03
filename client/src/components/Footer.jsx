import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
  // postion:fixed;
  // left:0;
  // bottom: 0;
  // right:0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Frankie, Ermias and Sisay © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
