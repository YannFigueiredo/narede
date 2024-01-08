import styled from "styled-components";
import backgroundCard from "assets/images/background-card.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  span {
    font-size: ${({theme}) => theme.fontSize.base_large};
    font-weight: 700;
    color: ${({theme}) => theme.colors.sectionTitle};
    text-transform: uppercase;
  }
`;

export const Toggle = styled.div`
  background: ${({theme}) => theme.colors.sectionTitle};
  width: 80px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;

  div {
    background: ${({theme}) => theme.colors.detailPrimary};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all linear .2s;
  }

  .noActiveToggle {
    transform: translateX(-50px);
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  flex-wrap: wrap;
  justify-content: center;

  .active {
    border-color: ${({theme}) => theme.colors.detailPrimary};
  }
`;

export const Card = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-image: url(${backgroundCard});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 250px;
  height: 350px;
  border: 3px solid transparent;
  transition: all linear .4s;
  cursor: pointer;

  &:hover {
    border-color: ${({theme}) => theme.colors.detailPrimary};
  }

  h3, h4 {
    text-transform: uppercase;
    color: #FFF;
    font-weight: 700;
  }

  h4 {
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  span {
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 250px;
  }
`;