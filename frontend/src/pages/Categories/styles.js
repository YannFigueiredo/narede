import styled from "styled-components";

export const Main = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.very_large};;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  animation: rotateFromLeft .2s linear;

  #mobile-selector {
    display: none;
    background: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme}) => theme.colors.sectionTitle};

    option {
      color: ${({theme}) => theme.colors.sectionTitle};
    }

    @media screen and (max-width: 600px) {
      display: flex;
    }
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
    align-items: center;
  }
`;

export const Selector = styled.div`
  background: #FFF;
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;
  color:  ${({theme}) => theme.colors.blue["100"]};

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
  width: 200px;
  padding: ${({theme}) => theme.spacing.padding.big_small};
  border-radius: 0.5rem;

  option {
    color: ${({theme}) => theme.colors.detailPrimary};
  }
`;

export const TitlesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
