import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import variables from "../variables";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&family=Zen+Old+Mincho&display=swap"
          rel="stylesheet"
        />
        <style>{commonStyle}</style>
      </Helmet>
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
export default Layout;

const commonStyle = `
  body {
    margin: 0;
    font-family: ${variables.FONT_FAMILY.SERIF};
  }
`;

const StyledMain = styled.main`
  padding: 20px;
`;
