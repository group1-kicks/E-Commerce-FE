import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface CardProps {
  id?: number;
  image?: string;
  title?: string;
  quantity?: number;
  price?: number;
}
function CardCart({ id, image, title, quantity, price }: CardProps) {
  return (
    <div
      className="w-5/6 font-semibold text-xl rounded-xl h-40 bg-white  flex justify-around
    "
    >
      <img src={image} alt={title} className="h-40 rounded-2xl " />
      <p className="  self-center">{title} </p>
      <div className=" self-center ">{quantity}</div>
      <p className=" text-primary self-center  ">Rp.{price}</p>
      <FaTrashAlt className="text-red-600 w-7 h-7  self-center" />
    </div>
  );
}

export default CardCart;
