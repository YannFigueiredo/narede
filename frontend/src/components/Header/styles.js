import styled from "styled-components";

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  padding: ${({theme}) => theme.spacing.padding.small};
`;

export const ImageWrapper = styled.a`
  max-width: 5.3125rem;
  max-height: auto;

  img {
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
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} ${({theme}) => theme.spacing.padding.small};
  }

  li:hover {
    background: linear-gradient(to right, ${({theme}) => theme.colors.primaryGradient}, ${({theme}) => theme.colors.secondaryGradient});
  }
`;