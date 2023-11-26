import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  &:hover {
    color: #da4ea2;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #da4ea2;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem><StyledLink href="#sobre">Sobre</StyledLink></ListItem>
            {/* <ListItem>Projetos</ListItem> */}
            <ListItem><StyledLink href="#contato">Contato</StyledLink></ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          {/* <Icon src="./img/search.png" /> */}
          <Button><StyledLink href="#contato">Contate</StyledLink></Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;