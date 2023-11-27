import React, { memo, useState } from "react";
import { FilterDateWrapper } from "./style";
import filterData from "@/assets/data/filter_data";
import classNames from "classnames";

const FilterDate = memo(() => {
  const [checkList, setCheckList] = useState([]);

  function topClick(i) {
    // 顶部根据条件暂无接口
    const newCheckList = [...checkList];
    if (checkList.length && newCheckList.includes(i)) {
      const itemIndex = newCheckList.findIndex((it) => it === i);
      newCheckList.splice(itemIndex, 1);
    } else {
      newCheckList.push(i);
    }
    setCheckList(newCheckList);
  }

  return (
    <FilterDateWrapper>
      {filterData.map((it, index) => {
        return (
          <div className={classNames("item", { checkBox: checkList.includes(it) })} key={index} onClick={() => topClick(it)}>
            {it}
          </div>
        );
      })}
    </FilterDateWrapper>
  );
});

export default FilterDate;
