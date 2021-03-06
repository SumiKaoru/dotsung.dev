import styled from "styled-components";
import oc from "open-color";

import PageTemplate from "containers/PageTemplate";
import Intro from "components/Intro";
import Profile from "components/Profile";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Footer from "components/Footer";

const ContentsPositioner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100vh;
  background-color: white;
  position: relative;
  z-index: 1;
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  /* 
  animation-name: ContentPop;
  animation-timing-function: ease-in;
  animation-duration: 2.3s;

  @keyframes ContentPop {
    0% {
      margin-top: 100vh;
    }
    80% {
      margin-top: 100vh;
    }
    100% {
    }
  } */
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 80px;
  font-size: 2rem;
`;

const Slicer = styled.div`
  height: 1px;
  width: 200px;
  background-color: ${oc.gray[8]};
  margin-bottom: 20px;
`;

const HomeContainer = () => {
  return (
    <PageTemplate>
      <Intro />
      <ContentsPositioner>
        <Contents>
          <Title>PROFILE</Title>
          <Slicer />
          <Profile />
          <Title>SKILLS</Title>
          <Slicer />
          <Skills />
          <Title>PROJECTS</Title>
          <Slicer />
          <Projects />
        </Contents>
        <Footer />
      </ContentsPositioner>
    </PageTemplate>
  );
};

export default HomeContainer;
