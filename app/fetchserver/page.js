import React from "react";
import axios from "axios";
import Image from "next/image";

const fetch = async () => {
  const response = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const data = await response.data;

  return data;
};
const Serverfetch = async () => {
  const allImages = await fetch();
  return (
    <div className="grid grid-cols-3 gap-4">
      {allImages.map((item) => {
        return (
          //
          <li
            key={item.id}
            className="border-2 border-black text-white py-2 bg-black list-none flex justify-center items-center"
          >
            <Image src={item.url} alt="cat-images" width="500" height="500" />
          </li>
        );
      })}
    </div>
  );
};

export default Serverfetch;
