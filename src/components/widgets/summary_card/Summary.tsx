"use client";

import React from "react";
import content from "./content.json";

import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { ProductsOrdered } from "./ProductsOrdered";
import { useCartState } from "@/state/cart.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaymentModalType } from "@/state/paymentModal.store";
import { usePaymentModal } from "../../../state/paymentModal.store";

async function sendOrder(setOpen: PaymentModalType["setOpen"]) {
  setOpen();
  console.log('me activé')
}

export const Summary = () => {
  const { productsInCart } = useCartState((state) => state);
  const { setOpen } = usePaymentModal((state) => state);

  return (
    <div className="h-screen">
      <ScrollArea className="w-full h-5/6 flex flex-col justify-between gap-2 p-10">
        <Text type="title" className="text-2xl font-bold text-foreground mb-20">
          {content.pageTitle}
        </Text>
        <ProductsOrdered products={productsInCart} />

      </ScrollArea>
        <div className="flex h-1/6 justify-center gap-5">
          <Button
            variant={"secondary"}
            className="w-96 text-md font-bold self-center"
            onClick={()=>sendOrder(setOpen)}
          >
            confirmar
          </Button>
          <Button
            variant={"outline"}
            className="w-96 text-md font-bold self-center"
          >
           Seguir ordenando
          </Button>
        </div>
    </div>
  );
};
