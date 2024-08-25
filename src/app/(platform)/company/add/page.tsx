'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { toast } from "@/components/ui/use-toast"
import { Loader2, CoinsIcon, InfoIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)

        // Simulate blockchain interaction
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate network delay
            console.log('Company registered:', formData)
            //   toast({
            //     title: "Registration Successful",
            //     description: `${formData.companyName} has been registered on the Solana blockchain with an initial price of ${formData.initialPrice} SOL per NFT share.`,
            //   })
            setFormData({ companyName: '', description: '', tickerSymbol: '', initialSupply: '', initialPrice: '' })
        } catch (error) {
            console.error('Registration failed:', error)
            //   toast({
            //     title: "Registration Failed",
            //     description: "There was an error registering your company. Please try again.",
            //     variant: "destructive",
            //   })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='p-2'>
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
                        <div className=" col-span-2">
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
                        <Button type="button" variant={'destructive'} className="w-auto" disabled={isLoading}>
                            Cancel
                        </Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}