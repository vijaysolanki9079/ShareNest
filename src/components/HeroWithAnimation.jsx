import React, { useEffect, useRef } from 'react';

/**
 * Hero Component with Animation Canvas
 * 
 * This component is ready for image sequence animations.
 * The animation canvas (#hero-animation-canvas) is positioned
 * to accept your antigravity/GSAP animations.
 * 
 * To add your animation:
 * 1. Install your animation library (GSAP, Framer Motion, etc.)
 * 2. Use the useEffect hook to initialize your animation
 * 3. Target the #hero-animation-canvas element
 * 
 * See ANIMATION_GUIDE.md for detailed integration examples
 */

const HeroWithAnimation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Your animation initialization goes here
        // Example: GSAP, Framer Motion, custom canvas animation, etc.

        // const canvas = canvasRef.current;
        // if (canvas) {
        //   // Initialize your animation library here
        //   // Example with GSAP:
        //   // gsap.to(animationRef.current, { ... });
        // }

        return () => {
            // Cleanup animation on unmount
            // Example: animationRef.current?.kill();
        };
    }, []);

    return (
        <section className="relative bg-slate-500 min-h-[850px] flex items-center justify-center text-white overflow-hidden">
            {/* Checkered Pattern Background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
            linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)
          `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 30px 30px'
                }}
            />

            {/* 
        Animation Canvas Container
        This is where your image sequence or animation will render.
        You can use:
        - Canvas element for frame-by-frame rendering
        - Div with background images
        - Video element
        - SVG animations
      */}
            <div
                id="hero-animation-canvas"
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{
                    mixBlendMode: 'soft-light',
                    // Optional: Add a test background to verify positioning
                    // backgroundImage: 'url(/path/to/test-image.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                }}
            >
                {/* 
          Option 1: Canvas for frame-by-frame rendering
          Uncomment if using canvas-based animation:
          
          <canvas 
            width={1920} 
            height={850}
            className="w-full h-full object-cover"
          />
        */}

                {/* 
          Option 2: Video element for pre-rendered animation
          Uncomment if using video:
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-animation.mp4" type="video/mp4" />
          </video>
        */}
            </div>

            {/* Content Layer - Always on top (z-10) */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20">
                {/* Eyebrow */}
                <div className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 opacity-80 animate-fade-in">
                    Experience
                </div>

                {/* Main Headline */}
                <h1
                    className="text-7xl md:text-8xl font-extrabold leading-tight mb-6 tracking-[0.25em] animate-slide-up"
                    style={{
                        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)',
                        letterSpacing: '0.15em',
                        animationDelay: '0.1s'
                    }}
                >
                    COMMUNITY<br />GIVING
                </h1>

                {/* Description */}
                <p
                    className="text-base md:text-lg leading-relaxed opacity-90 mb-10 max-w-xl mx-auto animate-fade-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    Turn everyday items into powerful acts of kindness. ShareNest connects your donations with nearby individuals and verified NGOs—always free, always impact-first.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                >
                    <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        Start Donating
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 transition-all hover:scale-105">
                        Explore Nearby NGOs
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="flex flex-col items-center text-xs opacity-70 mt-20 animate-bounce-slow"
                    style={{ animationDelay: '0.5s' }}
                >
                    <span className="mb-3">Scroll to see how ShareNest works</span>
                    <div className="w-px h-10 bg-white animate-pulse"></div>
                </div>
            </div>

            {/* Curved Bottom Edge */}
            <div
                className="absolute bottom-0 left-0 right-0 h-12 bg-white"
                style={{
                    borderTopLeftRadius: '50% 40px',
                    borderTopRightRadius: '50% 40px',
                    transform: 'translateY(50%)'
                }}
            />
        </section>
    );
};

export default HeroWithAnimation;