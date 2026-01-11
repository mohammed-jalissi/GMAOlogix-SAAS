import React from 'react';

const Logo = ({ className = "h-10 w-auto" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon: Gear + Hexagon/House Hybrid */}
            <svg viewBox="0 0 100 100" className="h-full w-auto text-primary fill-current" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A896" /> {/* Primary Turquoise */}
                        <stop offset="100%" stopColor="#F59E0B" /> {/* Secondary Amber */}
                    </linearGradient>
                </defs>

                {/* Tech Hexagon Container */}
                <path d="M50 5 L93 28 V72 L50 95 L7 72 V28 Z" fill="none" stroke="url(#logoGradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                {/* Internal Circuit/Gear Elements */}
                <circle cx="50" cy="50" r="15" fill="none" stroke="#F59E0B" strokeWidth="6" />
                <path d="M50 25 V35 M50 65 V75 M25 50 H35 M65 50 H75" stroke="#00A896" strokeWidth="6" strokeLinecap="round" />
                <circle cx="50" cy="50" r="6" fill="#00A896" />
            </svg>

            {/* Text Logo */}
            <div className="flex flex-col justify-center">
                <span className="font-bold text-2xl tracking-tight text-primary leading-none">
                    GMAO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">logix</span>
                </span>
            </div>
        </div>
    );
};

export default Logo;
