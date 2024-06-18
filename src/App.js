import { Height } from '@mui/icons-material';
import axios from 'axios';
import React,{useState, useEffect} from 'react';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginname, setLoginname] = useState('');
  const [loginpassword, setLoginpassword] = useState('');

  const postdata = async () => {
    const data = {
      username: username,
      password: password
    }
    const response = await axios.post('http://localhost:5000/api/users/register', data);
    console.log(response);
  }
  const login = async () => {
    const data = {
      username: loginname,
      password: loginpassword
    }
    const response = await axios.post('http://localhost:5000/api/users/login', data);
    console.log(response);
  }

  return (
    <div>
      <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={postdata}>Post Data</button>
      <input type="text" placeholder="username" onChange={(e) => setLoginname(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setLoginpassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
