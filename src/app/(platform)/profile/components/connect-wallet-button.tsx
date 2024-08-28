'use client';

import { ButtonProps } from "@/components/ui/button";
import { BaseWalletMultiButton } from "@solana/wallet-adapter-react-ui";
const LABELS = {
    'change-wallet': 'Change wallet',
    connecting: 'Connecting ...',
    'copy-address': 'Copy address',
    copied: 'Copied',
    disconnect: 'Disconnect',
    'has-wallet': 'Connect Now',
    'no-wallet': 'Choose Wallet',
} as const;
export function ConnectWalletButton(props: ButtonProps) {
    return <BaseWalletMultiButton {...props} labels={LABELS} />;
}
