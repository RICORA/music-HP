import React from "react";
import styled from "styled-components";
import variables from "../../variables";

const About = () => {
  return (
    <section id="about">
      <StyledHeading>ABOUT</StyledHeading>
      <p>
        RICORA MUSIC
        TEAMは、東京理科大学野田キャンパスにてDTMを行うサークルです。DTMはDeskTop
        Musicの略語であり、パソコンを用いて音楽制作を行うことを指します。
      </p>
      <StyledSubHeading>活動内容</StyledSubHeading>
      <p>
        週に一回部会が開かれており、DTM講習や曲の聴き合いなどを行っています。また、理科大の他DTMサークルと合宿を行ったり、作った曲をM3というイベントで発表したりもしています。曲を作るペースは各々に任せています。
      </p>
    </section>
  );
};
export default About;

const StyledHeading = styled.h1`
  color: purple;
  font-family: ${variables.FONT_FAMILY.SANS_SERIF};
  font-size: 32px;
`;

const StyledSubHeading = styled.h2`
  color: purple;
  font-size: 18px;
`;
