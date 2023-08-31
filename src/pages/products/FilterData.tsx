export const color = [
  "white",
  "Black",
  "Red",
  "Indigo",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "indigo", label: "Indigo" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "10-20", label: "$10 to $20" },
      { value: "21-30", label: "$21 to $30" },
      { value: "31-40", label: "$31 to $40" },
      { value: "41-50", label: "$41 to $50" },
      { value: "51-60", label: "$51 to $60" },
      { value: "61-2000", label: "$61 to $2000" },
    ],
  },
];
