import styled from "styled-components";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 44px;
  cursor: pointer;
  color: black;
  &:hover {
    color: #da4ea2;
  }
`;

const Link = styled

const RedesSociais = () => {
  return (
    <>
      <Row>
        <Icons>
          <Icon>
            <a target="blank" href="https://www.linkedin.com/in/silas-araujo-663772123/">
              <FaLinkedin />
            </a>
          </Icon>
          <Icon>
            <a href="https://github.com/Silovisk">
              <FaGithub />
            </a>
          </Icon>
        </Icons>
      </Row>
    </>
  );
};

export default RedesSociais;
