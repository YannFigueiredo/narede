import styled from "styled-components";

export const Container = styled.article`
  width: ${({ variation }) => {
    return variation === "very small" ? "5rem" : variation === "small" ? "10rem" : variation === "medium" ? "11rem" : variation === "large" ? "12.5rem" : "auto";
  }}; 
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  @media screen and (max-width: 768px) {
    width: 6rem;
  }
`;

export const CoverWrapper = styled.div`
  width: ${({ variation }) => {
    return variation === "very small" ? "5rem" : "100%";
  }}; 
  height: ${({ variation }) => {
    return variation === "very small" ? "5rem" : variation === "small" ? "13rem" : variation === "medium" ? "15rem" : variation === "large" ? "16.25rem" : "auto";
  }};
  max-height: 20rem;
  position: relative;
  cursor: pointer;
  border-radius: ${({ variation }) => {
    return variation === "very small" ? "5px" : "30px";
  }};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 7rem;
    border-radius: 8px;
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

  h3, h4 {
    text-transform: uppercase;
  }

  h3 {
    color: #FFF;
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  h4 {
    color: ${({theme}) => theme.colors.sectionTitle};
    font-size: ${({theme}) => theme.fontSize.small};
    font-weight: 700;
  }
`;