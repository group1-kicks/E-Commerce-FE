import React from "react";

import { Layout } from "../components/Layout";
import { Btn } from "../components/Button";
import { IoIosCart, IoIosPerson, IoIosLocate } from "react-icons/io";

function DetailItems() {
  return (
    <Layout>
      <div className="flex p-5 lg:p-24 bg-gradient-to-b from-secondary to-white min-h-[90vh]">
        <div className="flex flex-col">
          <img
            className="w-96 rounded-3xl"
            src={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2bce59c-b55e-4104-9a57-4b432ca1ed68/jordan-delta-3-low-shoes-fQrm6Q.png"
            }
            alt={`sepatu`}
          />
          <div className="flex justify-between">
            <h1 className="flex items-center gap-1 tracking-tight">
              {<IoIosPerson />}
              {`SekaliPake`}
            </h1>
            <h1 className="flex items-center gap-1 tracking-tight">
              {<IoIosLocate />}
              {`Bandung`}
            </h1>
          </div>
        </div>
        <div className="w-full pl-10">
          <h1 className="text-5xl">{`Jordan Delta 3 Low`}</h1>
          <p className="text-3xl text-primary">Rp. {24000000}</p>
          <p className="mt-24 p-10 rounded-xl bg-gradient-to-b from-white to-white/20">{`You can't help but look cool in low tops that meld high-end craft with high-tech features. Airy Ripstop and soft, synthetic suede pair with a smooth interior. The result? Classic low-top looks and the premium comfort you expect from Jordan Brand.`}</p>
          <div className="w-full flex justify-end">
            <Btn
              className="mt-5 max-w-xs"
              label={"Add To Cart"}
              icon={<IoIosCart className="ml-2 text-xl" />}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailItems;
