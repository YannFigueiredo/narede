import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;
  border-radius: ${({theme}) => theme.spacing.radius.normal};
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.very_small};
  width: 30rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  h3 {
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.base_large};
  }
`;

export const Content = styled.div``;

export const Image = styled.div``;

export const ReviewArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  span {
    color: #000;
  } 
`;

export const Profile = styled.div`
  width: 20%;
  position: relative;

  &::before {
  content: "";
  display: block;
  padding-top: 100%;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
`;

export const Review = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  img {
    width: 1rem;
  }
`;