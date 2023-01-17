import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Add from "@mui/icons-material/Add";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRMZUDZMXvnhB2Bh5wtLwCGAqcPxczfdxWpWQ";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://applications-media.feverup.com/image/upload/f_auto,w_720,h_720/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <Add className="icon" />
              <ThumbUpOffAltOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>2018</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              magni quibusdam, delectus sequi eos at laboriosam voluptates est
              nam?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
