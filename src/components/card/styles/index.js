import styled from "styled-components";
import { motion } from "framer-motion";

export const CardArticle = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 149px;
  background-color: #393e50;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "stretch"};
  text-align: left;
  gap: 5px;
`;

export const CardSpan = styled.span`
  font-size: ${(props) => props.fontSize};
`;

export const CardImg = styled.img`
  height: 54px;
`;

export const CardDelete = styled.span`
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;

  &:focus,
  &:hover {
    color: #ff6053;
  }
`;
