import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="05780816-ae21-4478-8f27-b8a3d0840114"
            userName="javascriptmastary"
            userSecret="123123"
            renderChatFeed= {(reactChatProps) => <ChatFeed {...reactChatProps} />}
        />
    );
}

export default App;