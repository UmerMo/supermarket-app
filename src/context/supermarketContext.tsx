import { ReactElement, createContext, useState } from "react";

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
  addItemsToBasket: (product: BasketItem) => void;
};

export const SupermarketContext = createContext<SupermarketContextType>({
  getProducts: () => [],
  basketItems: [],
  addItemsToBasket: () => {}
});

export const SupermarketContextProvider = ({ children }: Props) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  function getProducts(): BasketItem[] {
    return products;
  }

  function addItemsToBasket(product: BasketItem) {
    setBasketItems((prevState: BasketItem[]): BasketItem[] => {
      return [...prevState, product];
    });
  }

  return (
    <SupermarketContext.Provider
      value={{
        getProducts,
        basketItems,
        addItemsToBasket
      }}
    >
      {children}
    </SupermarketContext.Provider>
  );
};
