import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const Selector = styled.div`
   background: #FFF;
   border-radius: ${({theme}) => theme.spacing.radius.small};
   overflow: hidden;
   color:  ${({theme}) => theme.colors.blue["100"]};

   button:nth-child(${(props) => props.active}) {
    background: rgb(100, 204, 233);
   }
`;

export const TitlesArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1.5fr 1fr 1.5fr;
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;
