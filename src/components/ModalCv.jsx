import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const StyledButtonCloseModal = styled(Button)`
  background-color: #da4ea2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #da4ea2;
  }
`;

const StyledLink = styled.a`
  color: white;
  &:hover {
    color: #da4ea2;
  }
`;

function ModalCv() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <StyledLink onClick={toggle}>
        <FaDownload />
      </StyledLink>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalBody>
          <iframe
            title="CV"
            width="100%"
            height="100%"
            src="https://sway.office.com/s/oFpeGEB93ghlRZDj/embed"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none", maxHeight: "100vh" }}
          ></iframe>
        </ModalBody>
        <ModalFooter>
          <StyledButtonCloseModal onClick={toggle}>
            Fechar
          </StyledButtonCloseModal>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCv;
