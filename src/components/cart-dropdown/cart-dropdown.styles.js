import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 30px;
  z-index: 5;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 300px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CheckoutLink = styled(Link)`
    
`

export const CheckoutButton = styled(Button)`
  margin-top: auto;
  width: 220px;
  font-weight: 300;

`