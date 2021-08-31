import { ReactElement, createContext, useState } from "react";

const products = [
  { id: 1, name: "Tin of beans", price: 0.5, image: "🥫" },
  { id: 2, name: "Can of cola", price: 0.7, image: "🥤" },
  { id: 3, name: "Oranges", price: 1.99, image: "🍊", perKg: true },
];

const discountRules = [
  { productId: 1, quantity: 3, discount: 0.5, description: "Beans 3 for 2" },
  { productId: 2, quantity: 2, discount: 0.4, description: "Cola 2 for £1" },
];

interface Props {
  children: ReactElement;
}

export interface BasketItem {
  id: number;
  image: string;
  name: string;
  price: number;
  perKg?: boolean;
  weight?: number;
}

export type SupermarketContextType = {
  basketItems: BasketItem[];
  getProducts: () => BasketItem[];
  addItemsToBasket: (product: BasketItem, weight?: number) => void;
  getSubTotal: () => number;
  getTotalSavings: () => number;
  getTotalToPay: () => number;
};

export const SupermarketContext = createContext<SupermarketContextType>({
  basketItems: [],
  getProducts: () => [],
  addItemsToBasket: () => {},
  getSubTotal: () => 0,
  getTotalSavings: () => 0,
  getTotalToPay: () => 0,
});

export const SupermarketContextProvider = ({ children }: Props) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  function getProducts() {
    return products;
  }

  function addItemsToBasket(product: BasketItem, weight?: number) {
    if (product.perKg) {
      if (weight) {
        setBasketItems((prevState: BasketItem[]): BasketItem[] => {
          return [...prevState, { ...product, weight: weight }];
        });
      }
    } else {
      setBasketItems((prevState: BasketItem[]): BasketItem[] => {
        return [...prevState, product];
      });
    }
  }

  function getSubTotal() {
    return basketItems.reduce((accumulator, current) => {
      if (current.perKg == true) {
        return accumulator + current.price * current.weight!;
      }
      return accumulator + current.price;
    }, 0);
  }

  function getTotalSavings() {
    let totalSavings = 0;

    discountRules.map((rule) => {
      let itemCounter = 0;

      basketItems.forEach((item) => {
        if (item.id === rule.productId) {
          itemCounter++;

          if (itemCounter % rule.quantity == 0) {
            totalSavings += rule.discount;
          }
        }
      });
    });

    return totalSavings;
  }

  function getTotalToPay() {
    return getSubTotal() - getTotalSavings();
  }

  return (
    <SupermarketContext.Provider
      value={{
        basketItems,
        getProducts,
        addItemsToBasket,
        getSubTotal,
        getTotalSavings,
        getTotalToPay,
      }}
    >
      {children}
    </SupermarketContext.Provider>
  );
};
