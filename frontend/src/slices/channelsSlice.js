import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState();

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: channelsAdapter.addMany,
    addChannel: channelsAdapter.addOne,
    updateChannel: channelsAdapter.updateOne,
    setCurrentChannel: (state, { payload }) => ({ ...state, currentChannelId: payload }),
    removeChannel: (state, { payload }) => channelsAdapter.removeOne(state, payload.id),
  },
});

export const { actions } = channelsSlice;
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
