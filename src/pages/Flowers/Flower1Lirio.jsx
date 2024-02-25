import "w3-css/w3.css";
import lirio from './lirio.png'
console.log(lirio);


export default function Lirio() {
  return (
    <>
      <div class="w3-container">
        <h2>Flower</h2>

        <div class="w3-panel w3-card w3-sand">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={lirio} alt="White lirio"
        width="80%"
        />
  </div>
         
            <h3>Lirio</h3>

            <ul>
              <li>Name: lirio</li>
              <li>Color: white</li>
              <li>Origin: Spain</li>

              <h2>Price: 10€</h2>
            </ul>

      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}