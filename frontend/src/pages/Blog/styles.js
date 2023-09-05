import styled from "styled-components";

export const Main = styled.main`
  padding:
  ${({theme}) => theme.spacing.padding.normal} 
  ${({theme}) => theme.spacing.padding.large}; 
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
  overflow: hidden;

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

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 

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
