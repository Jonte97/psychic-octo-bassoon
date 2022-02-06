import React from "react";

interface ImgTextProps {
  img: string;
  text: string;
  headline: string;
  imgRight: boolean;
}

const ImgText: React.FC<ImgTextProps> = (props: ImgTextProps) => {
  return (
    <div className="img-text-component">
      <div
        className={`img-text-wrapper ${
          props.imgRight ? "img-text-wrapper-right" : "img-text-wrapper-left"
        }`}
      >
        {props.imgRight ? (
          <React.Fragment>
            <img src={props.img} alt="" />
            <div className="text-section">
              <h1>{props.headline}</h1>
              <p className="paragraph">{props.text}</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="text-section">
              <h1>{props.headline}</h1>
              <p className="paragraph">{props.text}</p>
            </div>
            <img src={props.img} alt="" />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default ImgText;
