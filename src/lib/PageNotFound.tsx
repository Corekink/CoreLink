import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const PageNotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#050B14] text-white">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#D4AF37]">
        <Icons.AlertTriangle className="w-10 h-10" />
      </div>
      <h1 className="text-4xl sm:text-6xl font-black font-sans tracking-tight mb-3">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-4">Page Not Found</h2>
      <p className="text-slate-400 max-w-md text-sm mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-slate-950 font-bold text-sm shadow-lg hover:opacity-95 transition-all"
      >
        <Icons.Home className="w-4 h-4" />
        Return to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
