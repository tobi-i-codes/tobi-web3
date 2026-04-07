import React from 'react';

const Logo = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Beyond the Threshold Logo"
            shapeRendering="geometricPrecision"
            className="overflow-visible"
        >
            <defs>
                <mask id="v-mask">
                    <rect width="100" height="100" fill="white" />

                    {/* Peak area mask */}
                    <polygon
                        points="50,2 43,18 57,18"
                        fill="black"
                    />

                    {/* Left leg */}
                    <line
                        x1="46" y1="15"
                        x2="25" y2="82"
                        stroke="black"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />

                    {/* Right leg */}
                    <line
                        x1="54" y1="15"
                        x2="75" y2="82"
                        stroke="black"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </mask>
            </defs>

            {/* Circle */}
            <circle
                cx="50"
                cy="52"
                r="38"
                stroke="#171717"
                strokeWidth="2.5"
                fill="none"
                mask="url(#v-mask)"
            />

            {/* V-shape with Tailwind custom animation */}
            <g className="animate-rise origin-bottom">
                <line x1="50" y1="5" x2="25" y2="82" stroke="#171717" strokeWidth="2.5" />
                <line x1="50" y1="5" x2="75" y2="82" stroke="#171717" strokeWidth="2.5" />
            </g>
        </svg>
    );
};

export default Logo;
