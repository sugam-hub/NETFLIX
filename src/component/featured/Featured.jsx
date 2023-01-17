import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
      <div className="featured">
          {type && (
              <div className="category">
                  <span>{ type === "movie"? "Movie" : "Series" }</span>
                  <select name="genre" id="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="historical">Historical</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-fi</option>
                      <option value="thriller">Thriller</option>
                      <option value="western">Western</option>
                      <option value="animation">Animation</option>
                      <option value="drama">Drama</option>
                      <option value="documentary">Documentary</option>
                  </select>
              </div>
          )}
          <img src="https://images3.alphacoders.com/913/thumb-1920-913996.jpg" alt="" />
          <div className="info">
              <img src="https://picfiles.alphacoders.com/110/110972.png" alt="" />
              <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae quod illum. Quasi, cupiditate mollitia! Deleniti cum dignissimos voluptate, quasi, vitae commodi dolor porro aspernatur, ratione expedita eum? Earum, iure!</span>
              <div className="buttons">
                  <button className="play">
                      <PlayArrowIcon />
                      <span>Play</span>
                  </button>
                  <button className="more">
                      <InfoOutlinedIcon />
                      <span>Info</span>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Featured