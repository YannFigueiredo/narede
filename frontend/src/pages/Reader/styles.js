import styled from "styled-components";

export const Main = styled.div`
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
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
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
    padding:  ${({theme}) => theme.spacing.padding.large} ${({theme}) => theme.spacing.padding.large};
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
    position: relative;
  }
`;

export const Content = styled.div`
  width: 100%;
`;