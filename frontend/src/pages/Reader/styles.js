import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
`;

export const Header = styled.div``;

export const Main = styled.div`
  display: flex;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  background: #FFF;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  img {
    max-width: 15.625rem;
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
    font-size: ${({theme}) => theme.fontSize.regular};
    border-radius: 0.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  button {
    border: none;
    background: ${({theme}) => theme.colors.backgroundSecondary};
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
    width: 30px;
  }
`;

export const Content = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
`;

/*export const Main = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.large} 
  ${({theme}) => theme.spacing.padding.large} 
  ${({theme}) => theme.spacing.padding.large} 
  ${({theme}) => theme.spacing.padding.very_large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  hr {
    height: 0.9375rem;
    border-radius: ${({theme}) => theme.spacing.radius.very_small};
    background: #FFF;
  }

  @media screen and (max-width: 992px) {
    padding: ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Tabs = styled.nav`
  max-width: 25rem;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.small}; 
    position: relative;
  }
  
  ul li {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul li div {
    border-width: 0.9375rem;
    border-style: solid;
    border-color: transparent transparent transparent ${({theme}) => theme.colors.blue["100"]};
    width: 0.3125rem;
    opacity: 0;
  }

  ul li .detail-selected {
    opacity: 1;
  }

  ul li span {
    list-style: none;
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.base_large};
    padding: ${({theme}) => theme.spacing.padding.large};
    background: #FFF;
    border-radius:  ${({theme}) => theme.spacing.radius.normal};
    color: ${({theme}) => theme.colors.blue["500"]};
    text-align: center;
    font-weight: 900;
    cursor: pointer;
    transition: all linear .4s;
    width: 100%;
  }

  ul li span:hover {
    background: ${({theme}) => theme.colors.blue["100"]};
  }

  .selected {
    background: ${({theme}) => theme.colors.blue["100"]};
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;

    ul {
      flex-direction: row;
      justify-content:  space-around;
    }

    ul li {
      width: 100%;
    }

    ul li span {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul li div {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
    }

    ul li span {
      font-size: ${({theme}) => theme.fontSize.base};
      padding: ${({theme}) => theme.spacing.padding.small} 
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;*/