import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import * as Icons from 'lucide-react';
import { toast } from '@/components/ui/toaster';
import { BRANDING } from '@/data/branding';

const Profile: React.FC = () => {
  const { user, login, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  React.useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone || '');
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: 'Missing information',
        description: 'Please provide both your name and email.',
        variant: 'destructive',
      });
      return;
    }
    await login(email, name);
    setIsEditing(false);
    toast({
      title: 'Profile Updated',
      description: 'Your client contact information has been updated.',
      variant: 'success',
    });
  };

  return (
    <div className="bg-[#050B14] text-white min-h-[80vh] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl font-black font-sans tracking-tight text-white">Client Portal & Profile</h1>
            <p className="text-sm text-slate-400 mt-1">Manage your administrative contact credentials and register for VIP tracking.</p>
          </div>
          {user ? (
            <button
              onClick={() => logout()}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-xs font-semibold text-slate-300 hover:text-red-400 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Icons.LogOut className="w-4 h-4" />
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer hover:brightness-110 shadow-md"
            >
              <Icons.LogIn className="w-4 h-4" />
              Register Profile
            </button>
          )}
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* User Info Overview */}
          <div className="p-8 rounded-3xl bg-[#0B1528] border border-white/10 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center text-2xl font-bold mx-auto">
              {user?.name ? user.name.charAt(0).toUpperCase() : <Icons.User className="w-8 h-8" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{user?.name || 'Guest Visitor'}</h3>
              <p className="text-xs text-slate-400 font-mono">{user?.email || 'No active session'}</p>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono border ${
              user
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-white/5 text-slate-400 border-white/10'
            }`}>
              {user ? 'Verified Client' : 'Unregistered'}
            </div>
          </div>

          {/* Details Form / View */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-[#0B1528] border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Client Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-bold text-[#D4AF37] hover:underline cursor-pointer"
              >
                {isEditing ? 'Cancel' : user ? 'Edit Information' : 'Enter Credentials'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Full Name / Corporate Representative</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="e.g. Tariq Al Mansoori"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    placeholder="+971 56 805 5093"
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  Save Profile
                </button>
              </form>
            ) : user ? (
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Full Name</span>
                  <span className="font-semibold text-white">{user.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Registered Email</span>
                  <span className="font-mono text-slate-200">{user.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Phone Contact</span>
                  <span className="font-mono text-slate-200">{user.phone || 'Not specified'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Account Type</span>
                  <span className="text-[#D4AF37] font-bold">Client Account</span>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center space-y-3">
                <p className="text-xs text-slate-400">
                  No registered profile found in this session. Save your contact details to facilitate fast-track inquiries.
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-5 py-2 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold cursor-pointer"
                >
                  Create Client Record
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Active Applications Showcase */}
        <div className="p-8 rounded-3xl bg-[#0B1528] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Application Tracking Portal</h3>
            <span className="text-xs text-slate-400 font-mono">Real-time ICP & GDRFA Sync</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs text-slate-300">
                To check active government dossier milestones, please use your official CORE LINK Reference Number in our Tracker, or contact your assigned PRO advisor.
              </p>
              <div className="text-[11px] text-slate-400 font-mono">
                Ajman HQ Hotline: <strong className="text-white">06 805 5093</strong> · WhatsApp: <strong className="text-emerald-400">+971 56 805 5093</strong>
              </div>
            </div>
            <a
              href={`https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK, I would like to inquire about my application status.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold shrink-0 hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5"
            >
              <Icons.MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
