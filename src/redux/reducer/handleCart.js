const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check id Product is Already Exists
      const exists = state.find((x) => x.id === product.id);
      
      if (exists) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return[
          ...state,
          {
            ...product,
            qty:1,
          }
        ]
      }
      break;
    case "DELITEM":
      const exists1 = state.find((x) => x.id === product.id);
      if (exists1.qty === 1) {
        return state.filter((x) => x.id !== exists1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
       return state;
      break;
  }
};

export default handleCart;
