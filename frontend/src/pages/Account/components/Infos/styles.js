import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  h2 {
    text-transform: uppercase;
    color: #FFF;
    font-weight: 500;
    font-size: 25px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  
  img {
    max-width: 100px;
    max-height: 100px;
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
    max-width: 500px;
    width: 500px;
    border-radius: ${({theme}) => theme.spacing.radius.small};
    padding: ${({theme}) => theme.spacing.padding.big_small};
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
`;

export const ButtonWrapper = styled.div`
  width: 200px;
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
`;