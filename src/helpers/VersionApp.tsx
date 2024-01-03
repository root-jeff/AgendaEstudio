import DeviceInfo from 'react-native-device-info';

export const VersionApp = `${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`;
