import PropTypes from "prop-types";
import React, { memo, useRef, useEffect, useState } from "react";
import { LongForWrapper } from "./style";
import ScrollView from "@/components/scroll-view";

const LongFor = memo((props) => {
  const { longForList = [] } = props;

  return (
    <LongForWrapper>
      <ScrollView>
        {longForList.map((it, index) => {
          return (
            <div key={index} className="item">
              <div className="image-box">
                {<img src={it.picture_url} alt="" />}
                <div className="title-box">
                  <div>
                    <div className="city">{it.city}</div>
                    <div className="price">{`均价 ${it.price}`}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollView>
    </LongForWrapper>
  );
});

LongFor.propTypes = {
  longForList: PropTypes.array,
};

export default LongFor;
