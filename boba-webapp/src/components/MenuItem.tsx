import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addItem } from "../store/slices/cartSlice";
import Button from "./Button";

interface MenuItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, price, imageUrl, description }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <img src={imageUrl} alt={name} className="rounded-md w-full h-40 object-cover" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-800 font-semibold">${price.toFixed(2)}</p>
      <Button label="Add to Cart" onClick={handleAddToCart} variant="primary" size="md" />
    </div>
  );
};

export default MenuItem;
