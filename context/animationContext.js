import React, {createContext, useState} from 'react';

export const AnimationContext = createContext('');

const AnimationProvider = ({children}) => {
  const [animation, setAnimation] = useState('');
  const value = {animation, setAnimation};

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
