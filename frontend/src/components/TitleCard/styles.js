import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  max-width: ${({ variation }) => {
    return variation === "very small" ? "5rem" : variation === "small" ? "10rem" : variation === "medium" ? "11rem" : variation === "large" ? "12.5rem" : "auto";
  }}; 
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  background-color: ${({theme}) => theme.colors.backgroundLightBlue};
  padding: ${({theme}) => theme.spacing.padding.big_small};
  border-radius: ${({theme}) => theme.spacing.radius.small};

  .author-details {
    background-color: #FFF;
    color: #000;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);
    padding: 0.25rem;
    border: 1px solid #000;
  }

  @media screen and (max-width: 768px) {
    max-width: 7rem;
  }
`;

export const CoverWrapper = styled.div`
  max-width: ${({ variation }) => {
    return variation === "very small" ? "5rem" : "100%";
  }}; 
  height: ${({ variation }) => {
    return variation === "very small" ? "5rem" : variation === "small" ? "13rem" : variation === "medium" ? "15rem" : variation === "large" ? "16.25rem" : "auto";
  }};
  width: 100%;
  max-height: 20rem;
  position: relative;
  cursor: pointer;
  border-radius: ${({ variation }) => {
    return variation === "very small" ? "3px" : "8px";
  }};
  overflow: hidden;
  border: 1px solid #000;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 7rem;
    max-height: 7rem;
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

  @media screen and (max-width: 768px) {
    span {
      font-size: ${({theme}) => theme.fontSize.small};
    }
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