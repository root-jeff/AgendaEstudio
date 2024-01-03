import React from 'react';
import {Map} from './Map';
import {BaseModal, BaseModalProps} from '../../Template/BaseModal';
import {Location} from '../../interfaces/UserInterface';

interface Props extends BaseModalProps {
  location?: Location;
  hasSearchLocation?: boolean;
}

export const MapModal = ({
  CloseFunction,
  hasSearchLocation = false,
  isVisible = false,
}: Props) => {
  return (
    <BaseModal CloseFunction={CloseFunction} isVisible={isVisible}>
      <Map
        hasSearchLocation={hasSearchLocation}
        backfunction={CloseFunction}></Map>
    </BaseModal>
  );
};
