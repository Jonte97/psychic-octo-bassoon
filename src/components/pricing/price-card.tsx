import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoDiamondOutline, IoRocketOutline } from "react-icons/io5";
export enum PriceCardLevel {
  low = 0,
  medium = 1,
  high = 2,
}
interface PriceCardProps {
  headline: string;
  description: string;
  price: number;
  PriceIconProps: PriceIconProps;
  headerCssClasses: string;
  bodyCssClasses:string;
}

interface PriceIconProps {
  type: PriceCardLevel;
  priceCSSClasses: string;
}
const PriceIcon: React.FC<PriceIconProps> = (props: PriceIconProps) => {
  if (props.type === PriceCardLevel.low) {
    return <IoIosStarOutline className={props.priceCSSClasses} />;
  } else if (props.type === PriceCardLevel.medium) {
    return <IoRocketOutline className={props.priceCSSClasses} />;
  }
  return <IoDiamondOutline className={props.priceCSSClasses} />;
};

const PriceCard: React.FC<PriceCardProps> = (props: PriceCardProps) => {
  
  const isActiveInitial = (isActive:string):boolean => {
    if (isActive === "active") {
      return true;
    }
    return false;
  }

  const [open, setOpen] = React.useState<boolean>(isActiveInitial(props.bodyCssClasses));
  const body = React.useRef<HTMLDivElement>(null);
  const icon = React.useRef<HTMLDivElement>(null);


  const toggleOpen = (): void => {
    if (body && icon) {
      console.log('fire', open)
      if (open === true) {
        body.current?.classList.remove("active");
        body.current?.classList.add("not-active");
        icon.current?.classList.remove("active");
        icon.current?.classList.add("not-active");
        setOpen(false);
      } else {
        body.current?.classList.remove("not-active");
        body.current?.classList.add("active");
        icon.current?.classList.remove("not-active");
        icon.current?.classList.add("active");
        setOpen(true);
      }
    }
  };

  return (
    <div className="price-card-component">
      <div className="price-card">
        <div
          className={`price-card-header ${props.headerCssClasses}`}
          onClick={() => toggleOpen()}
        >
          <div className="headline-wrapper">
            <h1 className="headline">{props.headline}</h1>
          </div>
          <div className="drop-down-component">
            <div ref={icon} className={`icon ${props.bodyCssClasses}`}></div>
          </div>
        </div>
        <div ref={body} className={`price-card-body text-section ${props.bodyCssClasses}`}>
          <div className="icon-wrapper">
            <PriceIcon
              priceCSSClasses={props.PriceIconProps.priceCSSClasses}
              type={props.PriceIconProps.type}
            />
          </div>
          <h2 className="price-card-price">{props.price} kr</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
