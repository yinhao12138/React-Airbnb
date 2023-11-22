import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/components/scroll-view";

const SectionHeader = memo((props) => {
  const { tabsNames = [], selectionTabsMethod } = props;

  const [selectedId, setSelectedId] = useState(0);

  function handleSwitchTabs(n, index) {
    setSelectedId(index);
    selectionTabsMethod(n);
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabsNames.map((it, index) => {
          return (
            <div className={classNames("item", { selection: selectedId === index })} key={index} onClick={(e) => handleSwitchTabs(it, index)}>
              {it}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionHeader.propTypes = {
  tabsNames: PropTypes.array,
  selectionTabsMethod: PropTypes.func,
};

export default SectionHeader;
