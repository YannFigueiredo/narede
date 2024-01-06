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
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  align-items: center;

  img {
    width: 40px;
    border-radius: 50%;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    color: rgb(252, 189, 73);
  }

  a:visited {
    color: rgb(252, 189, 73);
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
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.between_elements.between_cards};

  .post-btn {
    font-size: 2rem;
    cursor: pointer;
    transition: all linear .4s;
  }

  .post-btn:hover {
    fill: rgb(252, 189, 73);
  }
`;