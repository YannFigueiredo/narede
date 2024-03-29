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
    font-size: 1.563rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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
    width: 9.375rem;
    padding: 
    ${({theme}) => theme.spacing.padding.big_small}
    ${({theme}) => theme.spacing.padding.large};
    border-radius: ${({theme}) => theme.spacing.radius.normal};
    text-align: center;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const LoginOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  cursor: pointer;

  .login-icon {
    font-size: ${({theme}) => theme.fontSize.most_large};
    transition: all linear .4s;
  }

  &:hover .login-icon {
    fill: ${({theme}) => theme.colors.detailPrimary};
  }

  span {
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.base_large};
    transition: all linear .4s;
  }

  &:hover span {
    color: ${({theme}) => theme.colors.detailPrimary};
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  width: 100%;

  img {
    width: 2.188rem;
    background: #FFF;
    border-radius: 50%;
    padding: 0.35rem;
    transition: all linear .4s;
    cursor: pointer;
  }

  img:hover {
    background: ${({theme}) => theme.colors.detailPrimary};
  }
`;