import styled from "styled-components";

export const ContainerOuter = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: ${(p) => `${p.theme.spacing[5]}px`};
  padding-top: 86px;
`;

export const Input = styled.input`
  background: ${(p) => p.theme.palette.surface2};
  border: none;
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.p.fontSize};
  padding: ${(p) => `${p.theme.spacing[5]}px`};
  width: 100%;
`;

export const Submit = styled.button`
  align-items: center;
  background: ${(p) => p.theme.palette.primary};
  color: ${(p) => p.theme.palette.onPrimary};
  cursor: pointer;
  display: flex;
  font-size: ${(p) => p.theme.typography.p.fontSize};
  justify-content: center;
  max-width: 63px;
  padding: ${(p) => `${p.theme.spacing[5] - 1}px`};
`;
