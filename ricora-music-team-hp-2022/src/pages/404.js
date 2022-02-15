import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout>
      <StyledWrapper>
        <StyledTitle>Oops! そゲなぺゐぢは存在しヤン!</StyledTitle>
        <StyledText>
          <Link to="/">ホムペ</Link>に戻リ給ヘ～
        </StyledText>
      </StyledWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 20px;
`;

const StyledTitle = styled.h1`
  color: purple;
  font-size: 46px;
  margin-bottom: 20px;
`;

const StyledText = styled.div`
  font-size: 32px;
`;
