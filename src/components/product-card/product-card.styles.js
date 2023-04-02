import styled from "styled-components";
import Button from "../button/button.component";

export const Img = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`
export const StyledButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 340px;
  display: none;
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

`
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const Price = styled.span`
  width: 10%;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;

  &:hover {
    ${Img} {
      opacity: 0.8;
    }

    ${StyledButton} {
      opacity: 0.85;
      display: flex;
    }
  }

`