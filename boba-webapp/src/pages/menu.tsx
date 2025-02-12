import React from "react";
import MenuItem from "../components/MenuItem";

const Menu: React.FC = () => {
  const menuItems = [
    {
      id: "1",
      name: "Classic Milk Tea",
      price: 4.99,
      description: "A timeless blend of black tea and creamy milk with chewy boba pearls.",
      imageUrl: "/images/milk-tea.jpg",
    },
    {
      id: "2",
      name: "Taro Bubble Tea",
      price: 5.49,
      description: "A sweet and nutty purple taro blended to perfection.",
      imageUrl: "/images/taro-tea.jpg",
    },
    {
      id: "3",
      name: "Matcha Latte",
      price: 5.99,
      description: "Rich Japanese matcha green tea with creamy milk.",
      imageUrl: "/images/matcha-latte.jpg",
    },
    {
      id: "4",
      name: "Strawberry Fruit Tea",
      price: 5.29,
      description: "Refreshing strawberry-flavored fruit tea with real fruit bits.",
      imageUrl: "/images/strawberry-tea.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
