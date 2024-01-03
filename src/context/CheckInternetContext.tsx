import React, {createContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

type CheckInternetContextProps = {
  hasConnection: boolean;
};

export const CheckInternetContext = createContext(
  {} as CheckInternetContextProps,
);

export const CheckInternetProvider = ({children}: any) => {
  const [hasConnection, sethasConection] = useState<boolean>(true);

  const InternetError = () => {
    sethasConection(false);
  };
  const InternetOk = () => {
    sethasConection(true);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state =>
      !state.isConnected ? InternetError() : InternetOk(),
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CheckInternetContext.Provider value={{hasConnection}}>
      {children}
    </CheckInternetContext.Provider>
  );
};
