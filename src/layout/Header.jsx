import ikebana from './ikebana.png'

console.log(ikebana);



export default function Header() {
    return (
      <>
        <header
          class="w3-display-container w3-grey w3-content w3-wide"
          id="home"
        >
        <div class="w3-container">
       
        <img 
        class="w3-image"
        src={ikebana} alt="Foto ikebana"
        width="100%"
        />
  </div>
          <div class="w3-display-bottommiddle w3-light-grey w3-padding-large w3-opacity">
            <h1 class="w3-xxlarge">Ikebana Flower Shop</h1>
          </div>
        </header>
      </>
    );
  }