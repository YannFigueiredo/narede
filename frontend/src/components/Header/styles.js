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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};

  svg {
    font-size: ${({theme}) => theme.fontSize.large};
    fill: rgba(255, 255, 255, .7);
    cursor: pointer;
    transition: all linear .3s;
  }

  svg:hover {
    fill: rgba(255, 255, 255, 1);
  }

  #menu-open {
    display: none;
    font-size: ${({theme}) => theme.fontSize.large};
  }

  #menu-close {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    fill: rgba(255, 255, 255, .7);
    z-index: 999;
    font-size: ${({theme}) => theme.fontSize.very_large};
    cursor: pointer;
    margin: ${({theme}) => theme.spacing.padding.normal} ${({theme}) => theme.spacing.padding.normal} 0 0;
  }

  @media screen and (max-width: 600px) {
    #menu-open {
      display: inline-block;
    }

    #menu-close {
      display: inline-block;
    }
  }
 `;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} ${({theme}) => theme.spacing.padding.small};
  }

  li a {
    color: #FFF;
    text-decoration: none;
  }

  li:hover {
    background: linear-gradient(to right, ${({theme}) => theme.colors.primaryGradient}, ${({theme}) => theme.colors.secondaryGradient});
  }

  @media screen and (max-width: 600px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme}) => theme.colors.primary};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    padding-top: 3.5rem;

    li {
      width: 100%;
      text-align: center;
    }

    li a {
      font-size: ${({theme}) => theme.fontSize.large};
    }
  }
`;