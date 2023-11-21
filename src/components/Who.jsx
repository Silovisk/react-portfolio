import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  justify-content: center;
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Center = styled.div`
  flex: 1;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const AboutMe = styled.p`
  font-size: 24px;
  color: #333;
`;

const MySkills = styled.div`
  margin-top: 20px;
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  color: #da4ea2;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  color: #666;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Sobre</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Quem sou eu?</Subtitle>
          </WhatWeDo>
          <Desc>
            <AboutMe>
              Eu sou um desenvolvedor web apaixonado por criar experiências
              digitais incríveis. Minha jornada na programação começou há 2 
              anos atrás, e desde então tenho trabalhado em
              projetos desafiadores e empolgantes. Tenho experiência em
            </AboutMe>
          </Desc>
        </Left>
          <Right>
          <MySkills>
            <SkillTitle>Habilidades:</SkillTitle>
            <SkillsList>
              <SkillItem>Desenvolvimento Front-end</SkillItem>
              <SkillItem>React.js</SkillItem>
              <SkillItem>HTML5 & CSS3</SkillItem>
              <SkillItem>[Adicione suas outras habilidades]</SkillItem>
            </SkillsList>
          </MySkills>
          </Right>
      </Container>
    </Section>
  );
};

export default Who;
