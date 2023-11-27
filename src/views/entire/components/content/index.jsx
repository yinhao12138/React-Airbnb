import React, { memo } from "react";
import PropTypes from "prop-types";
import { ContentWrapper } from "./style";
import RoomItem from "@/components/room-item";

const Content = memo((props) => {
  const { list } = props;

  return (
    <ContentWrapper>
      <div className="top-box">
        <h3>{300}多处住所</h3>
        <RoomItem list={list} width={"20%"}></RoomItem>
      </div>
    </ContentWrapper>
  );
});

PropTypes.propTypes = {
  list: PropTypes.array,
};

export default Content;
