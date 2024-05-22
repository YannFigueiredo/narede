import styled from "styled-components";

export const Container = styled.article`
  width: ${({width}) => width}rem;
  height: ${({height}) => height}rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;

  &:hover .cover {
    border-color: ${({variation}) => variation === "home-card" ? "#FFF" : "#000"};
    transform: scale(1);
  }

  @media screen and (max-width: 768px) {
    max-width: 7rem;
  }
`;

export const CoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: ${({theme}) => theme.spacing.radius.normal};
  overflow: hidden;
  border: 2px solid #000;
  transition: all linear .2s;
  transform: scale(0.9);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (max-width: 768px) {
    max-width: 7rem;
    max-height: 7rem;
  }
`;

export const DetailsWrapper = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  h3, h4 {
    text-transform: uppercase;
  }

  h3 {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  h4 {
    color: ${({theme}) => theme.colors.sectionTitle};
    font-size: ${({theme}) => theme.fontSize.small};
    font-weight: 700;
  }
`;