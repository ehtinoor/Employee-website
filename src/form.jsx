import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex   
 flex-col space-y-4 border border-green-500 px-3 py-4">
        <input
          className="border border-gray-500 rounded px-3 py-2"
          placeholder="Type name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="border border-gray-500 rounded px-3 py-2"
          placeholder="Type email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="border border-gray-500 rounded px-3 py-2"
          placeholder="Type password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <h1>My name is: {name}</h1>
        <h1>My email is: {email}</h1>
        <h1>My password is: {password}</h1>
      </div>
    </div>
  );
}

export default App;