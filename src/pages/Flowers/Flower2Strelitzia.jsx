import "w3-css/w3.css";
import strelitzia from './strelitzia.png'
console.log(Strelitzia);


export default function Strelitzia() {
  return (
    <>
      <div class="w3-container">
        

        <div class="w3-panel w3-card w3-2018-almost-mauve">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={strelitzia} alt="Strelitzia"
        width="80%"
        />
  </div>
         
            <h3>Strelitzia</h3>

            <ul>
              <li>Name: strelitzia</li>
              <li>Color: orange-violet</li>
              <li>Origin: Panama</li>

              <h2>Price: 9€</h2>
            </ul>

      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}