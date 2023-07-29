import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  background: ${({theme}) => theme.colors.gray["100"]};
  padding: ${({theme}) => theme.spacing.padding.small};
`;

export const ImageWrapper = styled.div`
  max-width: 350px;

  img {
    width: 100%;
  }
`;