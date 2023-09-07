import styled from "styled-components";

export const Container = styled.header`
  background: 
  ${({variant, theme}) => {
    return variant === "home" ? theme.colors.blue["900"] : "#FFF";
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  padding: ${({theme}) => theme.spacing.padding.small};

  @media screen and (max-width: 768px) {
    position: relative;
    padding-bottom: ${({theme}) => theme.spacing.padding.very_large};

    .search-input-header {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: ${({theme}) => theme.spacing.padding.small} auto;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  img {
    max-width: 11rem;
    min-width: 5rem;
    width: 100%;
    height: auto;
  }

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.blue["400"]};
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: ${({theme}) => theme.fontSize.base_large};
    }
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};

  #menu-open {
    display: none;
    font-size: ${({theme}) => theme.fontSize.large};
    cursor: pointer;
  }

  #menu-close {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    fill: rgba(255, 255, 255, .7);
    z-index: 9999;
    font-size: ${({theme}) => theme.fontSize.very_large};
    cursor: pointer;
    margin: ${({theme}) => theme.spacing.padding.normal} ${({theme}) => theme.spacing.padding.normal} 0 0;
  }

  @media screen and (max-width: 992px) {
    #menu-open {
      display: inline-block;
    }

    #menu-close {
      display: inline-block;
    }

    #main-menu {
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
      z-index: 9999;
      padding-top: 3.5rem;
  
      li {
        width: 100%;
        text-align: center;
      }
  
      li a {
        font-size: ${({theme}) => theme.fontSize.base_large};
      }
    }
  }
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
    color: 
    ${({variant, theme}) => {
    return variant === "home" ? "rgba(255, 255, 255, .7)" : theme.colors.blue["900"];
  }};
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.regular};
    font-weight: 
    ${({variant}) => {
    return variant === "home" ? 400 : 700;
  }};
  }

  li a:hover, li .active {
    color: 
    ${({variant, theme}) => {
    return variant === "home" ? "rgba(255, 255, 255, 1)" : theme.colors.blue["400"];
  }};
    font-weight: 700;
  }

  li img {
    max-width: 40px;
    border-radius: 50%;
  }
`;

export const SessionManager = styled.div`
  #logged-container {
    li:nth-child(1) {
      display: flex;
      align-items: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }
  }

  #logged-container, #logged-out-container {
    li {
      padding: ${({theme}) => theme.spacing.padding.big_small};
    }
  } 
`;