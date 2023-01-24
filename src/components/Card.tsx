import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { HiPencilAlt, HiTrash } from "react-icons/hi";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  seller?: string;
  loc?: string;
}

interface CardTranscProps {
  id: number;
  invoice: string;
  date: string;
  status: string;
}

export function CardShop({ id, image, title, price, seller, loc }: CardProps) {
  const navigate = useNavigate();
  const onClickDetail = (index: number) => {
    navigate(`/detail/${index}`);
  };

  return (
    <div
      onClick={() => {
        onClickDetail(id);
      }}
      className="flex flex-col bg-white w-[330px] rounded-3xl gap-2 m-5 p-5 shadow-sm cursor-pointer lg:w-96"
    >
      <img src={image} alt={title} className="w-72 rounded-3xl lg:w-80" />
      <div className="flex justify-between">
        <h1 className="tracking-tighter">{title}</h1>
        <h1 className="tracking-tighter">{seller}</h1>
      </div>
      <div className="flex justify-between">
        <p>Rp. {price}</p>
        <h1 className="tracking-tighter">{loc}</h1>
      </div>
    </div>
  );
}

export function Cardprofile({ id, image, title, price }: CardProps) {
  return (
    <div className="flex flex-col bg-white w-[330px] rounded-3xl gap-2 m-5 p-5 shadow-sm lg:w-80">
      <div className="flex justify-between">
        <HiPencilAlt className="text-2xl" />
        <HiTrash className="text-2xl text-red-600" />
      </div>
      <img src={image} alt={title} className="w-72 rounded-3xl" />
      <h1 className="tracking-tighter">{title}</h1>
      <p>Rp. {price}</p>
    </div>
  );
}

export function CardTransc({ id, date, invoice, status }: CardTranscProps) {
  return (
    <div
      className="flex justify-around items-center w-full bg-white rounded-2xl mt-4"
    >
      <img
        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2bce59c-b55e-4104-9a57-4b432ca1ed68/jordan-delta-3-low-shoes-fQrm6Q.png"
        alt={`username`}
        className="w-14 h-14"
      />
      <p>{invoice}</p>
      <p>{status}</p>
      <p>{date}</p>
    </div>
  );
}
