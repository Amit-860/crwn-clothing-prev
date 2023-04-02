import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  background-color: white;
  position: sticky;
  top: 0px;
  z-index: 50;
  border-bottom: 0;
  box-shadow: 0 10px 15px -20px #333;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px 25px 65px 25px;
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
