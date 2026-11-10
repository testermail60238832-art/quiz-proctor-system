import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GENERAL_THEME } from '../config/theme';

export default function Landing() {
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    const formatted = roomCode.trim().toUpperCase();
    if (formatted.length >= 2) {
      navigate(`/join/${formatted}`);
    } else {
      setError('Please enter a valid assessment access code');
    }
  };

  return (
    <div className={`min-h-screen ${GENERAL_THEME.bg} text-slate-100 flex flex-col justify-between p-6`}>
      <div className="flex justify-between items-center max-w-5xl w-full mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Secure Assessment Portal
          </span>
        </div>
        <button
          onClick={() => navigate('/admin/login')}
          className="border border-amber-500/60 text-amber-400 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-amber-500/10 transition-colors shadow-sm"
        >
          Admin Portal
        </button>
      </div>

      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="space-y-4">
          <div className="inline-block p-1.5 rounded-3xl bg-gradient-to-br from-amber-500/30 via-blue-900/50 to-amber-500/20 border-2 border-amber-400/60 shadow-2xl backdrop-blur-md">
            <img
              src="/logo.jpg"
              alt="ECLECTICA II TECH-QUIZ Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-2xl mx-auto shadow-inner"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 uppercase">
            ECLECTICA II TECH-QUIZ
          </h1>
          <p className="text-xs font-bold text-amber-300/80 uppercase tracking-widest">
            Official Technical Assessment & Proctoring Portal
          </p>
        </div>

        <div className={`${GENERAL_THEME.cardBg} border-2 ${GENERAL_THEME.border} p-8 rounded-2xl shadow-2xl space-y-6`}>
          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-extrabold text-amber-300 mb-2 text-left tracking-wide">
                Candidate Assessment Access Code
              </label>
              <input
                type="text"
                placeholder="ENTER ACCESS CODE"
                value={roomCode}
                onChange={(e) => {
                  setRoomCode(e.target.value);
                  setError('');
                }}
                className={`w-full text-center tracking-widest text-lg ${GENERAL_THEME.inputBg} p-3.5 rounded-xl outline-none uppercase font-mono font-extrabold border-2 focus:border-amber-400 transition-colors`}
                autoFocus
              />
            </div>
            {error && <p className="text-red-400 text-xs font-semibold">{error}</p>}
            <button
              type="submit"
              className={`w-full ${GENERAL_THEME.buttonBg} py-3.5 rounded-xl uppercase tracking-wider font-extrabold transition-all transform hover:-translate-y-0.5`}
            >
              Verify & Proceed
            </button>
          </form>

          <div className="pt-4 border-t border-slate-700/60 text-center">
            <p className="text-xs text-slate-400">
              Please enter the confidential access code issued by your exam invigilator.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-1.5 pt-6 pb-2">
        <p className="text-sm font-black tracking-wider text-amber-400 uppercase drop-shadow-md">
          Website Developed by K. Karthikeya Prasad
        </p>
        <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
          ECLECTICA II TECH-QUIZ • Strict Multi-Vector Proctoring
        </p>
      </div>
    </div>
  );
}
