import "w3-css/w3.css";
import eucalyptus from './eucalyptus.png'
console.log(eucalyptus);


export default function Eucalyptus() {
  return (
    <>
      <div class="w3-container">
        <h2>Dried leaves</h2>

        <div class="w3-panel w3-card w3-sand">

        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={eucalyptus} alt="Eucalyptus leaves"
        width="100%"
        />
  </div>
         
            <h3>Eucalyptus leaves</h3>

            <ul>
              <li>Name: eucalyptus</li>
              <li>Color: green</li>
              <li>Origin: Belgium</li>

              <h2>Price: 5€</h2>
            </ul>
      
              <button class="w3-button w3-pale-green">Add to cart</button>
            </div>
          </div>
  
     
    </>
  );
}