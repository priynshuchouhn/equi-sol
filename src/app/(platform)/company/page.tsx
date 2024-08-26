import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, BarChart2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data for demonstration
const companies = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    shares: 100,
    volume: "94.62M",
    price: 178.72,
    change: 2.14,
  },
  {
    name: "Microsoft Corporation",
    symbol: "MSFT",
    shares: 50,
    volume: "23.99M",
    price: 332.58,
    change: -0.75,
  },
  {
    name: "Amazon.com, Inc.",
    symbol: "AMZN",
    shares: 25,
    volume: "44.98M",
    price: 127.33,
    change: 1.09,
  },
  {
    name: "Alphabet Inc.",
    symbol: "GOOGL",
    shares: 30,
    volume: "28.42M",
    price: 125.23,
    change: -0.32,
  },
  {
    name: "Tesla, Inc.",
    symbol: "TSLA",
    shares: 40,
    volume: "112.93M",
    price: 256.60,
    change: 3.59,
  },
  {
    name: "Meta Platforms, Inc.",
    symbol: "META",
    shares: 60,
    volume: "20.61M",
    price: 288.73,
    change: 1.23,
  },
]

export default function Component() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Your Companies</h1>
      <div><Link href={'/company/add'}><Button variant="outline" size={'sm'}><Plus className="h-4 w-4"/> Add new</Button></Link></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <Card key={company.symbol} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{company.symbol}</p>
                </div>
                <Badge variant={company.change >= 0 ? "default" : "destructive"} className="ml-2">
                  {company.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {company.change.toFixed(2)}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <BarChart2 className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="font-medium">{company.shares}</span>
                  <span className="ml-1 text-muted-foreground">shares</span>
                </div>
                <div className="flex items-center justify-end">
                  <span className="font-medium">${company.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-muted-foreground">Volume:</span>
                  <span className="ml-1 font-medium">{company.volume}</span>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="ml-1 font-medium">${(company.shares * company.price).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}