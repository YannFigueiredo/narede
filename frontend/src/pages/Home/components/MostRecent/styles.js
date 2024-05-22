import styled from "styled-components";
import bgSection from "assets/images/bg_section_home.png";

export const Container = styled.div`
  padding: 0;
  overflow-x: hidden;
  background-color: rgb(0, 115, 155);
  background-image: url(${bgSection});
  background-size: contain;
  background-position: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  overflow-y: hidden;

  @media screen and (max-width: 992px) {
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #000;
    display: inline-block;
    padding: ${({theme}) => theme.spacing.padding.very_small};
    background-color: #FFF;
    border-radius: ${({theme}) => theme.spacing.radius.small};
    text-transform: lowercase;
    font-size: ${({theme}) => theme.fontSize.large};
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  overflow-x: auto;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  overflow-y: hidden;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
  }

  & {
    overflow: -moz-scrollbars-none;
    overflow-x: auto;
  }

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.small};
    justify-content: center;
  }
`;