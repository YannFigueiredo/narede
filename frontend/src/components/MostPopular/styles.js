import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.between_elements.between_cards};
  background: linear-gradient(to right, ${({theme}) => theme.colors.primaryGradient}, ${({theme}) => theme.colors.secondaryGradient});
  display: inline-block;
  width: 100%;
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: ${({theme}) => theme.spacing.radius.small};
`;