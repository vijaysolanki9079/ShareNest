import React from 'react';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Keep the City Warm',
      category: 'Winter Drive',
      categoryColor: 'text-emerald-600',
      description: 'City Shelter NGO is collecting jackets, blankets, and warm clothes for the homeless.',
      endsIn: 'Ends in 5 days',
      progress: 75,
      current: 750,
      goal: 1000,
      unit: 'items',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Back to School Kits',
      category: 'Education',
      categoryColor: 'text-sky-600',
      description: 'Help underprivileged kids start the year right. We need backpacks, notebooks, and pens.',
      endsIn: 'Ends in 12 days',
      progress: 40,
      current: 200,
      goal: 500,
      unit: 'kits',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Community Pantry Restock',
      category: 'Food Relief',
      categoryColor: 'text-amber-600',
      description: 'Urgent need for non-perishable food items for the Downtown Community Pantry.',
      endsIn: 'Ends in 2 days',
      progress: 90,
      current: 450,
      goal: 500,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-end mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Active Campaigns
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Support verified organizations running specific drives right now. Your small contribution creates a massive impact.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white border-2 border-gray-100 text-gray-900 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm">
            View All Campaigns
          </button>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-sm font-bold uppercase tracking-wider ${campaign.categoryColor}`}>
                    {campaign.category}
                  </span>
                  <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{campaign.endsIn}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {campaign.title}
                </h3>

                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  {campaign.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>{campaign.progress}% Funded</span>
                    <span>{campaign.current}/{campaign.goal} {campaign.unit}</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-gray-900 text-white font-semibold text-base rounded-xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30">
                  Donate {campaign.unit}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
