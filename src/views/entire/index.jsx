import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getBanners } from "@/store/features/entire";

const Entire = memo(() => {
  const { banners } = useSelector((state) => {
    return {
      banners: state.entire.banners,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  function getBannersMethod() {
    dispatch(getBanners(["apple", "orange"]));
  }
  return (
    <div>
      <h4>{"entire"}</h4>
      <ul>
        {banners.map((it, index) => {
          return <ol key={index}>{it}</ol>;
        })}
      </ul>
      <button onClick={(e) => getBannersMethod()}>push</button>
    </div>
  );
});

export default Entire;
