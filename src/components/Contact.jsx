import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";
import Swal from "sweetalert2";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuaw9zj",
        "template_wlzwsmc",
        ref.current,
        "H8z_uDvO23Z-3lP1S"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Mensagem enviada com sucesso!",
            showConfirmButton: false,
            timer: 1500,
          });
          ref.current.reset();
          setSuccess(true);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado, tente novamente mais tarde!",
          });
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contato">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contate me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem aqui..."
              name="message"
              rows={10}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
