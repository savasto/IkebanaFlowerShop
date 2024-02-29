import "w3-css/w3.css";
import branch2 from './branch2.png'
console.log(branch2);


export default function Branch2() {
  return (
    <>
      <div class="w3-container">
        <h2>Dried branch</h2>

        <div class="w3-panel w3-card w3-sand">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={branch2} alt="Dried branch"
        width="100%"
        />
  </div>
         
            <h3>Dried branch</h3>

            <ul>
              <li>Name: branch</li>
              <li>Color: brown</li>
              <li>Origin: Belgium</li>

              <h2>Price: 3€</h2>
            </ul>
      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}