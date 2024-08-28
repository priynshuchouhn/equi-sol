'use client'
import React, { ReactNode } from 'react'
import WalletContextProvider from './wallet-context-provider'

function Providers({children}:Readonly<{children: ReactNode}>) {
  return (
    <WalletContextProvider>
     {children} 
    </WalletContextProvider>
  )
}

export default Providers
