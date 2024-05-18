import React from "react";
import Image from "next/image";
const ImageLogo = () => {
  return (
    <Image
      height={200}
      priority
      alt="google logo"
      width={300}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    />
  );
};

export default ImageLogo;
