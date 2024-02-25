import Flower from "./Flower.jsx";
import Flower1Lirio from "./Flower1Lirio.jsx";
import Flower2Strelitzia from "./Flower2Strelitzia.jsx";

export default function Flowers (){


    return (
        <>
        <div class="w3-container w3-light-grey">
          <h1>Flowers of a season</h1>
          <div class="w3-container w3-cell">
            <Flower />
          </div>
          <div class="w3-container w3-cell">
            <Flower1Lirio />
          </div>
          <div class="w3-container w3-cell">
            <Flower2Strelitzia />
          </div>
        </div>
        </>


    );
}