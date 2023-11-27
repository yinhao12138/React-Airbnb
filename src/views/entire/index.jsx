import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEntireList } from "@/store/features/entire";
import { EntireWrapper } from "./style";
import { Spin } from "antd";
import FilterDate from "./components/filter-date";
import Content from "./components/content";
import PagIng from "./components/paging";

const Entire = memo(() => {
  const [entireOffset, setEntireOffset] = useState(0);
  const [entireSize, setEntireSize] = useState(20);

  const { entireList, total, loading } = useSelector((state) => {
    return {
      entireList: state.entire.entireList,
      total: state.entire.total,
      loading: state.entire.loading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  function changeCurrent(current) {
    setEntireOffset(current - 1);
  }

  useEffect(() => {
    dispatch(fetchEntireList({ offset: entireOffset, size: entireSize }));
    return () => {};
  }, [entireOffset]);

  return (
    <EntireWrapper>
      <Spin spinning={loading} fullscreen />
      <FilterDate></FilterDate>
      {!!entireList.length && <Content list={entireList}></Content>}
      {!!entireList.length && (
        <PagIng size={entireSize} entireOffset={entireOffset} total={total} changeCurrent={(current) => changeCurrent(current)}></PagIng>
      )}
    </EntireWrapper>
  );
});

export default Entire;
