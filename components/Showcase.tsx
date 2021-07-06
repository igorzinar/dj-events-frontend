import React from "react";
import styled from "styled-components";

const Showcase = () => {
  return (
    <Container>
      <Title>Welcome To The Party!</Title>
      <Text>Find the hottest DJ events</Text>
    </Container>
  );
};

export default Showcase;

const Container = styled.div`
  height: 300px;
  width: 100%;
  background: #000 url("/images/showcase.jpg") no-repeat center center;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  & h1 {
    font-size: 40px;
    margin-bottom: 0;
  }
`;
const Title = styled.h1``;
const Text = styled.h2``;
