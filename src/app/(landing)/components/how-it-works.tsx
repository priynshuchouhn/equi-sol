import React from 'react'
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

function HowItWorks() {
      return (
        <div className="w-full">
          <Timeline data={grid} />
        </div>
      );
}



export default HowItWorks

const grid = [
    {
      "step": 1,
      "title": "Create Your Account",
      "content": "Sign up using your Solana wallet to ensure secure and decentralized access to the platform."
    },
    {
      "step": 2,
      "title": "Register Your Company",
      "content": "List your company on the platform, detailing your business and issuing shares as unique NFTs on the Solana blockchain."
    },
    {
      "step": 3,
      "title": "Trade Shares",
      "content": "Buy and sell shares instantly with other users, leveraging Solana’s fast transaction speeds and minimal fees."
    },
    {
      "step": 4,
      "title": "Participate in Voting",
      "content": "Use your shares to vote on key company decisions, with each vote securely recorded on the blockchain."
    },
    {
      "step": 5,
      "title": "Receive Dividends",
      "content": "Automatically receive dividends through smart contracts, directly into your wallet, with full transparency."
    },
    {
      "step": 6,
      "title": "Engage with the Community",
      "content": "Join a vibrant community, follow top traders, and explore new opportunities to maximize your investments."
    }
  ];
   