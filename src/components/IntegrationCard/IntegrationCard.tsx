import Image from "next/image";
import Switch from "../Switch/Switch";

export interface ItemProps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  active: boolean;
}

interface ICardInterface {
  item: ItemProps;
  handleSwitchToggle: (id: number) => any;
}

function IntegrationCard({
  item: { id, icon, title, subtitle, active },
  handleSwitchToggle,
}: ICardInterface) {
  const handleSwitch = () => {
    handleSwitchToggle(id);
  };
  const spanArr = [1, 2, 3];

  return (
    <div className="card-box">
      {spanArr.map((item) => (
        <span
          key={item}
          className={`hidden xl:block ${active ? "active z-10" : ""}`}
        />
      ))}

      <div className="flex align-middle">
        <Image
          src={icon}
          alt="Icon"
          className="w-12 h-12 rounded-xl align-middle"
        />
        <div className="ml-2">
          <div className="font-[510] text-base leading-[160%]">{title}</div>
          <div className="font-normal text-xs leading-[160%]">{subtitle}</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Switch active={active} onChange={handleSwitch} />
      </div>
    </div>
  );
}

export default IntegrationCard;
