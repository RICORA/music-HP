import React from "react";
import styled from "styled-components";
import variables from "../../variables";

const Hero = () => {
  return (
    <section id="hero">
      <StyledTitle>RICORA MusicTeam</StyledTitle>
      <h2>リコラ音楽班</h2>
    </section>
  );
};
export default Hero;

const StyledTitle = styled.h1`
  color: purple;
  font-family: ${variables.FONT_FAMILY.SANS_SERIF};
`;
