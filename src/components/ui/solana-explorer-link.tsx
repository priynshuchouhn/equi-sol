import Link from 'next/link';

const SolanaExplorerLink = ({ address }:{address: string}) => {
  const explorerUrl = `https://explorer.solana.com/address/${address}?cluster=devnet`;

  return (
    <Link href={explorerUrl} target='_blank' className='text-indigo-500'>
        <p className="font-medium break-all"> {address}</p>
    </Link>
  );
};

export default SolanaExplorerLink;
