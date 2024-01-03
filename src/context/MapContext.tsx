import React, {createContext, useState} from 'react';
import {Location} from '../interfaces/UserInterface';
import {MapModal} from './Map/MapModal';

type MapContextProps = {
  showMap: (hasSearchLocation?: boolean) => void;
};

export const MapContext = createContext({} as MapContextProps);

export const MapProvider = ({children}: any) => {
  const [MapVisible, setMapVisible] = useState(false);
  const [searchLocation, setsearchLocation] = useState(false);

  const showMap = (hasSearchLocation: boolean = false) => {
    setMapVisible(true);
    setsearchLocation(hasSearchLocation);
  };
  return (
    <MapContext.Provider
      value={{
        showMap,
      }}>
      {children}
      <MapModal
        hasSearchLocation={searchLocation}
        CloseFunction={() => setMapVisible(false)}
        isVisible={MapVisible}></MapModal>
    </MapContext.Provider>
  );
};
