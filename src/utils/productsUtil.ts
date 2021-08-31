export const formatPrice = (price: number) => {
  return `${currencyStringBuilder(price)}`;
};

export const formatPricePerKg = (price: number, weight: number) => {
  console.log("price is ", price);
  console.log("weight is ", weight);
  const totalCost = price * weight;
  console.log("total is ", totalCost);
  return `${weight} kg @ ${currencyStringBuilder(price)}/kg ${totalCost}`;
};

const currencyStringBuilder = (price: number) => {
  if (price.toString().startsWith("0")) {
    return `${price.toFixed(2)}p`;
  } else {
    return `£${price.toFixed(2)}`;
  }
};
