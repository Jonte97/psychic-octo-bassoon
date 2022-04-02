import React from "react";

interface KeyImageProps {
  imagePath: string;
  slideUp: boolean;
}

const KeyImage: React.FC<KeyImageProps> = (props: KeyImageProps) => {
  return (
    <React.Fragment>
      <img
        className={`key-image image-animation`}
        src={props.imagePath}
        alt="image"
      />
      
    </React.Fragment>
  );
};

export default KeyImage;
