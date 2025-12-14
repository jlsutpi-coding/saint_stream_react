import React, { useEffect, useState } from "react";

import GlobalApi from "../../../services/GlobalApi";
import { RiArrowDownSLine } from "react-icons/ri";

const Episodes = ({ detail }) => {
  const { id, number_of_episodes, number_of_seasons } = detail;
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodesOfSeason = async () => {
      const response = await GlobalApi.getEpisdoesOfSeries(
        id,
        number_of_seasons
      );
      setEpisodes(response.data.episodes);
    };
    fetchEpisodesOfSeason();
  }, [id, number_of_seasons]);

  return (
    <div className=" py-10 ">
      {/* header */}
      <div className="mb-6 flex justify-between items-center ">
        <h4 className=" font-bold text-[24px] leading-8 tracking-[0.5%]">
          {number_of_seasons}- {number_of_episodes} Episodes
        </h4>
        <button className=" flex items-center gap-2.5 bg-[#0D0C0F] cursor-pointer rounded-lg py-1 px-4 border border-[#28262D] ">
          <span className=" text-[12px] font-bold leading-[22px] tracking-[0.5%]">
            Season {number_of_seasons}
          </span>
          <RiArrowDownSLine size={16} />
        </button>
      </div>
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className=" max-w-[301px] relative cursor-pointer shrink-0"
          >
            <img
              src={`${GlobalApi.IMAGE_BASE_URL}/${episode.still_path}`}
              alt="episode-image"
              className=" rounded-2xl"
            />
            <div className="absolute bg-linear-to-t from-black to-transparent bottom-0 py-2 px-5 w-full rounded-b-2xl -left-px">
              <h4 className=" font-bold text-[16px] leading-6 tracking-[0.5%] text-[#F9F9F9]">
                {" "}
                {episode.name}
              </h4>
              <p className="pt-1 text-[#78828A] text-[12px] font-normal leading-5 tracking-[0.5%]">
                {episode.overview.length > 70
                  ? episode.overview.slice(0, 70) + "..."
                  : episode.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
