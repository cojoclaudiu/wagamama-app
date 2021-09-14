import React, {createContext, useState} from 'react';

export const CartItemContext = createContext('');

const CartItemProvider = ({children}) => {
  const [animation, setAnimation] = useState('');
  const [overlay, setOverlay] = useState(null);
  const value = {animation, setAnimation, overlay, setOverlay};

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
