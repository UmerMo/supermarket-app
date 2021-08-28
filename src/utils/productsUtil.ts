export const formatPrice = (price: number, perKg: boolean = false) => {
  let priceStringBuilder = "";
  if (price.toString().startsWith("0")) {
    priceStringBuilder = `${price.toFixed(2)}p`;
  } else {
    priceStringBuilder = `£${price.toFixed(2)}`;
  }

  return perKg ? `${priceStringBuilder} per kg` : `${priceStringBuilder} each`;
};
