import styled from "styled-components";

export const Container = styled.header`
  background: rgba(0, 94, 136, .4);
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
    background: rgb(56, 52, 53);

    .show-search {
      display: flex;
    }
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
    max-width: 10rem;
    min-width: 10rem;
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

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    #menu-open {
      display: none;
    }

    #menu-close {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100vw;
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

  li:last-child {
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    background: none;
    width: 100%;
    gap: ${({theme}) => theme.spacing.between_elements.normal};

    li {
      display: none;
    }
    
    .mobile-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${({theme}) => theme.spacing.between_elements.small};
    }

    .mobile-option a {
      transition: all linear .3s;
      color: #FFF;
      background-color: transparent;
      font-size: 0.5rem;
      font-weight: 700;
      padding: 0;
    }

    .mobile-option .menu-icon {
      display: inline-block;
      font-size: 2.3rem;
      margin-bottom: -0.2rem;
    }

    .mobile-option a:hover, .mobile-option .active {
      color: #FFF;
      background-color: ${({theme}) => theme.colors.backgroundPrimary};
      font-weight: 700;
    }

    .mobile-option img {
      display: inline-block;
    }

    #logged-container, #logged-out-container {
      .mobile-option a {
        font-size: 0.5rem;
      }
    }

    #about-btn-mobile {
      display: flex;
    }
  }
`;
