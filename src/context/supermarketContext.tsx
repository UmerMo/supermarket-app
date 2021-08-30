import { ReactElement, createContext, useState } from "react";

const products = [
  { id: 1, name: "Tin of beans", price: 0.5, image: "🥫" },
  { id: 2, name: "Can of cola", price: 0.7, image: "🥤" },
  { id: 3, name: "Oranges", price: 1.99, image: "🍊", perKg: true },
];

const discountRules = [
  { productId: 1, quantity: 3, discount: 0.5 },
  { produtId: 2, quantity: 3, discount: 0.7 },
];

interface Props {
  children: ReactElement;
}

export interface BasketItem {
  id: Number;
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
  addItemsToBasket: () => {},
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
        addItemsToBasket,
      }}
    >
      {children}
    </SupermarketContext.Provider>
  );
};
