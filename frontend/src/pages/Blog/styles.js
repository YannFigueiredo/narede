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
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.blue["100"]}; 
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 
  width: 100%;
`;

export const Top = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections}; 
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 
`;
