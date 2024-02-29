
        

import Branch1 from "./Branch1.jsx";
import Branch2 from "./Branch2.jsx";
import Eucalyptus from "./Eucalyptus.jsx";

export default function Dried (){


    return (
        <>
        <div class="w3-content">
          <h1 class="w3-center w3-text-grey w3-cursive">
          <p> Using dried flowers in ikebana can add a unique and long-lasting element to your arrangements.
           Ikebana, the Japanese art of flower arrangement,
           emphasizes balance, harmony, and simplicity. </p></h1>
        </div>

        <div class="w3-container w3-light-grey ">
          <h1>Dried branches and leaves</h1>
          <div class="w3-container w3-cell">
            <Branch1 />
          </div>
          <div class="w3-container w3-cell">
            <Branch2 />
          </div>
          <div class="w3-container w3-cell">
            <Eucalyptus/>
          </div>
        </div>
        </>


    );
}
     