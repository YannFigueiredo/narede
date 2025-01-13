import styled from "styled-components";
import backgroundProfile from "assets/images/background-perfil-quad.png";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({theme}) => theme.spacing.padding.large};
`;

export const Header = styled.div`
  height: 12.5rem;
  width: 100%;
  background-image: url(${backgroundProfile});
  background-position: center center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 29.688rem;
  }
`;

export const Main = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.large} 
  ${({theme}) => theme.spacing.padding.very_large};
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small}};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  animation: fadeIn 1.5s;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  span {
    color: ${({theme}) => theme.colors.detailPrimary};
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.base_large};
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    transition: all linear .4s;
    border-bottom: 0.125rem solid transparent;
  }

  span:hover, .active {
    border-color: ${({theme}) => theme.colors.detailPrimary};
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    span {
      color: #FFF;
    }

    span:hover, .active {
      color: ${({theme}) => theme.colors.detailPrimary};
      border-color: ${({theme}) => theme.colors.detailPrimary};
    }
  }
`;