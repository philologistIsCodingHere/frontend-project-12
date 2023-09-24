import {
  Button, ButtonGroup, Dropdown,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices/channelsSlice.js';

const Channel = ({ channel }) => {
  const { name } = channel;
  const { currentChannelId } = useSelector((state) => state.channels);
  const btnStyle = channel.id === currentChannelId ? 'secondary' : 'light';
  const dispatch = useDispatch();
  const { setCurrentChannel } = actions;

  return (
    <li className="nav-item w-100">
      <Dropdown as={ButtonGroup} className="w-100">
        <Button variant={btnStyle} onClick={() => dispatch(setCurrentChannel(channel.id))} type="button" className="w-100 rounded-0 text-start text-truncate btn">
          <span className="me-1">#</span>
          { name }
        </Button>
      </Dropdown>
    </li>
  );
};

export default Channel;
