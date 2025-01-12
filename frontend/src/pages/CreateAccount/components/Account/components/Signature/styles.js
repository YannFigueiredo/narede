import styled from "styled-components";

export const Main = styled.div`
  padding: 0 ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  span {
    font-size: ${({theme}) => theme.fontSize.base_large};
    font-weight: 700;
    color: ${({theme}) => theme.colors.sectionTitle};
    text-transform: uppercase;
  }
`;

export const Toggle = styled.div`
  background: ${({theme}) => theme.colors.sectionTitle};
  width: 5rem;
  border-radius: ${({theme}) => theme.spacing.radius.normal};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;

  div {
    background: ${({theme}) => theme.colors.detailPrimary};
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
  }
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  li {
    list-style-type: none;
    color: ${({theme}) => theme.colors.detailPrimary};
  }
`;