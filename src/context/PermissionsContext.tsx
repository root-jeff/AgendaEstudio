import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  openSettings,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  requestMultiple,
} from 'react-native-permissions';

export interface PermissionsState {
  permissionAppStatus: PermissionStatus;
}

type PermissionsContextProps = {
  permissions: PermissionStatus;
  askPermission: () => void;
  checkPermission: () => void;
};

let AndroidPermissions: Permission[] = [
  PERMISSIONS.ANDROID.CAMERA,
  //PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
];
const androidSDKVersion = Platform.OS === 'android' ? Platform.Version : 0;
/* if (androidSDKVersion >= 33) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
}  */
if (androidSDKVersion <= 29) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
}
if (androidSDKVersion <= 32) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
}
if (androidSDKVersion >= 33) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO);
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO);
}

let IosPermissions: Permission[] = [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setpermissions] =
    useState<PermissionStatus>('unavailable');

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      checkPermission();
    });
  }, []);

  const askPermission = async () => {
    const permissions: Permission[] | undefined = Platform.select({
      ios: IosPermissions,
      android: AndroidPermissions,
    });

    const permissionStatuses = await requestMultiple(permissions!);

    const allGranted = Object.values(permissionStatuses).every(
      status => status === 'granted',
    );

    if (allGranted) {
      setpermissions('granted');
    } else {
      openSettings();
    }
  };

  const checkPermission = async () => {
    const permissions = Platform.select({
      ios: IosPermissions,
      android: AndroidPermissions,
    });

    const permissionStatuses = await Promise.all(
      permissions!.map(async permission => await check(permission)),
    );
    console.log(permissionStatuses);
    if (permissionStatuses.every(status => status === 'granted')) {
      setpermissions('granted');
    } else {
      setpermissions('denied');
    }
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askPermission,
        checkPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
