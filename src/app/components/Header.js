import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { selectCars } from "../../features/Car/carSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={car}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon
          onClick={() => {
            setShowSideMenu(true);
          }}
        />
      </RightMenu>
      <BurgerNav showSideMenu={showSideMenu}>
        <CloseWrapper>
          <CustomClose onClick={() => setShowSideMenu(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="#" key={car}>
                {car}
              </a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
};
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    a {
      font-weight: 400;
      float: right;
      padding: 0 10px;
    }
  }
`;
const CustomClose = styled(CgClose)`
  cursor: pointer;
  height: 25px;
  width: 25px;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  transform: ${(props) =>
    props.showSideMenu ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s;
`;

const MenuIcon = styled(AiOutlineMenu)`
  cursor: pointer;
`;
export default Header;
