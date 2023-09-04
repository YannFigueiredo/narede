import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
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
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
