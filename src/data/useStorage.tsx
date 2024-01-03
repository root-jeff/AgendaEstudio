import {TokenResponse} from '../interfaces/BaseApiInterface';
import {ThemeInfo} from '../interfaces/BaseInterface';
import {useBaseStorage} from './useBaseStorage';

const keyStorage = {
  token: 'token',
  theme: 'theme',
};

export const useStorage = () => {
  const {SaveData, GetData, CheckData, DeleteData, RemoveData} =
    useBaseStorage();

  //#region Token
  const SaveJWTInfo = async (data: TokenResponse) =>
    await SaveData(data, keyStorage.token);
  const GetJWTInfo = async (): Promise<TokenResponse> =>
    await GetData<TokenResponse>(keyStorage.token);
  const CheckJWTInfo = async (): Promise<boolean> =>
    await CheckData(keyStorage.token);
  //#endregion
  //#region Theme
  const SaveTheme = async (data: ThemeInfo) =>
    await SaveData(data, keyStorage.theme);
  const GetTheme = async (): Promise<ThemeInfo> =>
    await GetData<ThemeInfo>(keyStorage.theme);
  //#endregion
  const RemoveAllData = async () => RemoveData([keyStorage.token]);

  return {
    SaveJWTInfo,
    GetJWTInfo,
    CheckJWTInfo,
    RemoveAllData,
    SaveTheme,
    GetTheme,
  };
};
