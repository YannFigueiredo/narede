import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
`;

export const PictureConfig = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.normal};

  img {
    max-width: 15.625rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.normal};
  }
`;

export const Configuration = styled.div`
  padding-top: ${({theme}) => theme.spacing.between_elements.between_sections};
  border-top: 0.063rem solid ${({theme}) => theme.colors.blue["100"]};  
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  span {
    color: ${({theme}) => theme.colors.gray["100"]};
    font-size: ${({theme}) => theme.fontSize.base_large};
  }

  button {
    grid-column: 2;
    max-width: 9.375rem;
  }

  .option-label {
    text-align: right;
  }
`;

export const Label = styled.span`
  grid-column: 1/2;
  color: #FFF;
  font-weight: 700;

  &::after {
    content: "";
    grid-column: 2/3;
  }
`;

export const OptionsWrapper = styled.div`

`;