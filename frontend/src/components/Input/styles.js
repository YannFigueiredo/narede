import styled from "styled-components";

export const Container = styled.div`
  border: 0.063rem solid ${({theme}) => theme.colors.primary};
  width: ${(props) => props.width};
  border-radius: ${({theme, isSearch}) => isSearch ? "20px" : theme.spacing.radius.small};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 25rem;
  width: 100%;
  background: #FFF;
`;

export const InputWrapper = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0 ${({theme}) => theme.spacing.padding.very_small};
  font-size: ${({theme}) => theme.fontSize.regular};
  color: ${({theme}) => theme.colors.backgroundPrimaryBox};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.backgroundPrimaryBox};
    font-size: ${({theme}) => theme.fontSize.small};
  }
`;

export const SearchButton = styled.div`
  padding: 0 0.3125rem;
  cursor: pointer;

  svg {
    fill: ${({theme}) => theme.colors.backgroundPrimaryBox};
  }
`;