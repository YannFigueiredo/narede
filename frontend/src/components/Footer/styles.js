import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.very_large};

  @media screen and (max-width: 992px) {
    padding: 
    ${({theme}) => theme.spacing.padding.small}
    ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.very_small};
  min-height: 3.75rem;

  li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: all linear .3s;
    padding: ${({theme}) => theme.spacing.padding.very_small} ${({theme}) => theme.spacing.padding.small};
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.very_small};
  }

  li:nth-child(1) img {
    width: 20px;
    height: 20px;
  }

  li:nth-child(2) img {
    width: 25px;
    height: 25px;
  }

  li:nth-child(3) img {
    width: 22px;
    height: 22px;
  }
 
  li span {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;