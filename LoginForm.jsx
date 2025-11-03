import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    setError('');
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div style={{width:"300px", padding:"20px", border:"1px solid #ccc", margin:"20px auto"}}>
      <h3 style={{textAlign:"center"}}>Login</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{width:"100%", padding:"8px", marginBottom:"10px"}}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width:"100%", padding:"8px", marginBottom:"10px"}}
        />
        {error && <p style={{color:"red", fontSize:"14px"}}>{error}</p>}
        <button type="submit" style={{width:"100%", padding:"8px"}}>Login</button>
      </form>
    </div>
  );
}
