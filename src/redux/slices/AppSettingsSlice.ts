import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type AppSettingType = {
  theme: string;
  appName: string;
  appVersion: string;
  versionCode: number;
  screenName: string;
};

const initialState: AppSettingType = {
  screenName: '',
  theme: 'dark',
  appName: '',
  appVersion: '',
  versionCode: 0,
};

export const appSettingSlice = createSlice({
  name: 'AppSettings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setAppName: (state, action: PayloadAction<string>) => {
      state.appName = action.payload;
    },
    setAppVersion: (state, action: PayloadAction<string>) => {
      state.appVersion = action.payload;
    },
    setVersionCode: (state, action: PayloadAction<number>) => {
      state.versionCode = action.payload;
    },
    setScreenName: (state, action: PayloadAction<string>) => {
      state.screenName = action.payload;
    },
  },
});

export const {
  setTheme,
  setAppName,
  setAppVersion,
  setScreenName,
  setVersionCode,
} = appSettingSlice.actions;
export default appSettingSlice.reducer;
