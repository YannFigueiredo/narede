import styled from "styled-components";

export const Container = styled.div`
  border: none;
  max-width: ${(props) => props.maxwidth}rem;
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;
  background: #FFF;
  width: 100%;

  .search-input-categories {
    background-color: ${({theme}) => theme.colors.backgroundLightBlue};
    
    .input-wrapper{
      
    }

    .search-button {
      border-lefT: 1px solid #000;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const InputWrapper = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0 ${({theme}) => theme.spacing.padding.very_small};
  font-size: ${({theme}) => theme.fontSize.regular};
  color: ${({theme}) => theme.colors.backgroundPrimaryBox};
  outline: none;

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