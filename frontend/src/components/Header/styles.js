import styled from "styled-components";
import bgSearch from "assets/images/bgSearch.png";

export const Container = styled.header`
  background: ${({background, theme}) => background ? "rgba(0, 94, 136, .4)" : theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: ${({theme}) => theme.spacing.padding.small} 0 0 0;
  max-width: 100%;
  animation: fadeIn 1.2s;

  #search {
    max-width: 15rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }

  @media screen and (max-width: 768px) {
    background: rgb(56, 52, 53);
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  animation: moveFromTop 1.2s forwards;

  img {
    max-width: 7rem;
    min-width: 7rem;
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
    display: none;

    h1 {
      font-size: ${({theme}) => theme.fontSize.base_large};
    }
  }

  @media screen and (max-width: 600px) {
    img {
      max-width: 8rem;
    }
  }
`;

export const OptionsWrapper = styled.div`
  width: 100%;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;

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
    li a {
      font-size: ${({theme}) => theme.fontSize.regular};
    }
  }

  #main-menu li a:hover, #main-menu li .active {
    color: ${({theme}) => theme.colors.detailPrimary};
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

  @media screen and (max-width: 768px) {
    display: none;
  }
 `;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  background: radial-gradient(circle at center, #FFF, ${({theme}) => theme.colors.backgroundPrimary});

  li img {
    display: none;
    width: 2rem;
    height: 2rem;
  }

  li .menu-icon {
    display: none;
  }

  #about-btn-mobile {
    display: none;
  }

  #logged-container {
    li:nth-child(1) {
      display: flex;
      align-items: center;
    }
  }

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
  }

  li a {
    transition: all linear .3s;
    color: #000;
    background-color: ${({theme}) => theme.colors.backgroundLightBlue};
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.regular};
    font-weight: 700;
    display: inline-block;
    padding: ${({theme}) => theme.spacing.padding.small} ${({theme}) => theme.spacing.padding.normal};
  }

  li a:hover, li .active {
    color: #FFF;
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    font-weight: 700;
  }

  li img {
    max-width: 2rem;
  }

  @media screen and (max-width: 768px) {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }

    li img {
      display: inline-block;
    }

    #logged-container, #logged-out-container {
      li a {
        font-size: 0.5rem;
      }
    }

    li .menu-icon {
      font-size: 40px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
    }

    #about-btn-mobile {
      display: flex;
    }
  }
`;

export const SessionManager = styled.div`
  li img {
    display: none;
    width: 2rem;
    height: 2rem;
  }

  li .menu-icon {
    display: none;
  }

  #about-btn-mobile {
    display: none;
  }

  #logged-container {
    li:nth-child(1) {
      display: flex;
      align-items: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }
  }

  #logged-container, #logged-out-container {
    li {
      padding: ${({theme}) => theme.spacing.padding.big_small} 0;
    }

    li a {
      font-size: 1rem;
    }
  } 

  @media screen and (max-width: 768px) {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }

    li img {
      display: inline-block;
    }

    #logged-container, #logged-out-container {
      li a {
        font-size: 0.5rem;
      }
    }

    li .menu-icon {
      font-size: 40px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
    }

    #about-btn-mobile {
      display: flex;
    }
  }
`;

export const InputWrapper = styled.div`
  background-image: url(${bgSearch});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 20px;
`;

export const InputBorder = styled.div`
  background-image: url(${bgSearch});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 20px;
`;