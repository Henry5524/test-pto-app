import IntegrationCard from "@/components/IntegrationCard/IntegrationCard";
import ParentCard from "@/components/ParentCard";
import Tabs from "@/components/Tabs/Tabs";
import Ava from "../assets/images/ava.jpeg";
import { SetStateAction, useEffect, useState } from "react";
import { sericesArray } from "@/constants/serviceArray";

type CardType = "small" | "medium" | "enterprise";

type ActiveCardsType = {
  [key in CardType]: string[];
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("small");
  const [direction, setDirection] = useState("");

  const [array, setArray] = useState(sericesArray);

  const [activeCards, setActiveCards] = useState<ActiveCardsType | any>({
    small: [],
    medium: [],
    enterprise: [],
  });

  useEffect(() => {
    let updatedArray = [...array];

    // set active cards for the current tab
    updatedArray.forEach((item) => {
      item.active = activeCards[activeTab].includes(item.id);
    });

    setArray(updatedArray);
  }, [activeTab, activeCards]);

  useEffect(() => {
    let updatedArray = [...array];

    switch (activeTab) {
      case "small":
        updatedArray[5].active = true;
        break;
      case "medium":
        updatedArray[0].active = true;
        updatedArray[1].active = true;
        break;
      case "enterprise":
        updatedArray[2].active = true;
        updatedArray[3].active = true;
        updatedArray[4].active = true;
        updatedArray[5].active = true;
        break;
    }

    setArray(updatedArray);
  }, [activeTab]);

  useEffect(() => {
    const activeLeft = array
      .slice(0, Math.floor(array.length / 2))
      .some((item) => item.active);
    const activeRight = array
      .slice(Math.floor(array.length / 2))
      .some((item) => item.active);

    if (activeLeft && activeRight) {
      setDirection("left right");
    } else if (activeLeft) {
      setDirection("left");
    } else if (activeRight) {
      setDirection("right");
    } else {
      setDirection("");
    }
  }, [array]);

  const handleSwitchTab = (val: SetStateAction<string>) => {
    setActiveTab(val);
  };

  const handleSwitchToggle = (id: number) => {
    const newArray = array.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      } else {
        return item;
      }
    });

    setArray(newArray);

    // updating active cards for the current tab
    setActiveCards((prevActiveCards: any) => {
      return {
        ...prevActiveCards,
        [activeTab]: newArray
          .filter((item) => item.active)
          .map((item) => item.id),
      };
    });
  };

  return (
    <div className="container mx-[auto] sm:px-5 ">
      <div className="text-center text-3xl font-bold xl:text-[64px] leading-[130%] text-textPrimary my-6">
        Easy Turn-Key Integration
      </div>
      <div className="text-center text-base leading-[120%] xl:text-lg xl:leading-[160%] max-w-[324px] xl:max-w-[760px] w-full mx-[auto] text-textSecondary mb-[33px] xl:mb-[50px]">
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </div>
      <Tabs headless={true} onChange={handleSwitchTab}>
        <Tabs.Tab id={"small"} title={"Small Buisiness"} />
        <Tabs.Tab id={"medium"} title={"Medium Buisiness"} />
        <Tabs.Tab id={"enterprise"} title={"Enterprise"} />
      </Tabs>
      <div className="wrapper flex-col xl:flex-row">
        <div className="left-boxes hidden sm:block">
          {array.slice(0, 3).map((item) => (
            <IntegrationCard
              item={item}
              key={item.id}
              handleSwitchToggle={handleSwitchToggle}
            />
          ))}
        </div>
        <ParentCard icon={Ava} direction={direction} />
        <div className="right-boxes">
          {array.slice(3, 6).map((item) => (
            <IntegrationCard
              item={item}
              key={item.id}
              handleSwitchToggle={handleSwitchToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
