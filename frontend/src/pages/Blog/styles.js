import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: 0 ${({theme}) => theme.spacing.padding.large};
  background: rgb(217, 80, 28); 
`;

export const Main = styled.main`
  padding: ${({theme}) => theme.spacing.padding.large} 0; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small}; 
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.blue["100"]}; 

  @media screen and (max-width: 992px) {
    font-size: ${({theme}) => theme.fontSize.large}; 
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Top = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections}; 

  @media screen and (max-width: 992px) {
    h2 {
      font-size: 1.375rem;
    }
  }

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_items}; 

    h2 {
      display: inline-block;
      width: 100%;
      text-align: left;
    }

    #top-titles {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: auto;
    }
  }
`;

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards}; 
  width: 100%;

  h2 {
    font-size: 1.375rem;
    color: rgb(252, 189, 73);
    display: inline-block;
    width: 100%;
    text-align: left;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards}; 
  width: 100%;

  .popular {
    h4 {
      font-weight: 700;
    }

    span {
      color: rgba(255, 255, 255, .6);
    }
  }

  @media screen and (max-width: 768px) {
    overflow-x: auto;
    max-width: 100%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items}; 
  padding:
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.very_small}; 
  background: ${({theme}) => theme.colors.backgroundSecondary}; 
  min-width: 260px;
  border-radius: 1.5625rem;
`;

export const ButtonWrapper = styled.div`
  a {
    text-decoration: none;
    background: ${({theme}) => theme.colors.sectionTitle}; 
    font-weight: 500;
    display: inline-block;
    padding:
    ${({theme}) => theme.spacing.padding.very_small}
    ${({theme}) => theme.spacing.padding.large};  
    border-radius: 1.5625rem;
    font-size: ${({theme}) => theme.fontSize.regular};
    transition: all linear .4s;
  }

  a:hover {
    background: ${({theme}) => theme.colors.detailPrimary}; 
  }
`;

export const TagUser = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.small}; 
  align-items: center;

  span {
    color: rgb(252, 189, 73);
    font-weight: 700;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  .item-icon {
    font-size: 1.8rem;
  }

  li {
    list-style-type: none;
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.base_large}; 
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.small}; 
  }
`;
