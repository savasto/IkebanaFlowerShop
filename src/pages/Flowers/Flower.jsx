import "w3-css/w3.css";
import redrose from './redrose.png'
console.log(redrose);


export default function Rose() {
  return (
    <>
      <div class="w3-container">

        <div class="w3-panel w3-card w3-2018-almost-mauve">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={redrose} alt="Red rose"
        width="100%"
        />
  </div>
         
            <h3>Rose</h3>

            <ul>
              <li>Name: rose</li>
              <li>Color: red</li>
              <li>Origin: Belgium</li>

              <h2>Price: 8€</h2>
            </ul>
      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}
