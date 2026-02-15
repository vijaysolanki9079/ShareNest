import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Camera, Shirt, Armchair, Gamepad2, Monitor, Book, Package } from 'lucide-react';

const Donate = () => {
    const [selectedCategory, setSelectedCategory] = useState('Clothes');
    const [selectedCondition, setSelectedCondition] = useState('Like New');

    const categories = [
        { name: 'Clothes', icon: <Shirt size={24} /> },
        { name: 'Furniture', icon: <Armchair size={24} /> },
        { name: 'Toys', icon: <Gamepad2 size={24} /> },
        { name: 'Electronics', icon: <Monitor size={24} /> },
        { name: 'Books', icon: <Book size={24} /> },
        { name: 'Other', icon: <Package size={24} /> },
    ];

    const conditions = ['New', 'Like New', 'Good', 'Fair'];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 relative">
            {/* Background Image with Blur */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm brightness-50"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop")'
                }}
            ></div>

            <div className="relative z-10 w-full">
                <Navbar />

                {/* Content Wrapper to push below absolute Navbar */}
                <div className="pt-24 pb-12 px-6 flex flex-col items-center">

                    {/* Header */}
                    <div className="text-center mb-10 mt-8 text-white drop-shadow-md">
                        <h1 className="text-3xl font-bold mb-3">List an Item</h1>
                        <p className="text-gray-100 text-base font-medium">
                            Fill in the details below to help us find the right home for your donation.
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-xl p-10 w-full max-w-3xl shadow-2xl">

                        {/* Photos Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-bold mb-4 text-gray-900">Photos</h2>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-10 bg-gray-50 text-center flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                                    <Camera size={24} />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-medium text-gray-900">Add photos of your item</span>
                                    <span className="text-sm text-gray-500">Drag and drop or click to upload (Max 5 photos)</span>
                                </div>
                            </div>
                        </div>

                        {/* Item Details Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-bold mb-6 text-gray-900">Item Details</h2>

                            {/* Title */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-gray-900">Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Men's Winter Jacket, Size L"
                                    className="w-full p-3 border border-gray-200 rounded-md bg-white text-gray-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-gray-900">Category</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat.name}
                                            onClick={() => setSelectedCategory(cat.name)}
                                            className={`
                                            border rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all
                                            ${selectedCategory === cat.name
                                                    ? 'bg-gray-100 border-gray-900 font-semibold text-gray-900'
                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
                                                }
                                        `}
                                        >
                                            <div className={selectedCategory === cat.name ? 'text-gray-900' : 'text-gray-600'}>
                                                {cat.icon}
                                            </div>
                                            <span className="text-sm">{cat.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Condition */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-gray-900">Condition</label>
                                <div className="flex flex-wrap gap-3">
                                    {conditions.map((condition) => (
                                        <button
                                            key={condition}
                                            onClick={() => setSelectedCondition(condition)}
                                            className={`
                                            flex-1 py-2.5 px-4 text-center border rounded-md text-sm cursor-pointer transition-all
                                            ${selectedCondition === condition
                                                    ? 'bg-gray-900 text-white border-gray-900'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                                                }
                                        `}
                                        >
                                            {condition}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Description</label>
                                <textarea
                                    className="w-full p-3 h-32 border border-gray-200 rounded-md bg-white text-gray-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400 resize-none"
                                    placeholder="Describe your item (e.g. brand, color, defects, age)..."
                                ></textarea>
                                <p className="text-xs text-gray-500 mt-2">
                                    Please be honest about the condition to ensure a smooth donation process.
                                </p>
                            </div>
                        </div>

                        {/* Location Section */}
                        <div className="mb-10">
                            <h2 className="text-lg font-bold mb-4 text-gray-900">Location</h2>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-2 text-gray-900">Zip Code</label>
                                    <input
                                        type="text"
                                        placeholder="10001"
                                        className="w-full p-3 border border-gray-200 rounded-md bg-white text-gray-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                                    />
                                </div>
                                <div className="flex-[2]">
                                    <label className="block text-sm font-medium mb-2 text-gray-900">City / Neighborhood</label>
                                    <input
                                        type="text"
                                        placeholder="New Delhi"
                                        className="w-full p-3 border border-gray-200 rounded-md bg-white text-gray-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end items-center gap-4">
                            <button className="text-gray-500 font-normal hover:text-gray-700 transition-colors px-4 py-2">
                                Cancel
                            </button>
                            <button className="bg-emerald-600 text-white font-medium rounded-md px-8 py-2.5 hover:bg-emerald-700 transition-all shadow-sm">
                                List Item
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Donate;
