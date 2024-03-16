"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const Fetchdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );

      const data = response.data;

      setData(data);
    };

    fetchData();
  }, []);
  return (
    <ul className="grid grid-cols-4 mx-10 gap-2 my-10">
      {data.map((item) => {
        return (
          <li
            className="border-2 border-black flex justify-center items-center"
            key={item.id}
          >
            <Image
              className="object-cover bg-cover bg-center bg-no-repeat "
              src={item.url}
              alt="Cat-Image"
              width="500"
              height="500"
            ></Image>
          </li>
        );
      })}
    </ul>
  );
};

export default Fetchdata;
