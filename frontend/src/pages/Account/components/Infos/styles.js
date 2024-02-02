import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  max-width: 100%;

  h2 {
    text-transform: uppercase;
    color: #FFF;
    font-weight: 500;
    font-size: 1.563rem;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  
  img {
    max-width: 6.25rem;
    max-height: 6.25rem;
    border-radius: 50%;
  }
`;

export const InputPhoto = styled.div`
  background: ${({theme}) => theme.colors.detailPrimary};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  padding: 
  ${({theme}) => theme.spacing.padding.very_small}
  ${({theme}) => theme.spacing.padding.normal};
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.base_large};
  }

  input {
    display: none;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.normal};

  .input-infos {
    max-width: 31.25rem;
    width: 31.25rem;
    border-radius: ${({theme}) => theme.spacing.radius.small};
    padding: ${({theme}) => theme.spacing.padding.big_small};
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .input-infos {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  label {
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.base_large};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 12.5rem;
  padding: 
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.very_large};
  background: ${({theme}) => theme.colors.sectionTitle};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  transition: all linear .4s;
  cursor: pointer;

  a {
    text-transform: uppercase;
    font-weight: 500;
    color: #FFF;
    text-decoration: none;
  }

  &:hover {
    background: ${({theme}) => theme.colors.detailPrimary};
  }

  @media screen and (max-width: 768px) {
    padding: 
    ${({theme}) => theme.spacing.padding.big_small}
    ${({theme}) => theme.spacing.padding.large};
    border-radius: ${({theme}) => theme.spacing.radius.normal};
    text-align: center;
    width: 9.375rem;
  }
`;