import styled from "styled-components";

export const Container = styled.article`
  width: 12.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};
`;

export const CoverWrapper = styled.div`
  width: 100%;
  height: 16.25rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .7);
  padding-bottom: ${({theme}) => theme.spacing.padding.small};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${({theme}) => theme.spacing.padding.big_small};
  text-align: center;
  opacity: 0;
  transition: all linear .3s;

  &:hover {
    opacity: 1;
  }
  
  span {
    color: #FFF;
    font-weight: 500;
  }
`;

export const DetailsWrapper = styled.div`
  text-align: center;
`;