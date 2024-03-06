"use client";

import React from "react";

import { FoodCard } from "./";
import { API } from "@/fetch/apiConnection";
import { ProductType } from "@/state/cart.store";
import { CartModal } from "../cart";
import { motion } from "framer-motion";

type Props = {
  category: string;
};

type CategoryMap = {
  [key: string]: string;
};

const categories: CategoryMap = {
  dinner: "Cena",
  drinks: "Bebidas",
  breakfast: "Desayuno",
  lunch: "Almuerzo",
  snacks: "Merienda",
};

export async function FoodMenu({ category }: Props) {
  const res: ProductType[] = await API.get("/products/products/");
  const products = res.filter((product) =>
    product.categories.includes(categories[category])
  );

  // Define la variante de la animación de stagger
  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

 
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="part2" className="w-full bg-accent overflow-hidden">
      <div className="flex flex-col h-2/3 gap-5 my-4 ml-6 mt-6 text-xl text-white ">
        <div>
          <motion.ul
            key={"fixed"}
            className="flex flex-wrap justify-start gap-x-10 gap-y-10"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            {products &&
              products.map((product: ProductType) => (
                <motion.li key={product.id} variants={childVariants}>
                  <FoodCard product={product} />
                </motion.li>
              ))}
          </motion.ul>
        </div>
      </div>
      <CartModal />
    </div>
  );
}
