import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assests/img/banner.png';
import logoImg from '../../assests/img/image.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', email);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden bg-gray-900"
        >
            {/* Background Image from Assets */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0 blur-sm scale-110"
                style={{
                    backgroundImage: `url(${bannerImg})`
                }}
            />
            {/* Overlay Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),' +
                        'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 30px 30px'
                }}
            />
            <Link
                to="/"
                className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity"
            >
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full">
                    <ArrowLeft className="w-4 h-4 text-white" />
                </div>
                Back to Home
            </Link>

            <div className="relative z-10 w-full max-w-[440px] px-6">
                <div className="bg-white rounded-3xl p-10 shadow-2xl w-full animate-fade-in">
                    {/* Header */}
                    <div className="text-center mb-8 animate-slide-up">
                        <div className="inline-flex items-center gap-3 font-extrabold text-2xl text-gray-900 mb-6">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex items-center justify-center">
                                <img src={logoImg} alt="ShareNest" className="w-full h-full object-cover" />
                            </div>
                            ShareNest
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
                        <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-900 mb-2">Email address</label>
                            <input
                                type="email"
                                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="flex justify-end mt-2">
                                <a href="#" className="text-xs font-medium text-gray-500 hover:text-gray-900">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-11 bg-gray-900 text-white font-semibold text-sm rounded-lg hover:bg-gray-800 transition-colors mt-2"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6 text-gray-400 text-xs font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="px-3">OR CONTINUE WITH</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Social Login */}
                    <button
                        className="w-full h-11 bg-white border border-gray-200 text-gray-900 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 animate-slide-up"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Chrome className="w-5 h-5 text-gray-900" />
                        Sign in with Google
                    </button>

                    {/* Footer */}
                    <p className="text-center mt-6 text-sm text-gray-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
