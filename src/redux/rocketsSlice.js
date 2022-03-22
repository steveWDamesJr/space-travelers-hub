import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'posts/getPosts',
  async ({ limit }, { dispatch, getState }) =>
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    fetch(
      `https://api.spacexdata.com/v3/rockets?_limit=${limit}`,
    ).then((res) => res.json()),

);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getRockets.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getRockets.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getRockets.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default rocketsSlice.reducer;
