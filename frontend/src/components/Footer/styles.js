import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.gray["100"]};
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.very_small};
  text-transform: uppercase;
  min-height: 60px;

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} ${({theme}) => theme.spacing.padding.small};
  }

  li a {
    transition: all linear .3s;
    color: ${({theme}) => theme.colors.blue["900"]};
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  li a:hover, li .active {
    color: ${({theme}) => theme.colors.blue["400"]};
    font-weight: 700;
  }
`;