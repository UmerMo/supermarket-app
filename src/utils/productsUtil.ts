export const formatPrice = (price: number) => {
  return `${currencyStringBuilder(price)}`;
};

export const formatPricePerKg = (price: number, weight: number) => {
  const totalCost = price * weight;
  return `${weight} kg @ ${currencyStringBuilder(price)}/kg ${totalCost}`;
};

const currencyStringBuilder = (price: number) => {
  let priceStringBuilder = "";
  if (price.toString().startsWith("0")) {
    return (priceStringBuilder = `${price.toFixed(2)}p`);
  } else {
    return (priceStringBuilder = `£${price.toFixed(2)}`);
  }
};
