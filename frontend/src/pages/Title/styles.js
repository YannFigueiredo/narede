import styled from "styled-components";

export const Reader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: ${({theme}) => theme.spacing.padding.small};
  
  img {
    max-width: 700px;
    width: 100%;
  }
`;