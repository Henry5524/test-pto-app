import { useState, useEffect } from "react";

interface ISwitch {
  active: boolean;
  onChange: () => void;
}

export default function Switch({ active, onChange }: ISwitch) {
  const [toggle, setToggle] = useState(active);

  useEffect(() => {
    setToggle(active);
  }, [active]);

  const onChangeHandle = () => {
    onChange();
    setToggle(!toggle);
  };

  return (
    <label
      className={`${
        toggle ? "border-[#9D71FD]" : "border-[#A39CB5]"
      } switch relative inline-block w-[22px] h-[14px] border-2 border-solid rounded-[16px]`}
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        onChange={onChangeHandle}
        checked={toggle}
      />
      <span
        className={`${
          toggle ? "bg-[#9D71FD]" : "bg-[#fff]"
        } slider absolute cursor-pointer top-0 left-0 right-0 bottom-0  transition duration-400 rounded-full`}
      >
        <span
          className={`${
            toggle
              ? "bg-[#fff] translate-x-[7px] -translate-y-2/4]"
              : "bg-[#A39CB5]"
          } before absolute content w-[7px] h-[7px] left-[2px] top-[50%] translate-y-[-50%] transition duration-400 rounded-full`}
        ></span>
      </span>
    </label>
  );
}
