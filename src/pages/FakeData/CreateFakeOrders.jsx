import React, { useState, useEffect } from "react";

const CreateOrders = () => {
  const [orders, setOrders] = useState([]);

  const flowersNames = [
    "Red rose",
    "White rose",
    "Strelitzia",
    "Red tulip",
    "Yellow rose",
    "Rose peony",
    
  ];

  const getRandomDate = () => {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date();
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime).toLocaleDateString("en-GB");
  };

  const getRandomTypeOfProduct = () => {
    const products = [
      "Fresh flowers",
      "Dried flowers",
      "Dried leaves",
      "Dried brunches",
      "Fresh leaves",
      "Plants",
    
    ];
    return products[Math.floor(Math.random() * products.length)];
  };

  const getRandomBoolean = () => Math.random() < 0.98; // 98% chance of being true

  const getRandomQuantityProduct = () => Math.floor(Math.random() * 11) + 2;

  const getRandomTotalPayment = () =>
    parseFloat((8 + Math.random() * (120 - 8)).toFixed(2));

  const getRandomMenu = (remainingQty) => {
    const maxQty = Math.min(remainingQty, 12);
    const qty = Math.floor(Math.random() * maxQty) + 1;
    return {
      menu: flowersNames[Math.floor(Math.random() * flowersNames.length)],
      qty,
    };
  };

  const generateOrder = () => {
    const totalMenus = 12;
    let remainingQty = totalMenus;

    const flowers = Array.from(
      { length: Math.floor(Math.random() * 10) + 1 },
      () => {
        const flower = getRandomMenu(remainingQty);
        remainingQty -= flower.qty;
        return flower;
      }
    );

    return {
      id: `O${Math.floor(Math.random() * 999) + 1}`,
      date: getRandomDate(),
      typeOfProduct: getRandomTypeOfProduct(),
      qtyProduct: getRandomQuantityProduct(),
      totalPayment: getRandomTotalPayment(),
      paid: getRandomBoolean(),
      flowers,
    };
  };

  useEffect(() => {
    const generatedOrders = Array.from({ length: 500 }, generateOrder);
    setOrders(generatedOrders);
  }, []);

  return (
    <div>
      <h5>0.5K fake 'orders'</h5>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
};

export default CreateOrders;