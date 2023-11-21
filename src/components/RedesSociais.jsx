import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import ModalCv from "./ModalCv";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


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
`;

const Links = styled.a`
  color: white;
  &:hover {
    color: #da4ea2;
  }
`;

const RedesSociais = () => {
  return (
    <>
      <Row>
        <Icons>
          <Icon>
            <Links
              target="_blank"
              href="https://www.linkedin.com/in/silas-araujo-663772123/"
            >
              <FaLinkedin />
            </Links>
          </Icon>
          <Icon>
            <Links target="_blank" href="https://github.com/Silovisk">
              <FaGithub />
            </Links>
          </Icon>
          <Icon>
            <Links target="_blank" href="https://www.instagram.com/silas_araujoou/">
              <FaInstagram />
            </Links>
          </Icon>
          <Icon>
            <ModalCv />
          </Icon>
        </Icons>
      </Row>
    </>
  );
};

export default RedesSociais;
