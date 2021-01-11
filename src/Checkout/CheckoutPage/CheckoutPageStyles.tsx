import styled from "styled-components";

export const ContainerOuter = styled.div`
  padding: ${(p) => `${p.theme.spacing[5]}px`};
`;

export const ContainerTotal = styled.div`
  background: ${(p) => p.theme.palette.surface2};
  color: ${(p) => p.theme.palette.onSurface2};
  padding: ${(p) => `${p.theme.spacing[5]}px`};
  margin-top: ${(p) => `${p.theme.spacing[5]}px`};
  & > h1 {
    color: ${(p) => p.theme.palette.onSurface2};
    margin: 0;
    padding: 0;
  }
  & > p {
    padding-top: ${(p) => `${p.theme.spacing[3]}px`};
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.h1.fontSize};
  padding: ${(p) => `${p.theme.spacing[3]}px 0`};
  width: 100%;
`;

export const Total = styled.p`
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.p.fontSize};
`;
