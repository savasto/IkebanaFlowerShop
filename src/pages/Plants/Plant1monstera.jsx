import "w3-css/w3.css";
import monstera from './monstera.png'
console.log(monstera);


export default function Monstera() {
  return (
    <>
      <div class="w3-container">
        

        <div class="w3-panel w3-card w3-2018-almost-mauve">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={monstera} alt="Plant monstera"
        width="80%"
        />
  </div>
         
            <h3>Monstera</h3>

            <ul>
              <li>Name: monstera</li>
              <li>Color: green</li>
              <li>Origin: France</li>

              <h2>Price: 10€</h2>
            </ul>

      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}