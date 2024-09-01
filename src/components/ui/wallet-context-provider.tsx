'use client';
import React, { ReactNode, useMemo } from 'react'
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");

function WalletContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

    )
}

export default WalletContextProvider
