import React from "react";
import Directory from "../../components/directory/directory.component";
// import { HomePageContainer } from "./homepage.styles";

import styled from "styled-components";

const HomePageContainer = styled.div`
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  }
`;

const HomePage = () => {
  throw Error;
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
