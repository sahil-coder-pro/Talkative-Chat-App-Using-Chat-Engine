import { useState } from 'react'
import './App.css'
import AuthPage from './Components/AuthPage/AuthPage.jsx';
import ChatsPage from './Components/ChatsPage/ChatsPage';

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(userData) => setUser(userData)} />;
  } else {
    return <ChatsPage user={user} />;
  }

}

export default App
