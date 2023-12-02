import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 999; //解决脱离文本流图片优先级问题
  position: ${(props) => props.$isfixed};
  top: 0;
`;
