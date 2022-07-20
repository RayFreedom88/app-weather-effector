import styled from "styled-components";
import { motion } from "framer-motion";

export const WeatherSection = styled.section`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  position: fixed;
  top: calc(50% - 675px / 2);
  left: calc(50% - 320px / 2);
  height: 675px;
  width: 320px;
  background-color: #393e5b;
  overflow: hidden;
  color: #ffffff;
`;

export const WeatherWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2) inset;
  padding: 15px;
`;

export const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 10px;
  overflow: hidden;
`;

export const WeatherTitle = styled.h2`
  margin: 0 10px;
  margin-top: 20px;
  text-align: left;
`;

export const WeatherScroll = styled.div`
  width: 100%;
  height: 493px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 5px;
  padding-left: 10px;
`;

export const WeatherScrollWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 270px;
  height: 100%;
  background: inherit;
`;
