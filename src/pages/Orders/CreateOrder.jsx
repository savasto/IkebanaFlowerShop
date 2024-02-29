import "w3-css/w3.css";
import React, { useState } from "react";


  const currentOrderInit = {
    orderId: "order#0",
    date: "",
    typeOfProduct: "",
    productsSelected: [0, 0, 0],
  };


export default function CreateOrder() {

  const [currentOrder, setCurrentOrder] = useState(currentOrderInit);
  const [orderId, setOrderId] = useState('');
  const [selectedTypeOfProduct, setSelectedTypeOfProduct] = useState("");
  
  const [menu1Quantity, setMenu1Quantity] = useState('');
  const [menu2Quantity, setMenu2Quantity] = useState('');
  const [menu3Quantity, setMenu3Quantity] = useState('');
  const [orderDate, setOrderDate] = useState("");

  

   const handleTypeOfProductChange = (event) => {
     setSelectedTypeOfProduct(event.target.value);
   };


  const handleMenu1QuantityChange = (event) => {
    setMenu1Quantity(event.target.value);
  };

  const handleMenu2QuantityChange = (event) => {
    setMenu2Quantity(event.target.value);
  };

  const handleMenu3QuantityChange = (event) => {
    setMenu3Quantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a simple unique order ID (for demonstration purposes)
    const newOrderId = `Order${Math.floor(Math.random() * 10000)}`;
    setOrderId(newOrderId);

    // Set the order date to the current date and time
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString();
    setOrderDate(currentDateString);

    //console.log("Date:", currentDateString);

    setCurrentOrder( {
      "orderId": newOrderId,
      "date": currentDateString,
      "typeOfProduct": selectedTypeOfProduct,
      "productsSelected": [menu1Quantity,
      menu2Quantity,
      menu3Quantity]
    });

    // Process the order or send it to a server
    console.log("Order Submitted:", {
      orderId: newOrderId,
      date: currentDateString,
      typeOfProduct: selectedTypeOfProduct,
      menusSelected: menu1Quantity,
      menu2Quantity,
      menu3Quantity,
    });



    // Clear form fields for the next order
    setOrderId("");
    setSelectedTypeOfProduct("");
    setMenu1Quantity("");
    setMenu2Quantity("");
    setMenu3Quantity("");
    setOrderDate("");
  };

  return (
    <>
      <h2>Create an Order</h2>
      <div class="w3-container">
        <div class="w3-row">
          <div class="w3-col m6">
            <div class="w3-panel w3-card-4 w3-grey">
              <h1>Order</h1>
              <form onSubmit={handleSubmit}>
                
                <div>
                  <label>Select Type of product:</label>
                  <select value={selectedTypeOfProduct} onChange={handleTypeOfProductChange}>
                  <option value="">Select a type of product</option>
                    <option value="flowers">Flowers</option>
                    <option value="dried flowers">Dried flowers</option>
                    <option value="plants">Plants</option>
                  </select>
                </div>
               
                <div>
                  <label>Red rose (quantity):</label>
                  <input
                    type="number"
                    value={menu1Quantity}
                    onChange={handleMenu1QuantityChange}
                  />
                </div>
                <div>
                  <label>Lirio (quantity):</label>
                  <input
                    type="number"
                    value={menu2Quantity}
                    onChange={handleMenu2QuantityChange}
                  />
                </div>
                <div>
                  <label>Strelitzia (quantity):</label>
                  <input
                    type="number"
                    value={menu3Quantity}
                    onChange={handleMenu3QuantityChange}
                  />
                </div>
                
                <br />
                <button class="w3-button w3-pink" type="submit">
                  Submit Order
                </button>
              </form>
              <br />
            </div>
          </div>

          <div class="w3-col m6">
            <div class="w3-container">
              {/* Display individual properties of currentOrder */}
              <div class="w3-panel w3-display-container">
                <span
                  onclick="this.parentElement.style.display='none'"
                  class="w3-button w3-large w3-display-topright"
                >
                  &times;
                </span>

                <div>
                  <h3>Your order</h3>
                </div>

                <div>
                  <strong>Order ID:</strong> {currentOrder.orderId}
                </div>
                <div>
                  <strong>Date:</strong> {currentOrder.date}
                </div>
                <div>
                  <strong>Type Of Product:</strong> {currentOrder.typeOfProduct}
                </div>
                
                <div>
                  <strong> Amount of Products:</strong>{" "}
                  {currentOrder.productsSelected.join(", ")}
                </div><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

