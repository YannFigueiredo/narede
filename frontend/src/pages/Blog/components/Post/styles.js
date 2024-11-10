import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
  padding: 
  ${({theme}) => theme.spacing.between_elements.between_items}
  ${({theme}) => theme.spacing.between_elements.between_items}
  ${({theme}) => theme.spacing.between_elements.small};
  border: 0.125rem solid ${({theme}) => theme.colors.gray["100"]}; 
  border-radius: 1.5625rem;
  max-width: 31.25rem;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  align-items: center;

  div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
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

  .see-more-btn {
    width: 100%;
    font-weight: 700;
    color: rgb(252, 189, 73);
    transition: all linear .4s;
    text-transform: uppercase;
    text-align: start;
    cursor: pointer;
  }

  .see-more-btn:hover {
    color: rgb(255, 150, 80);
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