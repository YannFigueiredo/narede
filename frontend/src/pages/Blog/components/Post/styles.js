import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
  padding: 
  ${({theme}) => theme.spacing.between_elements.between_items}
  ${({theme}) => theme.spacing.between_elements.between_items}
  ${({theme}) => theme.spacing.between_elements.small};
  border: 2px solid ${({theme}) => theme.colors.gray["100"]}; 
  border-radius: 1.5625rem;
  max-width: 31.25rem;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 700;
    text-decoration: none;
    color: #FFF;
  }

  a:visited {
    color: #FFF;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  img {
    max-width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.between_elements.between_cards};

  a {
    text-decoration: none;
    color: #FFF;
  }

  a:visited {
    color: #FFF;
  }
`;