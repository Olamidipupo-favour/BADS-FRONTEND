import  { useState } from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    try{
        axios.post("https://bads.onrender.com/api/token/",{"username":username,"password":password}).then((response)=>{
            
            localStorage.setItem("access_token",response.data.access);
            localStorage.setItem("refresh_token",response.data.refresh);
            window.location.href="/";
    })
    .catch((error)=>{
        console.log(error);
        alert("An error occured!")
    })
    }
    catch(error){
        console.log(error);
        alert("An error occured!")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-mono font-bold text-3xl text-center underline">
        Login|SPIS
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col justify-between">
          <div className="p-6">
            <label className="text-2xl font-mono font-bold p-2">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              className="rounded-xl h-10 dark:text-white "
            />
          </div>
          <div className="p-6">
            <label className="text-2xl font-mono font-bold p-2">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              className="rounded-xl h-10 dark:text-white"
            />
          </div>
          <button type="submit" className="rounded-md bg-blue-600">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
