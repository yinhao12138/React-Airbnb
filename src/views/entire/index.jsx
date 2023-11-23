import React, { memo } from "react";
import { EntireWrapper } from "./style";
import FilterDate from "./components/filter-date";
import Content from "./components/content";
import PagIng from "./components/paging";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <FilterDate></FilterDate>
      <Content></Content>
      <PagIng></PagIng>
    </EntireWrapper>
  );
});

export default Entire;
