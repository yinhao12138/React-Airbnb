import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEntireList } from "@/store/features/entire";
import { headerConfigFixed } from "@/store/features/main";
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

  // 设置顶部样式
  useEffect(() => {
    dispatch(headerConfigFixed("fixed"));
  }, [dispatch]);

  function changeCurrent(current) {
    // 请求接口数据
    const requestListCount = current - 1;
    const offset = requestListCount * 20;
    const size = (requestListCount + 1) * 20;
    setEntireOffset(offset);
    setEntireSize(size);
  }

  useEffect(() => {
    window.scrollTo(0, 0); //window 自动定位到顶部
    dispatch(fetchEntireList({ offset: entireOffset, size: entireSize }));
    return () => {};
  }, [entireOffset]);

  return (
    <EntireWrapper>
      <Spin spinning={loading} fullscreen />
      <FilterDate></FilterDate>
      {!!entireList.length && <Content list={entireList}></Content>}
      {!!entireList.length && (
        <PagIng size={entireSize} entireOffset={entireOffset / 20} total={total} changeCurrent={(current) => changeCurrent(current)}></PagIng>
      )}
    </EntireWrapper>
  );
});

export default Entire;
