// import { Provider, useMemo } from 'react-redux';
// import App from './components/App';
// import store from './slices/index.js';
// import { ApiContext } from './index.jsx';
// import { actions as channelsActions } from '../slices/channelsSlice.js';
// import { actions as messagesActions } from '../slices/messagesSlice.js';

// const promosifySocket = (socket, type, data) => new Promise((resolve, reject) => {
//   socket.timeout(5000).emit(type, data, (err, response) => {
//     if (err) {
//       reject(err);
//     }
//     resolve(response);
//   });
// });

// const ApiProvider = async (socket) => {
//   socket.on('newMessage', (payload) => {
//     const { addMessage } = messagesActions;
//     store.dispatch(addMessage(payload));
//   });

//   socket.on('newChannel', (payload) => {
//     store.dispatch(channelsActions.addChannel(payload));
//   });

//   socket.on('removeChannel', ({ id }) => {
//     store.dispatch(channelsActions.removeChannel(id));
//   });

//   socket.on('renameChannel', (payload) => {
//     store.dispatch(channelsActions.renameChannel(payload));
//   });

//   const addMessage = (message) => promosifySocket(socket, 'newMessage', message);
//   const addChannel = (channel) => promosifySocket(socket, 'newChannel', channel);
//   const removeChannel = (channelId) => promosifySocket(socket, 'removeChannel', channelId);
//   const renameChannel = (channel) => promosifySocket(socket, 'renameChannel', channel);

//   const memorizedValue = useMemo(() => ({
//     addChannel,
//     addMessage,
//     renameChannel,
//     removeChannel,
//   }), [addChannel, addMessage, renameChannel, removeChannel]);

//   return (
//     <Provider store={store}>
//       <ApiContext.Provider value={memorizedValue}>
//         <App />
//       </ApiContext.Provider>
//     </Provider>
//   );
// };

// export default ApiProvider;
