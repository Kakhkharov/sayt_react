import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowLeft, ShieldCheck, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function MailcowLogin() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [showForgotModal, setShowForgotModal] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!login.trim()) {
            setStatusMessage({ type: 'error', text: 'Iltimos, login yoki e-pochta manzilingizni kiriting!' });
            return;
        }
        if (!password) {
            setStatusMessage({ type: 'error', text: 'Iltimos, parolingizni kiriting!' });
            return;
        }

        setIsLoading(true);
        setStatusMessage(null);

        // Simulated login for Mailcow portal
        setTimeout(() => {
            setIsLoading(false);
            setStatusMessage({
                type: 'info',
                text: 'Mailcow ichki pochta serveriga ulanish tekshirilmoqda. Haqiqiy tizimga kirish uchun ichki tarmoq (VPN/LAN) orqali avtorizatsiyadan o\'ting.'
            });
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#061026] via-[#0a1b3f] to-[#0f234f] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950">
            {/* Background decorative effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Top Bar with back link */}
            <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Maktab saytiga qaytish</span>
                </Link>

                <div className="flex items-center gap-2 text-[11px] md:text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    <span>Mailcow Server: Faol</span>
                </div>
            </header>

            {/* Central Login Card */}
            <main className="w-full max-w-md mx-auto px-4 py-8 relative z-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
                    {/* Header: Logo and School Title */}
                    <div className="text-center mb-8">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white p-2.5 shadow-[0_0_30px_rgba(0,180,255,0.3)] border-2 border-cyan-400/40 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                            <img
                                src="/images/aa1_logo.png"
                                alt="Termiz Prezident Maktabi Logosi"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h1 className="text-lg md:text-xl font-black text-white tracking-wide uppercase font-['Cinzel',serif]">
                            Termiz shahridagi
                        </h1>
                        <h2 className="text-sm md:text-base font-bold text-cyan-300 tracking-wide uppercase">
                            Prezident maktabi
                        </h2>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
                            <Mail className="w-3.5 h-3.5" />
                            <span>Ichki Mailcow Pochta Tizimi</span>
                        </div>
                    </div>

                    {/* Notification / Status Message */}
                    {statusMessage && (
                        <div
                            className={`mb-6 p-3.5 rounded-2xl text-xs flex items-start gap-2.5 ${
                                statusMessage.type === 'error'
                                    ? 'bg-rose-500/20 border border-rose-500/40 text-rose-200'
                                    : 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-100'
                            }`}
                        >
                            {statusMessage.type === 'error' ? (
                                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            ) : (
                                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                            )}
                            <span className="leading-relaxed">{statusMessage.text}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Login input */}
                        <div>
                            <label className="block text-xs font-extrabold text-slate-300 mb-2 uppercase tracking-wider">
                                Login yoki E-pochta
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    placeholder="login yoki ism@pmtermiz.uz"
                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Password input */}
                        <div>
                            <label className="block text-xs font-extrabold text-slate-300 mb-2 uppercase tracking-wider">
                                Parol
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <Lock className="w-4 h-4" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full pl-10 pr-11 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                                    title={showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Options: Remember & Forgot Password */}
                        <div className="flex items-center justify-between text-xs pt-1">
                            <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-white/30 bg-white/10 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-0 cursor-pointer"
                                />
                                <span>Eslab qolish</span>
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowForgotModal(true)}
                                className="text-cyan-300 hover:text-cyan-200 font-bold hover:underline cursor-pointer transition-colors"
                            >
                                Parolni unutdingizmi?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-cyan-500 via-[#0088cc] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Kirish</span>
                                    <LogIn className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Bottom Security Note */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Xavfsiz 256-bit SSL/TLS shifrlangan pochta portali</span>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs text-slate-400 relative z-10">
                <p>© 2026 Termiz shahridagi Prezident maktabi. Barcha huquqlar himoyalangan.</p>
                <p className="text-[11px] text-slate-500 mt-1">Mailcow: dockerized • Rasmiy korporativ pochta serveri</p>
            </footer>

            {/* Parolni unutdingizmi Modal */}
            {showForgotModal && (
                <div
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setShowForgotModal(false)}
                >
                    <div
                        className="bg-[#0c1a36] border border-cyan-500/30 text-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
                            <KeyRound className="w-6 h-6" />
                        </div>

                        <h3 className="text-lg font-black text-white mb-2">
                            Parolni qayta tiklash
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            Ichki Mailcow pochta tizimi maktabning yopiq korporativ tarmog'iga tegishli. Xavfsizlik qoidalariga binoan, parolni unutgan xodimlar yoki o'qituvchilar parolni tiklash uchun maktabning AT (IT) bo'limi ma'muriga murojaat qilishlari kerak:
                        </p>

                        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs mb-6">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">IT Administrator:</span>
                                <span className="font-bold text-cyan-300">admin@pmtermiz.uz</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">Ishonch telefoni:</span>
                                <span className="font-bold text-white">+998 55 452 09 22</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">Xona:</span>
                                <span className="font-bold text-white">2-bino, 204-xona (Server xonasi)</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowForgotModal(false)}
                            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                        >
                            Tushundim, yopish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
