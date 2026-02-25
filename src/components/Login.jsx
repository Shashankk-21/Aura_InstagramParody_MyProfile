import React from 'react';
import { LogIn } from 'lucide-react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center shadow-2xl">
        <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full mb-6 flex items-center justify-center">
            <LogIn size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-zinc-400 text-center mb-8 text-sm">
          Sign in to access your Aura profile and events.
        </p>

        <button
          onClick={onLogin}
          className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 active:scale-95 duration-200"
        >
          <span>Continue with Demo Account</span>
        </button>

        <p className="text-zinc-600 text-xs mt-6">
            Backend Readiness Verified
        </p>
      </div>
    </div>
  );
};

export default Login;
