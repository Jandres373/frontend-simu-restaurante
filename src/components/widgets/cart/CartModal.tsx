"use client";

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartButton } from "../food_menu_display";
import { Text } from "@/components/ui/text";
import { useCartState } from "@/state/cart.store";
import CartProduct from "./CartProduct";
import TotalCard from "./TotalCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";

type Props = {};

export default function CartModal({}: Props) {
  const { productsInCart } = useCartState((state) => state);
  return (
    <Sheet>
      <SheetTrigger>
        <CartButton />
      </SheetTrigger>
      <SheetContent className="h-screen bg-card/60 bg-blend-multiply backdrop-blur-md">
        <SheetHeader>
          <SheetTitle>
            <Text type="title">orden</Text>
          </SheetTitle>
          <div className="flex flex-col ">
            <ScrollArea className="h-[450px] flex flex-col gap-10">
              {productsInCart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <div className="">
              <TotalCard products={productsInCart} />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
