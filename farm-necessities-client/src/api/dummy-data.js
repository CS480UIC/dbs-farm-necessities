export const pastOrders = {
  data: [
    {
      order_id: 0,
      product_id: 6,
      category_id: 2,
      user_id: 2,
      name: 'H & S S3131',
      description: 'H & S 310 BU MANURE SPREADER W/ 295RX22.5 TIRES AND HYD. ENGATE',
      price: 23000,
      image: `https://d2j6dbq0eux0bg.cloudfront.net/images/16856293/1104695286.jpg`,
      delivery_date: '2022-03-09',
      quantity: 1,
    },
    {
      order_id: 1,
      product_id: 9,
      category_id: 3,
      user_id: 3,
      name: 'STIHL RB200',
      description: 'STIHL RB200 POWER WASHER',
      price: 600,
      image: `https://d2j6dbq0eux0bg.cloudfront.net/images/16856293/1148674820.jpg`,
      delivery_date: '2022-03-19',
      quantity: 1,
    },
  ],
};

export const profile = {
  data: {
    name: 'Mayur',
    email: 'mmule2@uic.edu',
    phone_number: '3127764042',
    address: ['1210 W Lexington St, Chicago, IL, 60607', '1206 W Lexington St, Chicago, IL, 60607'],
    card_number: ['1111222233334444', '5555666677778888'],
  },
};

export const cart = {
  data: [
    {
      product_id: 0,
      category_id: 0,
      user_id: 0,
      name: 'J & M 1384L-LW',
      description: 'J & M 13 TON RUNNING GEAR, LOW CLEARANCE, LESS WHEELS',
      price: 5000,
      image: `https://picsum.photos/250?random=${Math.random()}`,
      quantity: 1,
    },
    {
      product_id: 3,
      category_id: 1,
      user_id: 1,
      name: 'H & S HT8',
      description: 'SKU 0004',
      price: 14000,
      image: `https://d2j6dbq0eux0bg.cloudfront.net/images/16856293/1151901676.jpg`,
      quantity: 2,
    },
  ],
};
