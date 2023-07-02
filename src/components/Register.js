import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} className="px-4 py-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="px-4 py-2 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="px-4 py-2 border border-gray-300 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Register;
