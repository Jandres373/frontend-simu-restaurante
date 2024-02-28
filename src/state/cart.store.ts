import { create } from "zustand";

type Product = {
  id: number;
  imagen: string;
  name: string;
  detalle: string;
  precio: number;
};

export interface UserCartTypes {
  newProduct: boolean;
  productsInCart: Product[];
  addProduct: (payload: Product) => void;
  deleteProduct: (payload: Product["id"]) => void;
}

export const useCartState = create<UserCartTypes>((set) => ({
  newProduct: false,
  productsInCart: [],

  addProduct: (payload) => {
    function activateBounceAnimation(state: UserCartTypes) {
      state.newProduct = true;

      return setTimeout(() => {
        return false;
      }, 500);
    }

    set((state) => ({
      ...state,
      newProduct: activateBounceAnimation(state),
      productsInCart: [...state.productsInCart, payload],
    }));
  },

  deleteProduct: (payload) => {
    set((state) => ({
      ...state,
      productsInCart: [
        ...state.productsInCart.filter((product) => product.id !== payload),
      ],
    }));
  },
}));
