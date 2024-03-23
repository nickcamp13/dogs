import { useState } from "react";
import axios from "axios";
import "./DogDisplay.css";
const ACCESS_KEY =
  "live_XTTaFtvnGOqoe7UKRbwSqX7vO9HCQBALiH5NdZmafYXTQpUa009VTeFeeJKfCXKg";

const DogDisplay = ({ banList, changeList }) => {
  const [dogData, setDogData] = useState();
  const [imgUrl, setImgUrl] = useState("");

  const getDog = async () => {
    const URL = `https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=true`;
    const response = await axios.get(URL);
    const data = response.data[0];
    const breedsData = data.breeds[0];
    setImgUrl(data.url);
    setDogData({
      name: breedsData.name,
      weight: breedsData.weight.imperial,
      temperament: breedsData.temperament,
      lifeSpan: breedsData.life_span,
    });
  };

  return (
    <div id="content">
      {dogData && (
        <div id="data">
          <h3>{dogData.name}</h3>
          <div id="data-buttons">
            <button>{dogData.name}</button>
            <button>{dogData.weight}</button>
            <button>{dogData.temperament}</button>
            <button>{dogData.lifeSpan}</button>
          </div>
          <img src={imgUrl} alt={name} />
        </div>
      )}
      <button id="discover" onClick={getDog}>
        🔀 Discover
      </button>
    </div>
  );
};

export default DogDisplay;
