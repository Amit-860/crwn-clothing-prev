import styled from "styled-components";
import Button from "../../components/button/button.component";
import FormInput from "../form-input/form-input.component";

export const SingInContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }
`
export const SingInFormButtonContainer = styled.div`
  display: flex;
  gap: 30px;

`
export const GoogleButton = styled(Button)`
  font-size: 13px;
  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    background-color: white;
    color: #357ae8;
    border: solid #357ae8 1px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 13px;
  }
`
export const FormInputStyled = styled(FormInput)`


`