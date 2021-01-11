import styled from "styled-components";
import starGray from "../img/starGray.svg";
import starGold from "../img/starGold.svg";

export const Button = styled.button`
  align-items: center;
  background: ${(p) => p.theme.palette.primary};
  color: ${(p) => p.theme.palette.onPrimary};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  & > img {
    width: 30px;
  }
`;

export const ContainerInfo = styled.div<{ hasPoster: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${(p) =>
    p.hasPoster
      ? `0 ${p.theme.spacing[5]}px`
      : `0 ${p.theme.spacing[5]}px 0 0`};
`;

export const ContainerInfoOuter = styled.div`
  display: flex;
`;

export const ContainerOuter = styled.div`
  background: ${(p) => p.theme.palette.surface2};
  color: ${(p) => p.theme.palette.onSurface2};
  display: flex;
  justify-content: space-between;
  padding: ${(p) => `${p.theme.spacing[5]}px`};
  margin-bottom: ${(p) => `${p.theme.spacing[5]}px`};
`;

export const Plot = styled.p`
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.p.fontSize};
  width: 100%;
`;

export const Poster = styled.img`
  width: 100px;
`;

export const Runtime = styled.p`
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.p.fontSize};
  padding-bottom: ${(p) => `${p.theme.spacing[3]}px`};
  width: 100%;
`;

export const StarsBg = styled.div`
  display: flex;
  background-image: url(${starGray});
  width: 130px;
  height: 28px;
  background-size: 26px;
  background-repeat: repeat-x;
  padding-bottom: ${(p) => `${p.theme.spacing[2]}px`};
`;

export const StarsFilled = styled.div<{ width: number }>`
  display: flex;
  background-image: url(${starGold});
  width: ${(p) => `${p.width}%`};
  height: 28px;
  background-size: 26px;
  background-repeat: repeat-x;
  padding-bottom: ${(p) => `${p.theme.spacing[2]}px`};
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.palette.onBackground};
  font-size: ${(p) => p.theme.typography.h1.fontSize};
  padding-bottom: ${(p) => `${p.theme.spacing[3]}px`};
  width: 100%;
`;
