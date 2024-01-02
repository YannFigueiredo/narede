import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ${({theme}) => theme.spacing.padding.large};

  @media screen and (max-width: 992px) {
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
  }
`;