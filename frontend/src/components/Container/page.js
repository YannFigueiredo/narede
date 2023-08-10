import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
`;