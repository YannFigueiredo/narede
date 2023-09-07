import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  background: #FFF;
  padding: ${({theme}) => theme.spacing.padding.large} 0;

  span {
    font-size: ${({theme}) => theme.fontSize.base_large};
    color: ${({theme}) => theme.colors.blue["500"]};
    font-weight: 700;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 17.5rem;

  img {
    width: 100%;
  }
`;