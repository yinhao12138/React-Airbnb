import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import { PageIngWrapper, PaginationWrapper } from "./style";

const Paging = memo((props) => {
  const { size, total, entireOffset, changeCurrent } = props;
  function onShowSizeChange(current, size) {
    changeCurrent(current);
  }
  const current = entireOffset + 1;
  const startCount = entireOffset * 20 + 1;
  const endCount = (entireOffset + 1) * 20;

  return (
    <PageIngWrapper>
      <div className="box">
        <div className="pagination">
          <PaginationWrapper
            showSizeChanger={false}
            onChange={onShowSizeChange}
            defaultPageSize={size}
            defaultCurrent={current}
            total={total}></PaginationWrapper>
        </div>

        <div className="desc">
          第{startCount} - {endCount} 个房源,超过 {total} 个
        </div>
      </div>
    </PageIngWrapper>
  );
});

Paging.propTypes = {
  size: PropTypes.number,
  entireOffset: PropTypes.number,
  total: PropTypes.number,
  changeCurrent: PropTypes.func,
};

export default Paging;
