import React, { ReactElement, createContext, useState } from "react";

const products = [
  { name: "Tin of beans", price: 0.5, image: "🥫" },
  { name: "Can of cola", price: 0.7, image: "🥤" },
  { name: "Oranges", price: 1.99, image: "🍊", perKg: true },
];

interface Props {
  children: ReactElement;
}

export interface BasketItem {
  image: string;
  name: string;
  price: number;
  perKg?: boolean;
}

export type SupermarketContextType = {
  getProducts: () => BasketItem[];
  basketItems: BasketItem[];
  setBasketItems: React.Dispatch<React.SetStateAction<BasketItem[]>>;
};

export const SupermarketContext = createContext<SupermarketContextType>({
  getProducts: () => [],
  basketItems: [],
  setBasketItems: () => {},
});

export const SupermarketContextProvider = ({ children }: Props) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  function getProducts(): BasketItem[] {
    return products;
  }

  return (
    <SupermarketContext.Provider
      value={{
        getProducts,
        basketItems,
        setBasketItems,
      }}
    >
      {children}
    </SupermarketContext.Provider>
  );
};
