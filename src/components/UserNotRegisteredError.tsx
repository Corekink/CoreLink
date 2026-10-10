import React from 'react';
import * as Icons from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { getWhatsAppUrl } from '@/data/branding';

const UserNotRegisteredError: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050B14]/90 backdrop-blur-sm p-4">
      <div className="max-w-md w-full bg-[#0B1528] border border-white/10 rounded-2xl p-8 text-center text-white shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
          <Icons.UserX className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">User Not Registered</h3>
        <p className="text-sm text-slate-300 mb-6">
          Your account is not registered with CORE LINK Administrative Services yet. Please contact our official support desk to register.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => logout()}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
          >
            Sign Out
          </button>
          <a
            href={getWhatsAppUrl('support')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#b58b3c] text-slate-950 text-xs font-bold transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserNotRegisteredError;
