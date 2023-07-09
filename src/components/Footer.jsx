import React from "react";
import styled from "styled-components";
import PlayBack from "./PlayBack";
export default function Footer() {
  return (
    <Container>
      <PlayBack/>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  align-items: center;
  justify-content: center;
`;