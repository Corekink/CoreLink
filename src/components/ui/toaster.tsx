import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
}

let toastListeners: Array<(toast: ToastProps) => void> = [];

export const toast = (props: Omit<ToastProps, 'id'>) => {
  const newToast: ToastProps = {
    ...props,
    id: Math.random().toString(36).substring(2, 9),
  };
  toastListeners.forEach((listener) => listener(newToast));
};

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  React.useEffect(() => {
    const handler = (newToast: ToastProps) => {
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4000);
    };

    toastListeners.push(handler);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== handler);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-3 duration-300 ${
            t.variant === 'destructive'
              ? 'bg-[#180A0E]/95 border-rose-500/50 text-rose-100 shadow-[0_10px_30px_rgba(244,63,94,0.2)]'
              : t.variant === 'success'
              ? 'bg-[#061510]/95 border-emerald-500/50 text-emerald-100 shadow-[0_10px_30px_rgba(16,185,129,0.2)]'
              : 'bg-[#0B1528]/95 border-[#D4AF37]/40 text-white shadow-[0_10px_30px_rgba(200,157,75,0.2)]'
          }`}
        >
          {t.variant === 'success' && (
            <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 border border-emerald-400/30">
              <Icons.CheckCircle2 className="w-4 h-4" />
            </div>
          )}
          {t.variant === 'destructive' && (
            <div className="p-1 rounded-lg bg-rose-500/20 text-rose-400 shrink-0 mt-0.5 border border-rose-400/30">
              <Icons.AlertCircle className="w-4 h-4" />
            </div>
          )}
          {!t.variant || t.variant === 'default' ? (
            <div className="p-1 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/30">
              <Icons.Sparkles className="w-4 h-4" />
            </div>
          ) : null}
          
          <div className="flex-1 min-w-0">
            {t.title && <h5 className="text-xs font-bold font-sans tracking-tight text-white">{t.title}</h5>}
            {t.description && <p className="text-xs text-slate-300 mt-1 leading-relaxed">{t.description}</p>}
          </div>

          <button
            onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Icons.X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
