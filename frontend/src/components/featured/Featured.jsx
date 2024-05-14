import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Categorias"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Categorias</option>
            <option value="adventure">Experto</option>
            <option value="comedy">Avanzado</option>
            <option value="crime">Intermedio</option>
            <option value="fantasy">Femenil</option>
            <option value="historical">Titan</option>
            <option value="horror">Bicicletas electricamente asistidas</option>
            <option value="romance">Novatos</option>
            <option value="sci-fi">Contrareloj</option>

          </select>
        </div>
      )}
      <img style={{ backgroundImage: `url('https://markrossstudio.com/wp/wp-content/uploads/2014/09/MRoss_CPowersRacingB-e1410990826225.jpg')` }} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <ControlPointIcon />
            <span>Ver mas</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Acerca de nosotros</span>
          </button>
        </div>
      </div>
    </div>
  );
}