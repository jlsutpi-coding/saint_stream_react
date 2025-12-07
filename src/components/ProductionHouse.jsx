import React from "react";

import DisneyLogo from "../assets/images/disney.png";
import MarvelLogo from "../assets/images/marvel.png";
import NationalGLogo from "../assets/images/NationalG.png";
import PixarLogo from "../assets/images/pixar.png";
import StarwarLogo from "../assets/images/starwar.png";

import DisneyVideo from "../assets/videos/disney.mp4";
import MarvelVideo from "../assets/videos/marvel.mp4";
import NationalGVideo from "../assets/videos/national-geographic.mp4";
import PixarVideo from "../assets/videos/pixar.mp4";
import StarWarsVideo from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseLists = [
    {
      id: 1,
      image: DisneyLogo,
      video: DisneyVideo,
    },
    {
      id: 2,
      image: MarvelLogo,
      video: MarvelVideo,
    },
    {
      id: 3,
      image: NationalGLogo,
      video: NationalGVideo,
    },
    {
      id: 4,
      image: PixarLogo,
      video: PixarVideo,
    },
    {
      id: 5,
      image: StarwarLogo,
      video: StarWarsVideo,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5  md:px-16">
      {/* <img src={DisneyLogo} alt="" /> */}
      {productionHouseLists.map((item) => (
        <div
          key={item.id}
          className=" border-2 transition-all ease-in-out duration-300 cursor-pointer border-gray-600 rounded-lg hover:scale-110 relative shadow shadow-black"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className=" absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-50"
          ></video>
          <img
            src={item.image}
            className="w-full z-10 hover:opacity-0"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
