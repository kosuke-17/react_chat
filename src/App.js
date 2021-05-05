import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectID = '05780816-ae21-4478-8f27-b8a3d0840114'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;


    return (
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= {(reactChatProps) => <ChatFeed {...reactChatProps} />}
        />
    );
}

export default App;