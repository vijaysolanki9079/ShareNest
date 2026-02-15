import React from 'react';

const RecentDonations = () => {
  const donations = [
    {
      id: 1,
      title: 'Study Desk',
      category: 'FURNITURE',
      distance: '2km away',
      condition: 'Good Condition',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Fiction Bundle',
      category: 'BOOKS',
      distance: '0.5km away',
      condition: 'Like New',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Acoustic Guitar',
      category: 'MUSIC',
      distance: '5km away',
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Kids Bicycle',
      category: 'KIDS',
      distance: '1.2km away',
      condition: 'Needs Repair',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Just Donated Nearby
          </h2>
          <p className="text-xl text-gray-600">
            See what your neighbors are sharing right now. Join the circle of giving.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {donations.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.distance}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm font-medium text-gray-500 mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  {item.condition}
                </p>

                <button className="w-full py-3 text-sm font-bold text-gray-900 border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                  Request Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentDonations;
