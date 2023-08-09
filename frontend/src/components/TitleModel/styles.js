import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
`;

export const Main = styled.div`
  max-width: 550px; 
  width: 100%;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  #close-button {
    font-size: ${({theme}) => theme.fontSize.large};
    fill: rgba(255, 255, 255, .6);
    cursor: pointer;
    transition: all linear .3s;
  }

  #close-button:hover { 
    fill: rgba(255, 255, 255, 1);
  }
`;

export const Header = styled.header`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: ${({theme}) => theme.spacing.padding.small};
  background-image: url(${(props) => props.cover});
  background-size: cover;
  background-position: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({theme}) => theme.fontSize.large};
    color: #FFF;
  }

  span {
    color: #FFF;
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.base};
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const InfoWrapper = styled.div`
  span {
    color: #FFF;
  }
`;

export const Content = styled.div`
  background: #FFF;
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const ButtonWrapper = styled.div`
  max-width: 180px;
  border: 1px solid brown;

  button {
    width: 100%;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;

export const HeaderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  select {
    width: 150px;
  }

  span {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const List = styled.div``;