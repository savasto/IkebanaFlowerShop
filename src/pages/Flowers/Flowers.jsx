import Flower from "./Flower.jsx";
import Flower1Lirio from "./Flower1Lirio.jsx";
import Flower2Strelitzia from "./Flower2Strelitzia.jsx";

export default function Flowers (){


    return (
        <>
        <div className="w3-container  w3-2018-almost-mauve">
          <h1>Fresh flowers</h1>
          <div className="w3-container w3-cell ">
            <Flower />
          </div>
          <div className="w3-container w3-cell">
            <Flower1Lirio />
          </div>
          <div className="w3-container w3-cell">
            <Flower2Strelitzia />
          </div>
        </div>
        </>


    );
}