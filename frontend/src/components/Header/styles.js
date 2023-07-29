import styled from "styled-components";

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: ${({theme}) => theme.spacing.padding.small};
`;

export const ImageWrapper = styled.a`
  max-width: 100px;
  max-height: auto;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const MenuWrapper = styled.nav`

`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  li {
    list-style: none;
    color: #FFF;
    font-weight: 500;
  }
`;