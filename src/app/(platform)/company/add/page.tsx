'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import idl from '@/lib/idl.json';
import { Loader2, CoinsIcon, InfoIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider, Idl, Program, BN } from '@coral-xyz/anchor';
import toast from 'react-hot-toast';
import { Keypair, PublicKey, SystemProgram } from '@solana/web3.js';
import { registerCompany } from '@/lib/actions';


export default function Component() {
    const [isLoading, setIsLoading] = useState(false)
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const provider = new AnchorProvider(connection, wallet!, {
        commitment: 'confirmed'
    });
    const program = new Program(idl as Idl, provider);



    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        tickerSymbol: '',
        initialSupply: '',
        initialPrice: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!wallet?.publicKey) {
            toast.error('Please connect a wallet.');
            return;
        }
        setIsLoading(true)

        try {
            const companyAccount = Keypair.generate();
            const tx = await program.methods.registerCompany(formData.companyName, new BN(+formData.initialSupply), new BN(+formData.initialPrice), formData.tickerSymbol).accounts({
                company: companyAccount.publicKey,
                registry: new PublicKey('AVrH3oe3VEj73SpaBJxAdJi2jL6NwnjV9iTjmoFTaKXC'),
                user: wallet.publicKey,
                systemProgram: SystemProgram.programId,
            }).signers([companyAccount])
            .rpc()
            if(!tx) return;
            const res = await registerCompany(formData.companyName, formData.description, companyAccount.publicKey.toBase58(), +formData.initialSupply) 
            if(res){
                toast.success('Commpany Registered successfully');
                setFormData({ companyName: '', description: '', tickerSymbol: '', initialSupply: '', initialPrice: '' })
            }else{
                toast.error('Unable to register company');
            }
            // console.log('Company registered:', formData)
        } catch (error) {
            console.error('Registration failed:', error)
            toast.error('Failed to register company');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='p-2 py-4'>
            <Card className="w-full mx-auto">
                <CardHeader>
                    <CardTitle>Register Your Company</CardTitle>
                    <CardDescription>Enter your company details to register on EquiSol.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Enter your company name"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="tickerSymbol">Ticker Symbol</Label>
                                <Input
                                    id="tickerSymbol"
                                    name="tickerSymbol"
                                    placeholder="e.g., SOL, USDC"
                                    value={formData.tickerSymbol}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <Label htmlFor="description">Company Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Briefly describe your company"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="initialSupply" className="flex items-center">
                                    Initial NFT Share Supply
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <InfoIcon className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Each share is represented as a unique NFT on the Solana blockchain.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Label>
                                <Input
                                    id="initialSupply"
                                    name="initialSupply"
                                    type="number"
                                    placeholder="Enter initial NFT share supply"
                                    value={formData.initialSupply}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="initialPrice" className="flex items-center">Initial Price per NFT Share
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <InfoIcon className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Each share is represented as a unique NFT on the Solana blockchain.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Label>
                                <div className="relative">
                                    <CoinsIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="initialPrice"
                                        name="initialPrice"
                                        type="number"
                                        step="0.000001"
                                        min="0"
                                        placeholder="0.000000"
                                        value={formData.initialPrice}
                                        onChange={handleInputChange}
                                        className="pl-10"
                                        required
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">SOL</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex gap-2'>
                            <Button type="submit" className="w-auto" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Registering on Solana...
                                    </>
                                ) : (
                                    'Register Company'
                                )}
                            </Button>
                            <Link href={'/company'}>
                                <Button type="button" variant={'destructive'} className="w-auto" disabled={isLoading}>
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}