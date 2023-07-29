import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({theme}) => theme.colors.primary};
  width: ${(props) => props.width}px;
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;
`;

export const InputWrapper = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  font-size: ${({theme}) => theme.fontSize.base};

  &:focus {
    outline: none;
  }
`;