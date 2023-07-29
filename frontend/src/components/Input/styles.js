import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({theme}) => theme.colors.primary};
  width: ${(props) => props.width};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
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

export const SearchButton = styled.div`
  padding: 0.3125rem;
  cursor: pointer;
`;