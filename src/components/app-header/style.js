import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  top: 0;
  height: 80px;
  align-items: center;
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 999; //解决脱离文本流图片优先级问题
`;
