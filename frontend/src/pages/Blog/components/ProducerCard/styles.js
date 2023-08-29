import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  background: ${({theme}) => theme.colors.gray["100"]};
  border-radius: 20px;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};

  img {
    max-width: 110px;
    border-radius: 50%;
  }

  #follow-btn {
    text-transform: uppercase;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:first-child {
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  span {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.small};
  }
`;