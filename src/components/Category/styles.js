import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  height: max-content;
  padding: 10px 0px;
  gap: 3px;
  color: #000;
  font-weight: 400;
  max-width: 64px;
  min-width: 64px;
`;

export const DivSkeleton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  height: max-content;
  padding: 10px 0px;
  gap: 3px;
  color: #000;
  font-weight: 400;
  max-width: 64px;
  min-width: 64px;
`;

export const ImageGradient = styled.span`
  background: #feda75;
  display: grid;
  place-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-image: linear-gradient(
    25deg,
    #feda75 0%,
    #feda75 15%,
    #f58529 30%,
    #dd2a7b 70%,
    #dd2a7b 100%
  );
  box-shadow: 0px 0px 5px rgb(0 0 0 / 81%);
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 56px;
  width: 56px;
  object-fit: cover;
`;
