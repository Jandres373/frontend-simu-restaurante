"use client";

import { Text } from "@/components/ui/text";
import React from "react";

import { ProductType } from "@/state/cart.store";
import { Button } from "@/components/ui/button";
import { API } from "@/fetch/apiConnection";
import {
  UseSuccessModalType,
  useSuccessModal,
} from "@/state/successModal.store";

type Props = { products: ProductType[] };

async function sendOrder(
  products: ProductType[],
  setOpen: UseSuccessModalType["setOpen"]
) {
  const productNames = products.map((product) => product.product_name);
  const data = {
    products: productNames,
    is_paid: false,
    table_id: 1,
    user_id: 1,
  };
  const res = await API.post("/orders/list_of_orders/", data);
  console.log(res);

  if (res.Order) {
    console.log("abierto");
    setOpen();
  }
}

export default function TotalCard({ products }: Props) {
  const { setOpen } = useSuccessModal((state) => state);

  // Calcular la cantidad total de productos pedidos
  const totalItems = products.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );

  // Calcular la suma total de precios
  const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-80 h-full flex flex-col gap-5 bg-accent/60 p-5">
        <div className="flex justify-between">
          <Text type="regular">Items pedidos</Text>
          <Text type="semi-bold">{totalItems}</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Subtotal</Text>
          <Text type="semi-bold">{totalPrice.toFixed(2)}</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Descuentos</Text>
          <Text type="regular">0</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Total</Text>
          <Text type="regular">{totalPrice.toFixed(2)}</Text>
        </div>
      </div>
      <Button className={"w-full bg-card hover:bg-accent"} onClick={() => sendOrder(products, setOpen)}>
        <Text type="semi-bold">Realizar pedido</Text>
      </Button>
    </div>
  );
}
