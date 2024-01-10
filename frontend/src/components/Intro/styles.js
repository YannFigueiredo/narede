import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  background: #FFF;
  padding: ${({theme}) => theme.spacing.padding.very_small} 0;

  span {
    font-size: ${({theme}) => theme.fontSize.base};
    color: ${({theme}) => theme.colors.backgroundSecondary};
    font-weight: 700;
    text-transform: uppercase;
    animation: moveFromRight 1.2s forwards;
  }

  @media screen and (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: 8.5rem;
  animation: moveFromLeft 1.2s forwards;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 4rem;
  }
`;