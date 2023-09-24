import ChatHeader from './ChatHeader.jsx';
import MessagesForm from './MessagesForm.jsx';

const Chat = () => (
  <div className="col p-0 h-100">
    <div className="d-flex flex-column h-100">
      <ChatHeader />
      <MessagesForm />
    </div>
  </div>
);

export default Chat;
