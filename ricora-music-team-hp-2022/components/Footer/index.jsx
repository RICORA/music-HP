import React, { useEffect } from "react";
import styled from "styled-components";
import variables from "../../variables";

const Footer = () => {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0];
    const scriptUrl = document.createElement("script");
    scriptUrl.type = "text/javascript";
    scriptUrl.src = "https://platform.twitter.com/widgets.js";
    scriptUrl.async = true;
    head.appendChild(scriptUrl);
  }, []);

  return (
    <StyledFooter>
      <StyledHeading>LINKS</StyledHeading>
      <StyledSubHeading>TWITTER</StyledSubHeading>
      <a
        class="twitter-timeline"
        data-width="400"
        data-height="600"
        data-theme="dark"
        href="https://twitter.com/ricora_dtm_dj?ref_src=twsrc%5Etfw"
      >
        Tweets by ricora_dtm_dj
      </a>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  background-color: purple;
  color: white;
  padding: 40px;
`;

const StyledHeading = styled.h1`
  font-family: ${variables.FONT_FAMILY.SANS_SERIF};
  font-size: 32px;
`;

const StyledSubHeading = styled.h2`
  font-family: ${variables.FONT_FAMILY.SANS_SERIF};
  font-size: 18px;
`;
