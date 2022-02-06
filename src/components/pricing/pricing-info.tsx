import React from "react";
import PriceCard, { PriceCardLevel } from "./price-card";

const PricingInfo: React.FC = () => {

  return (
    <div className="pricing-info-component content-section">
			
      <div className="price-wrapper">
        <PriceCard
          price={750}
          headline="Kort session"
					headerCssClasses="low"
          description="Enskilt samtal över telefon 45 min efter avstämd tid som passar dig"
					PriceIconProps={{type:PriceCardLevel.low, priceCSSClasses: "icon priceclass-low"}}
          bodyCssClasses="active"
        />
        <PriceCard
          price={1000}
          headline="Lång session"
					headerCssClasses="medium"
          description="Enskilt samtal över telefon 1h efter avstämd tid som passar dig"
					PriceIconProps={{type:PriceCardLevel.medium, priceCSSClasses: "icon priceclass-medium"}}
          bodyCssClasses="not-active"

        />
        <PriceCard
          price={5300}
          headline="8 sessioner"
					headerCssClasses="high"
          description="8 enskilda samtal över telefon (1h) efter avstämd tid som passar dig"
					PriceIconProps={{type:PriceCardLevel.high, priceCSSClasses: "icon priceclass-high"}}
          bodyCssClasses="not-active"
        />
      </div>
			<div className="text-section">
				<p>
					Här är en text om F-skattesedel
				</p>
			</div>
    </div>
  );
};



export default PricingInfo;
