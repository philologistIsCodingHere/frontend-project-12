import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import routes from '../routes.js';
import Channels from './Channels.jsx';
import Chat from './Chat.jsx';
import useAuth from '../hooks/index.jsx';
import { actions } from '../slices/channelsSlice.js';

const MainPage = () => {
  const dispatch = useDispatch();
  const { addChannels, setCurrentChannel } = actions;
  const auth = useAuth();
  const headers = auth.getAuthHeader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(routes.dataPath(), { headers });
        const { channels, currentChannelId } = data || {};
        dispatch(addChannels(channels));
        console.log(currentChannelId);
        dispatch(setCurrentChannel(currentChannelId));
        console.log(data);
      } catch (error) {
        if (!error.isAxiosError) {
          console.log(error);
        }
        if (error.response?.status === 401) {
          console.log(error);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [dispatch, addChannels, setCurrentChannel, headers]);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <Chat />
      </div>
    </div>
  );
};

export default MainPage;
