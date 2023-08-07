import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type TempType = {
  screenName: string;
};

const initialState: TempType = {
  screenName: '',
};

export const tempSlice = createSlice({
  name: 'Temp',
  initialState,
  reducers: {
    setTemp: (state, action: PayloadAction<string>) => {
      state.screenName = action.payload;
    },
  },
});

export const {setTemp} = tempSlice.actions;
export default tempSlice.reducer;
