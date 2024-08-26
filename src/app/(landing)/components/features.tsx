import { randomUUID } from 'crypto';
import React, { useId } from 'react'

const grid = [
    {
      "title": "Decentralized Share Ownership",
      "description": "Each share is represented as a unique NFT on the Solana blockchain, ensuring true ownership and transparency."
    },
    {
      "title": "Real-Time On-Chain Voting",
      "description": "Shareholders can participate in real-time voting on company decisions, with votes securely recorded on the blockchain."
    },
    {
      "title": "Instant Settlement of Trades",
      "description": "Enjoy instant trade settlements, eliminating the typical T+2 settlement period and improving liquidity."
    },
    {
      "title": "Integrated Solana Wallet Authentication",
      "description": "Authenticate and interact with the platform using your Solana wallet for secure, decentralized login."
    },
    {
      "title": "Dividend Distribution via Smart Contracts",
      "description": "Companies can automatically distribute dividends to shareholders through smart contracts, ensuring timely payouts."
    },
    {
      "title": "Social Trading and Insights",
      "description": "Follow top traders, view their strategies in real-time, and copy their trades to enhance your investment approach."
    },
    {
      "title": "Cross-Platform Integration",
      "description": "Use your shares as collateral for loans or trade them on secondary marketplaces through DeFi integrations."
    },
    {
      "title": "Fractional Ownership",
      "description": "Buy and sell fractional shares to diversify your portfolio and access high-value companies with minimal capital."
    },
    {
      "title": "Community Engagement and Rewards",
      "description": "Earn rewards for participating in the community, such as voting, referring new users, and contributing to discussions."
    }
  ]

function Features() {
  return (
    <div className="py-8 lg:py-10" id='features'>
       <h2 className='text-4xl lg:text-5xl text-center font-semibold mb-10'>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-indigo-400 to-purple-800 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-center font-semibold leading-none text-transparent ">
          Why Our Platform Stands Out
          </span>
        </h2> 
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2 lg:gap-4 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features



export const Grid = ({
    pattern,
    size,
  }: {
    pattern?: number[][];
    size?: number;
  }) => {
    const p = pattern ?? [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
      <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-purple-900/30 from-purple-100/30 to-purple-300/30 dark:to-purple-900/30 opacity-100">
          <GridPattern
            width={size ?? 20}
            height={size ?? 20}
            x="-12"
            y="4"
            squares={p}
            className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-indigo-900/10 fill-indigo-900/10"
          />
        </div>
      </div>
    );
  };
   
  export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();
   
    return (
      <svg aria-hidden="true" {...props}>
        <defs>
          <pattern
            id={patternId}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path d={`M.5 ${height}V.5H${width}`} fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill={`url(#${patternId})`}
        />
        {squares && (
          <svg x={x} y={y} className="overflow-visible">
            {squares.map(([x, y]: any) => (
              <rect
                strokeWidth="0"
                key={`${x}-${y}-${randomUUID()}`}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            ))}
          </svg>
        )}
      </svg>
    );
  }
