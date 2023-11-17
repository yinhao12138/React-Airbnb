import styled from "styled-components";

export const LeftWrapper = styled.div`
  padding-left: 80px;
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};
  cursor: pointer;
`;
