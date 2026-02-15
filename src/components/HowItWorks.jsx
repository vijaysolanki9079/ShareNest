import React from 'react';
import { Camera, MessageCircle, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: '1. List Your Item',
      description: 'Snap a photo, add a brief description, and choose who can see your listing—NGOs or everyone nearby.',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      delay: '0ms',
    },
    {
      icon: MessageCircle,
      title: '2. Receive Requests',
      description: 'Review requests from verified NGOs or neighbors. Chat securely to arrange details without sharing personal info.',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600',
      delay: '200ms',
    },
    {
      icon: Package,
      title: '3. Easy Handoff',
      description: 'Confirm the donation and hand it off. Some NGOs offer pickup services for bulk items or furniture.',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      delay: '400ms',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="how-it-works">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How ShareNest Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Making a difference is simpler than ever. Connect directly with those in need in just three easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-100 via-sky-100 to-amber-100 opacity-50 w-full"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: step.delay }}
            >
              <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                <step.icon className={`w-8 h-8 ${step.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
