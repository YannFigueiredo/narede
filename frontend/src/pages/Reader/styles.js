import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  animation: rotateFromLeft .2s linear;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.large};

  .page-title {
    color: rgba(255, 255, 255, .6);
  }

  h2 {
    color: #FFF;
  }

  div {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.very_small};

    span {
      font-weight: 700;
    }
  }

  .settings-icon {
    fill: #FFF;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
    align-items: center;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  background: #FFF;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  min-width: 25rem;

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
    width: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const ImageWrapper = styled.div`
  max-width: 15.625rem;
  max-height: 15.625rem;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 15.625rem;
    height: 15.625rem;
  }
`;

export const UserName = styled.h2`
  color: ${({theme}) => theme.colors.backgroundSecondary};
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
    padding: 
    ${({theme}) => theme.spacing.padding.big_small}
    ${({theme}) => theme.spacing.padding.very_small};
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.large};
    text-align: center;
    width: 100%;
    background: ${({theme}) => theme.colors.gray["100"]};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  justify-content: space-between;

  span {
    background: ${({theme}) => theme.colors.sectionTitle};
    color: #FFF;
    padding: 
    ${({theme}) => theme.spacing.padding.big_small}
    ${({theme}) => theme.spacing.padding.very_small};
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.small};
    border-radius: 0.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  button {
    border: none;
    background: rgb(0, 159, 217);
    color: ${({theme}) => theme.colors.backgroundPrimary};
    padding: ${({theme}) => theme.spacing.padding.small};
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.base_large};
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  img {
    width: 1.875rem;
  }
`;

export const Content = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 
  ${({theme}) => theme.spacing.between_elements.between_cards}
  ${({theme}) => theme.spacing.between_elements.between_items};
  width: 100%;
  background: #FFF;

  .double-col {
    grid-column: span 2;

    h3 {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${({theme}) => theme.spacing.padding.small};
    
    .double-col {
      grid-column: span 1;

      h3 {
        text-align: left;
      }
    }
  }
`;

export const Item = styled.div`
  background: ${({theme}) => theme.colors.backgroundSecondary};

  ul {
    padding: ${({theme}) => theme.spacing.padding.big_small};
    list-style-type: none;
  }

  ul li {
    display: flex;
    gap: ${({theme}) => theme.spacing.between_elements.small};
    align-items: center;
  }

  ul li div {
    background: #000;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
  }

  h3 {
    color: ${({theme}) => theme.colors.sectionTitle};
    display: inline-block;
    border-bottom: 0.063rem solid #FFF;
    padding: ${({theme}) => theme.spacing.padding.big_small};
    width: 100%;
    text-transform: uppercase;
  }
`;