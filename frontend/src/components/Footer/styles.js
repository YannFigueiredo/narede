import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.very_large};

  @media screen and (max-width: 992px) {
    padding: 
    ${({theme}) => theme.spacing.padding.small}
    ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 
    0 
    0
    ${({theme}) => theme.spacing.padding.small};
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
  width: 100%;

  .fixed-menu {
    position: fixed;
    bottom: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.very_small};
  min-height: 3.75rem;

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} ${({theme}) => theme.spacing.padding.small};
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.very_small};
  }

  li:nth-child(1) img {
    width: 1.25rem;
    height: 1.25rem;
  }

  li:nth-child(2) img {
    width: 1.563rem;
    height: 1.563rem;
  }

  li:nth-child(3) img {
    width: 1.375rem;
    height: 1.375rem;
  }
 
  li span {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    li span {
      font-size: ${({theme}) => theme.fontSize.regular};
    }
  }
`;

export const MenuHeader = styled.div`
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
  text-transform: uppercase;
  width: 100%;
  background: rgb(56, 52, 53);
  display: none;
  padding: ${({theme}) => theme.spacing.padding.small}; 
  z-index: 9999;

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} 0;
  }

  li a {
    transition: all linear .3s;
    color: #FFF;
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.regular};
    font-weight: 700;
  }

  li a:hover, li .active {
    color: ${({theme}) => theme.colors.detailPrimary};
    font-weight: 700;
  }

  li img {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0 ${({theme}) => theme.spacing.padding.very_small}; 

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }

    li img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
    }

    li a {
      font-size: 0.5rem;
    }
  }
`;