import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await authService.login(email, password);
      navigate('/');
    } catch (e) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded bg-gray-800 p-6">
        <h1 className="mb-4 text-xl text-white">Login</h1>

        <input
          className="mb-2 w-full p-2"
          placeholder="Username"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="mb-4 w-full p-2"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 px-4 py-2 text-white"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
