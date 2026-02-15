import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf, ShieldCheck, Users, HeartHandshake } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            {/* Hero Section with Background */}
            <div className="relative bg-gray-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-50 blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10">
                    <Navbar />

                    {/* Hero Content */}
                    <section className="pt-40 pb-24 px-6 text-center text-white">
                        <div className="container mx-auto max-w-4xl">
                            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6">
                                Our Mission
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight drop-shadow-lg">
                                Building a World Where Giving is Second Nature
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                ShareNest isn't just a platform; it's a movement to reduce waste and
                                strengthen community bonds by ensuring usable items find a second
                                home.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Main Content with Animated Background */}
            <div className="relative overflow-hidden bg-slate-50">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-emerald-50/30 to-white"></div>

                    {/* Floating Blobs */}
                    <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[100px] animate-pulse-soft"></div>
                    <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '4s' }}></div>

                    {/* Moving Curves SVG */}
                    <svg className="absolute top-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
                        <path d="M0,100 C300,200 600,0 900,100 C1200,200 1500,0 1800,100 L1800,0 L0,0 Z" fill="url(#grad1)" className="animate-float" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.1 }} />
                                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-10">

                    {/* Story Section */}
                    <section className="py-20 bg-gray-50 px-6">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
                                        alt="Volunteers packing boxes"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why We Started</h2>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        We noticed a disconnect. Millions of usable items end up in
                                        landfills every year, while countless individuals and NGOs
                                        struggle to find basic resources. The problem wasn't a lack of
                                        generosity, but a lack of infrastructure.
                                    </p>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        ShareNest was born to bridge this gap. We created a space where
                                        giving is transparent, easy, and impactful. By connecting donors
                                        directly with verified NGOs and neighbors, we ensure every item
                                        goes exactly where it's needed most.
                                    </p>
                                    <div className="flex gap-12 border-t border-gray-200 pt-8">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-1">2023</h3>
                                            <p className="text-sm text-gray-500 font-medium">Founded</p>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-1">12</h3>
                                            <p className="text-sm text-gray-500 font-medium">Cities Active</p>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-1">100%</h3>
                                            <p className="text-sm text-gray-500 font-medium">Not-for-profit Focus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="py-20 px-6">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
                                <p className="text-gray-500 text-lg">
                                    The principles that guide every decision we make.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                                        <Leaf size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability First</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Every item shared is one less item in a landfill. We believe in
                                        a circular economy where resources are valued and reused.
                                    </p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Trust & Safety</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        We rigorously verify every NGO on our platform. Safety isn't an
                                        afterthought; it's the foundation of our community.
                                    </p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Community Driven</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Real change happens locally. We empower neighborhoods to take
                                        care of their own, fostering connections that last.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-20 bg-gray-50 px-6">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet the Team</h2>
                                <p className="text-gray-500 text-lg">
                                    The people working behind the scenes to make sharing simple.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Team Member 1 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
                                        alt="Sarah Chen"
                                        className="w-24 h-24 rounded-full mx-auto mb-5 object-cover bg-gray-100"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sarah Chen</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Co-Founder & CEO</p>
                                    <p className="text-sm text-gray-500">
                                        Former environmental scientist passionate about waste reduction.
                                    </p>
                                </div>
                                {/* Team Member 2 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                                        alt="David Okonjo"
                                        className="w-24 h-24 rounded-full mx-auto mb-5 object-cover bg-gray-100"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">David Okonjo</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Head of Technology</p>
                                    <p className="text-sm text-gray-500">
                                        Building scalable tech for social good. Open source advocate.
                                    </p>
                                </div>
                                {/* Team Member 3 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                                        alt="Elena Rodriguez"
                                        className="w-24 h-24 rounded-full mx-auto mb-5 object-cover bg-gray-100"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Elena Rodriguez</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Community Lead</p>
                                    <p className="text-sm text-gray-500">
                                        Connecting NGOs with corporate partners and local donors.
                                    </p>
                                </div>
                                {/* Team Member 4 */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                                        alt="Amir Fayed"
                                        className="w-24 h-24 rounded-full mx-auto mb-5 object-cover bg-gray-100"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Amir Fayed</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Product Design</p>
                                    <p className="text-sm text-gray-500">
                                        Crafting intuitive experiences that encourage generosity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-24 bg-black text-white text-center px-6">
                        <div className="container mx-auto max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                Be Part of the Solution
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                Whether you have items to give or need support for your cause, there
                                is a place for you at ShareNest.
                            </p>
                            <button className="bg-white text-black font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
                                Join the Community
                            </button>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default About;
