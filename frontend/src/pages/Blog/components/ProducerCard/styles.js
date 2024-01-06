import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  padding: ${({theme}) => theme.spacing.padding.big_small} 0;

  img {
    max-width: 35px;
    border-radius: 50%;
  }

  #follow-btn {
    text-transform: uppercase;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #FFF;
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.regular};
  }
`;