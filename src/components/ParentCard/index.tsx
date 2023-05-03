import React from "react";
import Image from "next/image";

interface ParentCardProps {
  direction?: string;
  icon: any;
}

function index({ direction, icon }: ParentCardProps) {
  return (
    <div
      className={`parent-box before:hidden after:hidden xl:before:block xl:after:block ${direction}`}
    >
      <Image
        src={icon}
        alt="ParentIcon"
        className="absolute z-10  top-[-30px] w-[86px] h-[86px] rounded-[10px] object-cover"
      />
      <div className="text-center text-lg text-textPrimary font-bold mb-[6px] leading-[140%]">
        Laura Robson
      </div>
      <div className="text-center font-normal text-sm leading-[160%] text-textSecondary mb-5">
        HR Director
      </div>
      <div className="text-center font-normal text-base leading-[160%] text-textPrimary">
        "I want to lower PTO liability and keep my employees happy. I want to
        lower PTO liability."
      </div>
    </div>
  );
}

export default index;
