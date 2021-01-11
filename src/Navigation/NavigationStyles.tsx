import styled from "styled-components";

export const ContainerCheckout = styled.div`
  background: ${(p) => p.theme.palette.surface2};
  color: ${(p) => p.theme.palette.onSurface2};
  min-width: 36px;
  font-size: ${(p) => p.theme.typography.p.fontSize};
  padding: ${(p) => `${p.theme.spacing[5]}px`};
  & > a {
    color: ${(p) => p.theme.palette.onSurface2};
    display: flex;
  }
`;

export const ContainerOuter = styled.nav`
  background: ${(p) => p.theme.palette.surface1};
  color: ${(p) => p.theme.palette.onSurface1};
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerSearch = styled.div`
  align-items: center;
  display: flex;
  font-size: ${(p) => p.theme.typography.p.fontSize};
  height: 100%;
  padding: ${(p) => `0 ${p.theme.spacing[5]}px`};
  & > a {
    color: ${(p) => p.theme.palette.onSurface1};
    display: flex;
  }
`;

export const Link = styled.li`
  & a {
    text-decoration: none;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  padding: ${(p) => ` 0 ${p.theme.spacing[5]}px`};
  & > a {
    color: ${(p) => p.theme.palette.onSurface1};
    font-size: ${(p) => p.theme.typography.p.fontSize};
    text-decoration: none;
  }
`;
