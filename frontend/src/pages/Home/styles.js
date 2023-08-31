import styled from "styled-components";

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

