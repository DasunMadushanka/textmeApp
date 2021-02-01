import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
// add 3 dependencies -   npm install @ant-design/icons axios react-chat-engine 

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="d50bf182-50d5-4f67-a2bf-2a5faf66318d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
         />
    );
}

export default App;
