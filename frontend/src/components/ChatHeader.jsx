import { useSelector } from 'react-redux';
import { selectors } from '../slices/channelsSlice.js';

const ChatHeader = () => {
  const { currentChannelId } = useSelector((state) => state.channels);
  const channels = useSelector(selectors.selectAll);
  const currentChannel = channels.find((channel) => channel.id === currentChannelId);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>{ currentChannel?.name }</b>
      </p>
      <span className="text-muted">0 сообщений</span>
    </div>
  );
};

export default ChatHeader;
