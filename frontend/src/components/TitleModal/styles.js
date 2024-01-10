import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  z-index: 9998;
`;

export const Main = styled.div`
  max-width: 34.375rem; 
  width: 100%;
  animation: moveFromBottom .7s forwards;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 99;

  #close-button {
    font-size: ${({theme}) => theme.fontSize.large};
    fill: rgba(255, 255, 255, .6);
    cursor: pointer;
    transition: all linear .3s;
  }

  #close-button:hover { 
    fill: rgba(255, 255, 255, 1);
  }
`;

export const Header = styled.header`
  min-height: 13.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: ${({theme}) => theme.spacing.padding.small};
  background-image: url(${(props) => props.cover});
  background-size: cover;
  background-position: center;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 98;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  z-index: 99;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  h3 {
    font-size: ${({theme}) => theme.fontSize.large};
    color: #FFF;
  }

  span {
    color: #FFF;
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.base};
    font-weight: 500;
  }

  h4 {
    color: #FFF;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const Label = styled.span`
  background: ${({theme}) => theme.colors.backgroundSecondary};
  text-transform: uppercase;
  padding:
  0.25rem
  ${({theme}) => theme.spacing.padding.normal}; 
  display: inline-block;
  font-size: ${({theme}) => theme.fontSize.small};
  border-radius: ${({theme}) => theme.spacing.radius.normal};
  max-width: 110px;
  text-align: center;
  font-weight: 500;
`;

export const AssessmentsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  img {
    max-width: 100%;
    max-height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    height: 20px;
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const InfoWrapper = styled.div`
  span {
    color: ${({theme}) => theme.colors.blue["900"]};
  }
`;

export const Content = styled.div`
  background: rgb(0, 24, ,30);
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  text-transform: uppercase;

  span, a {
    color: #FFF;
  }

  .blocked-item {
    cursor: default;
    background: ${({theme}) => theme.colors.gray["100"]};
  }

  .blocked-item:hover {
    background: ${({theme}) => theme.colors.gray["100"]};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  h3 {
    color: #FFF;
  }

  span {
    font-size: 0.85rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing.between_elements.very_small};
  }  
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    background: ${({theme}) => theme.colors.backgroundSecondaryBox};
    font-size: 0.65rem;
    padding: ${({theme}) => theme.spacing.padding.big_small}; 
    border-radius: 0.5rem;
    transition: all linear .4s;
    cursor: pointer;
  }

  a:hover {
    background: ${({theme}) => theme.colors.backgroundPrimary};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.very_small};
  background: ${({theme}) => theme.colors.backgroundSecondaryBox};
  padding: 
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.small};

  a {
    text-decoration: none;
    font-size: 0.85rem;
    color: ${({theme}) => theme.colors.gray["100"]};
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};
    position: relative;
  }

  .list-item-photo {
    width: 35px;
    height: 30px;
    background: #000;
  }

  .list-item-icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
  }
`;