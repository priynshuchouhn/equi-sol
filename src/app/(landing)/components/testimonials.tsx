import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="py-16">
    <h2 className='text-4xl lg:text-5xl text-center font-semibold mb-10'>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-indigo-400 to-purple-800 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-center font-semibold leading-none text-transparent ">
          What People Are Saying
          </span>
        </h2> 
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials_upper}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonial_bottom}
        direction="left"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
    </div>
  );
}

const testimonials_upper = [
    {
      "name": "Anita Sharma",
      "role": "Founder & CEO, NextGen Solutions",
      "testimonial": "This platform has completely transformed how we manage our equity. The integration with the Solana blockchain ensures transparency and security in every transaction."
    },
    {
      "name": "Rohit Patel",
      "role": "Investor",
      "testimonial": "The instant settlement feature is a game-changer. The ability to trade shares in real-time without any delays has greatly improved my investment strategy."
    },
    {
      "name": "Sanjay Verma",
      "role": "CFO, EnviroTech India",
      "testimonial": "The automated dividend distribution through smart contracts is a massive time-saver. Our shareholders appreciate the transparency and efficiency this platform offers."
    },
    {
      "name": "Priya Mehta",
      "role": "Crypto Enthusiast",
      "testimonial": "I’m impressed with the decentralized nature of the platform. The real-time voting feature is a fantastic addition for anyone interested in corporate governance."
    },
    {
      "name": "David Miller",
      "role": "Head of Operations, EcoWave",
      "testimonial": "The ability to use our shares across various DeFi platforms thanks to cross-platform integration is brilliant. It has opened up so many new opportunities for us."
    },
    {
      "name": "Radhika Iyer",
      "role": "Tech Entrepreneur",
      "testimonial": "The platform’s security and real-time features have instilled confidence in our investors. We’ve seen a significant boost in shareholder engagement."
    },
    {
      "name": "Amitabh Joshi",
      "role": "Private Investor",
      "testimonial": "Trading shares on this platform is a breeze. The fast transaction speeds and minimal fees make it the best choice for serious investors."
    },
    {
      "name": "Shweta Gupta",
      "role": "Blockchain Enthusiast",
      "testimonial": "The decentralized authentication and secure transactions make me feel safe while trading. This platform is truly built for the future."
    },
    {
      "name": "Rajesh Khanna",
      "role": "CEO, GreenEnergy Corp.",
      "testimonial": "The on-chain voting system is fantastic! It has allowed our shareholders to participate in decision-making more effectively and transparently."
    },
    {
      "name": "Sophia Liu",
      "role": "Venture Capitalist",
      "testimonial": "This platform offers a unique blend of innovation and security. The ability to manage shares with such ease is unmatched in the market."
    },
    {
      "name": "Nikhil Reddy",
      "role": "Angel Investor",
      "testimonial": "The fractional ownership feature has allowed me to diversify my portfolio like never before. It’s perfect for those looking to maximize their investments."
    },
    {
      "name": "Manoj Agarwal",
      "role": "COO, TechRevive",
      "testimonial": "The instant trade settlements have improved our liquidity, and the smart contract-based dividends ensure our shareholders are always in the loop."
    },
    {
      "name": "Elizabeth Thompson",
      "role": "Financial Advisor",
      "testimonial": "This platform is a must-have for any serious investor. The real-time transactions and automated compliance tools make managing shares effortless."
    },
    {
      "name": "Deepika Nair",
      "role": "Head of Finance, BioTech Innovations",
      "testimonial": "Our shareholders have never been more satisfied. The transparency and efficiency of this platform have raised the bar in corporate governance."
    },
    {
      "name": "Michael Adams",
      "role": "Crypto Investor",
      "testimonial": "The cross-platform integration has allowed me to leverage my shares in ways I never thought possible. It’s a revolutionary tool for investors."
    },
  ];

  const testimonial_bottom = [
    {
        "name": "Arjun Singh",
        "role": "Investor & Trader",
        "testimonial": "The platform’s features like fractional ownership and social trading have given me new ways to grow my investments. It’s truly innovative."
      },
      {
        "name": "Lakshmi Prasad",
        "role": "CEO, FutureTech India",
        "testimonial": "We’ve seen a marked improvement in shareholder engagement thanks to the real-time voting and community-driven growth features."
      },
      {
        "name": "Daniel Perez",
        "role": "Blockchain Analyst",
        "testimonial": "This platform is ahead of its time. The combination of Solana’s technology and the platform’s unique features make it a must for any investor."
      },
      {
        "name": "Neha Kapoor",
        "role": "Chief Strategy Officer, InnovateX",
        "testimonial": "Managing our company’s shares has never been easier. The automated compliance and reporting tools are particularly impressive."
      },
      {
        "name": "Christopher Williams",
        "role": "Start-Up Advisor",
        "testimonial": "The platform’s ease of use and security features have made it my go-to for advising start-ups on equity management and trading."
      },
      {
        "name": "Vikram Desai",
        "role": "Entrepreneur",
        "testimonial": "The platform has simplified the process of issuing and trading shares. The real-time transaction capabilities are particularly useful."
      },
      {
        "name": "Maya Rao",
        "role": "Investor",
        "testimonial": "I appreciate the transparency and security that this platform provides. The automated dividend distribution is a standout feature for me."
      },
      {
        "name": "Robert Johnson",
        "role": "CEO, SmartGrid Solutions",
        "testimonial": "This platform’s innovative features have made it easier for us to engage with our shareholders and ensure their satisfaction."
      },
      {
        "name": "Vishal Kulkarni",
        "role": "Blockchain Developer",
        "testimonial": "The technology behind this platform is solid. The focus on decentralization and security is exactly what the market needs."
      },
      {
        "name": "Emily Davis",
        "role": "Crypto Trader",
        "testimonial": "The ability to trade shares in real-time with minimal fees has made this platform my top choice for investing in companies."
      },
      {
        "name": "Ashok Menon",
        "role": "CFO, HealthTech India",
        "testimonial": "The smart contract-driven dividend payouts have streamlined our processes and improved shareholder satisfaction significantly."
      },
      {
        "name": "Rajiv Bhattacharya",
        "role": "Financial Consultant",
        "testimonial": "This platform’s compliance tools are impressive. They make it easy to navigate the complexities of financial regulations while trading shares."
      },
      {
        "name": "Meera Jain",
        "role": "Investor",
        "testimonial": "The platform’s fractional ownership feature has allowed me to invest in high-value companies with ease, expanding my investment opportunities."
      },
      {
        "name": "Samuel Lee",
        "role": "Venture Capitalist",
        "testimonial": "I’m impressed by the platform’s real-time transaction capabilities and the level of security it provides. It’s perfect for serious investors."
      },
      {
        "name": "Sunita Deshmukh",
        "role": "CTO, AI Innovations",
        "testimonial": "The seamless integration with Solana has made this platform our preferred choice for managing and trading shares securely."
      }
  ]
