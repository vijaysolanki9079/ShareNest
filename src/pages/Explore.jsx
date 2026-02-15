import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Search, MapPin, LayoutGrid, Utensils, Home, BookOpen,
    PawPrint, HeartPulse, TreePine, BadgeCheck, Star, Filter
} from 'lucide-react';

const Explore = () => {
    const [activeCategory, setActiveCategory] = useState('All Causes');
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    const categories = [
        { name: 'All Causes', icon: <LayoutGrid size={16} /> },
        { name: 'Food & Hunger', icon: <Utensils size={16} /> },
        { name: 'Homelessness', icon: <Home size={16} /> },
        { name: 'Education', icon: <BookOpen size={16} /> },
        { name: 'Animal Welfare', icon: <PawPrint size={16} /> },
        { name: 'Health', icon: <HeartPulse size={16} /> },
        { name: 'Environment', icon: <TreePine size={16} /> },
    ];

    const ngos = [
        {
            id: 1,
            name: "Annapoorna Food Relief",
            category: "Food & Hunger",
            description: "Providing nutritious meals to daily wage workers and families in need across Delhi NCR. Focusing on zero hunger.",
            distance: "2.5 km away",
            location: "Delhi",
            rating: "4.9 (156)",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop",
            verified: true
        },
        {
            id: 2,
            name: "Jivdaya Charitable Trust",
            category: "Animal Welfare",
            description: "Dedicated to helping stray animals in Ahmedabad. We provide medical aid, shelter, and rehabilitation for injured birds and animals.",
            distance: "5.0 km away",
            location: "Ahmedabad",
            rating: "4.8 (342)",
            image: "https://images.unsplash.com/photo-1596272875729-ed2c21d50c44?q=80&w=1000&auto=format&fit=crop",
            verified: true
        },
        {
            id: 3,
            name: "Vidya Arogaya sansthan",
            category: "Education",
            description: "Empowering underprivileged children in rural Maharashtra with quality education and digital literacy tools.",
            distance: "12 km away",
            location: "Pune",
            rating: "5.0 (89)",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
            verified: true
        },
        {
            id: 4,
            name: "Rain Basera Foundation",
            category: "Homelessness",
            description: "Providing night shelters and warm clothing to the homeless population in North India during extreme winters.",
            distance: "8 km away",
            location: "Lucknow",
            rating: "4.7 (210)",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
            verified: true
        },
        {
            id: 5,
            name: "Vridhjan Seva Samiti",
            category: "Health",
            description: "Healthcare and companionship for abandoned senior citizens. We run free medical camps and support homes.",
            distance: "4.0 km away",
            location: "Varanasi",
            rating: "4.6 (55)",
            image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1000&auto=format&fit=crop",
            verified: false
        },
        {
            id: 6,
            name: "Green Yatra",
            category: "Environment",
            description: "Planting trees and promoting urban biodiversity in Mumbai and Bangalore. Join our weekend plantation drives.",
            distance: "15 km away",
            location: "Mumbai",
            rating: "4.9 (500+)",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
            verified: true
        }
    ];

    // Filtering Logic
    const filteredNgos = ngos.filter(ngo => {
        const matchesCategory = activeCategory === 'All Causes' || ngo.category === activeCategory;
        const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ngo.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLocation = locationQuery === '' ||
            ngo.location.toLowerCase().includes(locationQuery.toLowerCase());

        return matchesCategory && matchesSearch && matchesLocation;
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Navbar />

            {/* Search Hero */}
            <section className="bg-gray-600 pt-32 pb-24 px-6 text-center text-white relative">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                        Find Organizations Near You
                    </h1>

                    <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
                        <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100 h-12 md:h-auto">
                            <Search className="text-gray-400 w-5 h-5 mr-3" />
                            <input
                                type="text"
                                placeholder="Search by name or keyword..."
                                className="w-full text-gray-900 placeholder-gray-400 outline-none text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex-[0.6] flex items-center px-4 h-12 md:h-auto">
                            <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                            <input
                                type="text"
                                placeholder="Location (e.g. Delhi)"
                                className="w-full text-gray-900 placeholder-gray-400 outline-none text-base"
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                            />
                        </div>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl transition-colors h-12 md:h-auto w-full md:w-auto mt-2 md:mt-0">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 pb-24">

                {/* Filters */}
                <div className="mb-10 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`
                                    flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border
                                    ${activeCategory === cat.name
                                        ? 'bg-emerald-900 text-white border-emerald-900'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                                    }
                                `}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <p className="font-semibold text-gray-900">
                        Showing <span className="text-emerald-700">{filteredNgos.length} organizations</span> nearby
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                        <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 focus:ring-emerald-500 focus:border-emerald-500 outline-none cursor-pointer hover:border-gray-300">
                            <option>Recommended</option>
                            <option>Distance: Nearest</option>
                            <option>Rating: Highest</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNgos.length > 0 ? (
                        filteredNgos.map((ngo) => (
                            <div key={ngo.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                                {/* Card Image */}
                                <div className="h-48 relative overflow-hidden bg-gray-100">
                                    <img
                                        src={ngo.image}
                                        alt={ngo.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {ngo.verified && (
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                            <BadgeCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                                            <span className="text-[10px] font-bold tracking-wider text-blue-900">VERIFIED</span>
                                        </div>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-2">
                                        {ngo.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                        {ngo.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                                        {ngo.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-5 pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {ngo.distance}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                            {ngo.rating}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                                            Donate
                                        </button>
                                        <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-lg transition-colors">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-gray-500">
                            <p className="text-lg">No organizations found matching your criteria.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-16 text-center">
                    <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 px-8 rounded-xl transition-all hover:px-10">
                        Load More Organizations
                    </button>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Explore;
