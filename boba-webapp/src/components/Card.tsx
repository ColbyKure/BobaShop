import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addItem } from "../store/slices/cartSlice";
import Button from "./Button";

interface CardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <img src={imageUrl} alt={name} className="rounded-md w-full h-40 object-cover" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <Button label="Add to Cart" onClick={handleAddToCart} variant="primary" size="md" />
    </div>
  );
};

export default Card;
