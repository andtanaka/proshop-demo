const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calcula o preço dos items
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //Calcula o preço do frete (if order > $100, frete free; else $10 de frete)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  //Calcula o preço do imposto (15%)
  state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2));

  //Calcula o preço total
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  //salva no localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
