import React from "react";
import Nature from "@/public/Nature.jpg";
import Image from "next/image";

const Showimage = () => {
  return (
    <div>
      <Image src={Nature} alt="Nature image "></Image>
    </div>
  );
};

export default Showimage;
