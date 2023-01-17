import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://cdn.pixabay.com/vimeo/689949818/Sunset%20-%20111204.mp4?width=960&hash=1278a1ceedd23eb70ad8bfcb631935618f9240f7"
      />
    </div>
  );
};

export default Watch;
