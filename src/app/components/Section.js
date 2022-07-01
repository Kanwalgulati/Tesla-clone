import React from "react";
import { Fade } from "react-reveal";
import styled, { keyframes } from "styled-components";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade left>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>

          {rightBtnText && (
            <Fade right>
              <RightButton>{rightBtnText}</RightButton>
            </Fade>
          )}
        </ButtonGroup>
        <Fade bottom>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

const animateDown = keyframes`
0%,20%,50%,80%,100% {
    transform: translateY(0);
}
 40% {
    transform: translateY(5px);
 }
 60%{transform:translateY(3px)}
 `;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ItemText = styled.div`
  z-index: 10;
  padding-top: 10vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  cursor: pointer;
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: ${animateDown} infinite 1.5s;
`;

const Buttons = styled.div``;

export default Section;
