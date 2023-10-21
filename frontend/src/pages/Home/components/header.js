import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: rgba(255, 255, 255, .7);
    transition: all linear .4s;
    text-decoration: none;
  }

  a:hover {
    color: rgba(255, 255, 255, 1);
  }
`;