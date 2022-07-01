import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { allModelsList } from "../constants/models";

const Home = () => {
  return (
    <Container>
      {allModelsList.map((item) => (
        <Section {...item} key={item.title} />
      ))}
    </Container>
  );
};

const Container = styled.div``;
export default Home;
