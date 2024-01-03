import React, {useRef, useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import {useLocation} from '../../hooks/useLocation';
import {
  Image,
  LayoutChangeEvent,
  Linking,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {LoadingModal} from '../../utils/Loader/LoaderComponents/LoadingModal';
import {Location} from '../../interfaces/UserInterface';
import {CustomButton} from '../../components/BaseComponents/CustomButton';
import {useGoogleSearch} from './useGoogleSearch';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface Props {
  location?: Location;
  hasSearchLocation?: boolean;
  backfunction: () => void;
}

export const Map = ({
  location,
  backfunction,
  hasSearchLocation = false,
}: Props) => {
  const {width} = useWindowDimensions();
  const {hasLocation, userLocation} = useLocation();
  const mapViewRef = useRef<MapView>();
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const {
    direccionGoogle,
    onChange,
    selectDireccionGoogle,
    selectedPlaceLocation,
    setselectedPlaceLocation,
  } = useGoogleSearch();

  const centerPosition = async (position: Location) => {
    mapViewRef.current?.animateCamera({
      center: position,
    });
    setselectedPlaceLocation(position);
  };

  useEffect(() => {
    centerPosition(selectedPlaceLocation);
  }, [selectedPlaceLocation]);

  if (!hasLocation) {
    return <LoadingModal></LoadingModal>;
  }
  return (
    <GestureHandlerRootView
      style={{flex: 1, overflow: 'hidden', borderRadius: 25}}
      onLayout={({
        nativeEvent: {
          layout: {width, height},
        },
      }: LayoutChangeEvent) =>
        setDimensions({
          width,
          height,
        })
      }>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        showsUserLocation
        showsMyLocationButton
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: location?.latitude ?? userLocation?.latitude ?? 0,
          longitude: location?.longitude ?? userLocation?.longitude ?? 0,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        }}></MapView>
      <View
        style={{
          position: 'absolute',
          left: width > 768 ? '47%' : '44%',
          bottom: '50%',
        }}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../assets/pin.png')}
        />
      </View>
      {hasSearchLocation && (
        <View
          style={{
            position: 'absolute',
            padding: 10,
            top: 0,
            left: 0,
            right: 45,
          }}>
          {/*  <SearchInputApi
            onDebounce={onChange}
            placeholder="Buscar Dirección"></SearchInputApi> */}
          <View
            style={{
              //display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              //flexWrap: 'wrap',
            }}>
            {direccionGoogle != null ? (
              direccionGoogle.map((element, index) => {
                return (
                  <TouchableOpacity
                    key={'viewItem' + index}
                    activeOpacity={0.6}
                    onPress={() => selectDireccionGoogle(element)}
                    style={{
                      marginBottom: 2,
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>
                      {element.description}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <></>
            )}
          </View>
        </View>
      )}
      <View
        style={{
          position: 'absolute',
          top: dimensions.height - 75,
          left: 0,
          right: 0,
          bottom: -10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: location !== undefined ? '75%' : undefined,
            justifyContent: 'space-between',
          }}>
          {/*  {location !== undefined && (
            <CustomButton
              color={colores.verde}
              onPress={() =>
                Linking.openURL(
                  `http://maps.google.com/?q=${location.latitude},${location.longitude}`,
                ).catch(console.log)
              }
              width={150}
              title={'Ir a Google Maps'}></CustomButton>
          )}
          <CustomButton
            color={colores.rojo}
            onPress={() => backfunction()}
            width={100}
            title={'Cerrar'}></CustomButton> */}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
