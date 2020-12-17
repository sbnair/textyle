import ReactTooltip from "react-tooltip";
import TabButton from "ui/sidebar/TabButton";
import tooltips from "resources/tooltips";
import * as tabs from "resources/tabs";
import { dividerBorderColor } from "resources/styles";
import { TOOLTIP_DELAY } from "ui/constants";
import { mdiMap, mdiViewModule, mdiContentSave, mdiUpload, mdiHelpCircleOutline, mdiCog } from "@mdi/js";
import { ReactComponent as Logo } from 'resources/logo.svg';

const TabSelector = () => {
  const sectionsData = [
    { path: tabs.TAB_TILES, icon: mdiViewModule },
    { path: tabs.TAB_MAP, icon: mdiMap },
    { path: tabs.TAB_IMPORT, icon: mdiUpload },
    { path: tabs.TAB_EXPORT, icon: mdiContentSave },
    { path: tabs.TAB_SETTINGS, icon: mdiCog },
    { path: tabs.TAB_HELP, icon: mdiHelpCircleOutline },
  ];

  const sections = sectionsData.map((section) => (
    <div key={section.path} className="flex" data-testid={section.path}>
      <TabButton routerPath={section.path} iconPath={section.icon} />
      <ReactTooltip id={section.path} place="right" effect="solid" delayShow={TOOLTIP_DELAY}>
        {tooltips.get(section.path)}
      </ReactTooltip>
    </div>
  ));

  return (
    <div className={`flex flex-col justify-end bg-black border-r ${dividerBorderColor}`}>
      <div className='w-full flex-1'>
        <div className='w-full px-2 py-4'>
          <Logo />
        </div>
      </div>
      {sections}
    </div>);
};

export default TabSelector;