import styled from "styled-components";

export const Container = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  animation: fadeIn .4s ease-in;
  transition: all linear .3s;
  display: ${({isEnabled}) => isEnabled ? 'flex' : 'none'};
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 40px 10px;
  width: 100%;
  max-width: 400px; 
  background: radial-gradient(circle at center, rgb(0, 72, 97), ${({theme}) => theme.colors.backgroundPrimary});
`;

export const Button = styled.div`
  transition: all linear .3s;
  color: #000;
  background-color: ${({theme}) => theme.colors.backgroundLightBlue};
  text-decoration: none;
  font-size: ${({theme}) => theme.fontSize.regular};
  font-weight: 700;
  display: inline-block;
  padding: ${({theme}) => theme.spacing.padding.small} ${({theme}) => theme.spacing.padding.normal};
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;

  &:hover {
    color: #FFF;
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    font-weight: 700;
  }
`;