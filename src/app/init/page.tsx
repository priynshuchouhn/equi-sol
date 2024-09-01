'use client';
import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import React, { useEffect } from 'react'
import idl from '@/lib/idl.json';
import { Keypair, SystemProgram } from "@solana/web3.js";

function Page() {
    const { connection } = useConnection();
    const wallet = useAnchorWallet(); 
    const provider = new AnchorProvider(connection, wallet!, {
        commitment: 'confirmed'
    });    
    const program = new Program(idl as Idl, provider);

    const initializeProgram = async () => {
      console.log('Program Initialized')
      const registryKeypair = Keypair.generate();
      const tx = await program.methods.initializeProgram().accounts({
        registry: registryKeypair.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      }).signers([registryKeypair]).rpc();
      console.log(registryKeypair.publicKey.toBase58())
      console.log(tx);
    }
    
    useEffect(()=>{
      // if(wallet){
      //   initializeProgram()
      // }
    },[wallet])
  return (
    <div>
      This Route is used to initializeProgram;
    </div>
  )
}

export default Page
