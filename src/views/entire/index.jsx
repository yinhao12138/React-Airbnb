import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEntireList } from "@/store/features/entire";
import { EntireWrapper } from "./style";
import FilterDate from "./components/filter-date";
import Content from "./components/content";
import PagIng from "./components/paging";

const Entire = memo(() => {
  const [entireOffset, setEntireOffset] = useState(0);
  const [entireSize, setEntireSize] = useState(20);

  const { entireList, total } = useSelector((state) => {
    return {
      entireList: state.entire.entireList,
      total: state.entire.total,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireList({ offset: entireOffset, size: entireSize }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <FilterDate></FilterDate>
      <Content></Content>
      <PagIng></PagIng>
    </EntireWrapper>
  );
});

export default Entire;
