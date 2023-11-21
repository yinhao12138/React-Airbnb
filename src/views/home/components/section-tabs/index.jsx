import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import classNames from "classnames";

const SectionHeader = memo((props) => {
  const { tabsNames = [], selectionTabsMethod } = props;

  const [selectedId, setSelectedId] = useState(0);

  function handleSwitchTabs(n, index) {
    setSelectedId(index);
    selectionTabsMethod(n);
  }

  return (
    <SectionTabsWrapper>
      {tabsNames.map((it, index) => {
        return (
          <div key={index} onClick={(e) => handleSwitchTabs(it, index)}>
            <div className={classNames("item", { selection: selectedId === index })}>{it}</div>
          </div>
        );
      })}
    </SectionTabsWrapper>
  );
});

SectionHeader.propTypes = {
  tabsNames: PropTypes.array,
  selectionTabsMethod: PropTypes.func,
};

export default SectionHeader;
