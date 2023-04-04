import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  margin-top: 5px;
  min-height: 250px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BoxSkeleton = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 4px;
`;
