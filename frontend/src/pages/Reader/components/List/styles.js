import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: ${({theme}) => theme.colors.gray["100"]};
    text-align: left;
  }

  tr {
    border: 1px solid ${({theme}) => theme.colors.gray["100"]};
  }

  tr th {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-weight: 700;
    padding: ${({theme}) => theme.spacing.padding.big_small} ${({theme}) => theme.spacing.padding.small};
    overflow: ellipsis;
  }

  tr td {
    color: ${({theme}) => theme.colors.blue["100"]};
    padding: ${({theme}) => theme.spacing.padding.big_small} ${({theme}) => theme.spacing.padding.small};
    overflow: ellipsis;
  }
`;