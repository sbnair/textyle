import React from "react";
import Tool from "ui/canvas/Tool";
import { dividerBorderColor, toolbarHeight } from "resources/styles";
import { mdiPencil, mdiPail, mdiSelect, mdiCursorDefaultOutline, mdiCursorMove } from "@mdi/js";
import * as tools from "resources/tools";

const Toolbar = () => {
  return (
    <nav className={`flex flex-row items-stretch bg-black border-b border-r ${dividerBorderColor} ${toolbarHeight}`}>
      <div className="flex flex-row justify-start items-center flex-grow">
        <Tool iconPath={mdiCursorDefaultOutline} tool={tools.DEFAULT_TOOL} />
        <Tool iconPath={mdiPencil} tool={tools.PLACEMENT_TOOL} />
        <Tool iconPath={mdiPail} tool={tools.FILL_TOOL} />
        <Tool iconPath={mdiCursorMove} tool={tools.MOVE_TOOL} />
      </div>
    </nav>
  );
};

export default Toolbar;
