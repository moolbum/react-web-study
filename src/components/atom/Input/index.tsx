import { Input, InputProps } from "antd";
import React from "react";
import styled from "styled-components";

function InputComponent({ ...rest }: InputProps) {
  return <StyledInput {...rest} />;
}

export default InputComponent;

const StyledInput = styled(Input)``;
