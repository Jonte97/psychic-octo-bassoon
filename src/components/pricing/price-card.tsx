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
  PriceIconProps:PriceIconProps;
  headerCssClasses:string;
}

interface PriceIconProps {
  type: PriceCardLevel;
  priceCSSClasses: string;
}
const PriceIcon: React.FC<PriceIconProps> = (props: PriceIconProps) => {
  console.log(props)
  if (props.type === PriceCardLevel.low) {
    return <IoIosStarOutline className={props.priceCSSClasses} />;
  } else if (props.type === PriceCardLevel.medium) {
    return <IoRocketOutline className={props.priceCSSClasses} />;
  }
  return <IoDiamondOutline className={props.priceCSSClasses} />;
};

const PriceCard: React.FC<PriceCardProps> = (props: PriceCardProps) => {
  return (
    <div className="price-card-component">
      <div className="price-card">
        <div className={`price-card-header ${props.headerCssClasses}`}>
          <div className="headline-wrapper">
            <h1 className="headline">{props.headline}</h1>
          </div>
        </div>
        <div className="price-card-body text-section">
          <div className="icon-wrapper">
            <PriceIcon priceCSSClasses={props.PriceIconProps.priceCSSClasses} type={props.PriceIconProps.type}  />
          </div>
          <h2 className="price-card-price">{props.price} kr</h2>
          <p>{props.description}</p>
        </div>
        <div className="price-card-footer"></div>
      </div>
    </div>
  );
};

export default PriceCard;
