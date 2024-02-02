import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
`;

export const Chat = styled.div`
  background: ${({theme}) => theme.colors.blue["400"]};
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: 50%;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: ${({theme}) => theme.spacing.padding.small};
  margin-right: ${({theme}) => theme.spacing.padding.small};
  cursor: pointer;
  transition: all linear .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(.9);
  z-index: 999;

  svg {
    fill: #FFF;
    line-height: 1;
    font-size: 1.875rem;
  }

  &:hover {
    background: ${({theme}) => theme.colors.blue["300"]};
    transform: scale(1);

    svg {
      fill: ${({theme}) => theme.colors.blue["900"]};
    }
  }
`;

export const SubmitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  max-width: 50rem;
  margin: auto;
  padding: 0 ${({theme}) => theme.spacing.padding.large};

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 992px) {
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
    grid-template-columns: repeat(1, 1fr);
  }
`;
