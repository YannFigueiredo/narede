import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const Selector = styled.div`
   background: ${({theme}) => theme.colors.primary};
   border-radius: ${({theme}) => theme.spacing.radius.small};
   overflow: hidden;

   button:nth-child(${(props) => props.active}) {
    background: linear-gradient(to right, ${({theme}) => theme.colors.primaryGradient}, ${({theme}) => theme.colors.secondaryGradient});
   }
`;

export const TitlesArea = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;