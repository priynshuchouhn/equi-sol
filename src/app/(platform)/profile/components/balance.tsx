'use client'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";
 
export const BalanceDisplay: FC = () => {
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey } = useWallet();
 
  useEffect(() => {
    if (!connection || !publicKey) {
      return;
    }
 
    connection.getBalance(
      publicKey,
      "confirmed",
    ).then(balance =>{
        setBalance(balance);
    });
 
    connection.getAccountInfo(publicKey).then(info => {
      setBalance(info?.lamports || 0);
    });
  }, [connection, publicKey]);
 
  return (
    <p className="mt-2">
     {publicKey ? <span> Your Balance: <span className="font-semibold">{balance / LAMPORTS_PER_SOL} SOL</span></span> : ""}
    </p>
  );
};