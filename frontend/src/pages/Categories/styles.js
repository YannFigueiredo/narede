import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  animation: rotateFromLeft .2s linear;
  background-color: ${({theme}) => theme.colors.backgroundLightBlue};
  padding: 0 ${({theme}) => theme.spacing.padding.normal} ${({theme}) => theme.spacing.padding.normal};

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Main = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  animation: rotateFromLeft .2s linear;
  background-image: url(${background});
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid ${({theme}) => theme.colors.backgroundPrimary};

  #mobile-selector {
    display: none;
    background: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme}) => theme.colors.sectionTitle};

    option {
      color: ${({theme}) => theme.colors.sectionTitle};
    }
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
    align-items: center;
  }
`;

export const HeaderTitles = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  justify-content: space-between;
  align-items: center;
`;

export const Selector = styled.div`
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;

  button:nth-child(${(props) => props.active}) {
    color: ${({theme}) => theme.colors.sectionTitle};
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Filter = styled.select`
  background: transparent;
  color: ${({theme}) => theme.colors.detailPrimary};
  display: flex;
  width: 12.5rem;
  padding: ${({theme}) => theme.spacing.padding.big_small};
  border-radius: 0.5rem;

  option {
    color: ${({theme}) => theme.colors.detailPrimary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  border: 2px solid #fff; 
  max-width: 100%;

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const TitlesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};
  }
`;
