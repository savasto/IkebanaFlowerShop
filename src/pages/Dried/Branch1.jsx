import "w3-css/w3.css";
import branch1 from './branch1.png'
console.log(branch1);


export default function Branch1() {
  return (
    <>
      <div class="w3-container">
        <h2>Branch</h2>

        <div class="w3-panel w3-card w3-sand">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={branch1} alt="Dried branch"
        width="100%"
        />
  </div>
         
            <h3>Dried branch</h3>

            <ul>
              <li>Name: dried branch</li>
              <li>Color: black</li>
              <li>Origin: Belgium</li>

              <h2>Price: 2€</h2>
            </ul>
      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}