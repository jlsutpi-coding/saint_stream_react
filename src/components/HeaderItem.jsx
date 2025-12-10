import { useNavigate } from "react-router-dom";

/* eslint-disable no-unused-vars */
const HeaderItem = ({ name, Icon, link }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (link) {
          navigate(link);
        }
      }}
      className=" text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 "
    >
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;
