import styled from "styled-components";

export const Container = styled.article`
  width: ${({ variation }) => {
    return variation === "small" ? "10rem" : variation === "medium" ? "11rem" : "12.5rem";
  }}; 
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};
`;

export const CoverWrapper = styled.div`
  width: 100%;
  height: ${({ variation }) => {
    return variation === "small" ? "13rem" : variation === "medium" ? "15rem" : "16.25rem";
  }};
  position: relative;
  cursor: pointer;
  border-radius: 30px;
  overflow: hidden;

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

  h3 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.blue["100"]};
  }
`;