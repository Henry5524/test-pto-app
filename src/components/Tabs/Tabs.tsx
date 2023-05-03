import classNames from "classnames";
import { Key, useEffect, useState } from "react";
// import { If } from "react-conditional-components-renderer";
import { useChildrenArray } from "../../helpers/hooks/useChildrenArray";
import Tab, { TabProps } from "./Tab/Tab";

export interface TabsProps<T = string | number> {
  className?: string;
  navigationClassName?: string;
  children: JSX.Element[];
  selectedId?: T;
  onChange?: (selectedKey: T) => void;
  headless?: boolean;
  fullWidth?: boolean;
  tabContentClassName?: string;
  responsive?: boolean;
}

function Tabs<T = string | number>({ children, onChange }: TabsProps<T>) {
  const tabs = useChildrenArray<TabProps<T>>(children);
  const [selectedTab, setSelectedTab] = useState<TabProps<T>>(tabs?.[0]);

  return (
    <div className="relative">
      <ul className="flex items-center justify-center w-full whitespace-nowrap overflow-x-scroll scrollbar-hide pl-10 sm:p-0">
        {tabs?.map((tab: any) => {
          return (
            <li
              data-testid={tab?.testId}
              key={tab?.id as Key}
              onClick={() => {
                if (tab?.disabled) {
                  return;
                }
                setSelectedTab(tab);
                onChange?.(tab.id);
              }}
              className={`py-[10px] sm:px-[15px] sm:py-[9.5px] flex items-center justify-center text-center xl:border xl:rounded-xl xl:border-solid xl:border-lightGray ml-8 xl:ml-4 cursor-pointer font-bold text-sm xl:text-xs leading-[160%] ${
                selectedTab?.id === tab?.id &&
                "xl:bg-purple border-b-2 border-b-purple border-solid"
              } ${
                selectedTab?.id === tab?.id
                  ? "xl:text-white text-purple"
                  : "text-violet"
              }`}
            >
              {tab?.title}
            </li>
          );
        })}
      </ul>
      <div className="xl:hidden absolute h-px bg-lightGray left-0 right-0 -bottom-px" />
    </div>
  );
}

Tabs.Tab = Tab;

export default Tabs;
