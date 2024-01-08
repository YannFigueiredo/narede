import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large}
  0;

  @media screen and (max-width: 768px) {
    padding: 
    ${({theme}) => theme.spacing.padding.small}
    ${({theme}) => theme.spacing.padding.small}
    0;
  }
`;

export const SubmitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  max-width: 800px;
  margin: auto;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 350px;
  background: ${({theme}) => theme.colors.sectionTitle};
  transition: all linear .4s;
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  cursor: pointer;

  a {
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
  }

  &:hover {
    background: ${({theme}) => theme.colors.detailPrimary};
  }
`;