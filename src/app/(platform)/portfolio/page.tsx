'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { ArrowUpIcon, ArrowDownIcon, AlertTriangleIcon } from 'lucide-react'

const mockHoldings = [
  { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, value: 1500, change: 2.5 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 5, value: 2800, change: -1.2 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 8, value: 2200, change: 1.8 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', quantity: 3, value: 1900, change: 0.5 },
]

const mockTransactions = [
  { date: '2023-05-15', type: 'Buy', symbol: 'AAPL', quantity: 2, price: 150 },
  { date: '2023-05-14', type: 'Sell', symbol: 'GOOGL', quantity: 1, price: 560 },
  { date: '2023-05-13', type: 'Buy', symbol: 'MSFT', quantity: 3, price: 275 },
]

const portfolioAllocation = [
  { name: 'AAPL', value: 1500 },
  { name: 'GOOGL', value: 2800 },
  { name: 'MSFT', value: 2200 },
  { name: 'AMZN', value: 1900 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function PortfolioPage() {
  const totalValue = mockHoldings.reduce((sum, holding) => sum + holding.value, 0)
  const totalChange = mockHoldings.reduce((sum, holding) => sum + holding.change * holding.value / 100, 0)
  const changePercentage = (totalChange / (totalValue - totalChange)) * 100

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Portfolio</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
            <p className={`text-lg mb-8 ${changePercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {changePercentage >= 0 ? <ArrowUpIcon className="inline mr-1" /> : <ArrowDownIcon className="inline mr-1" />}
              {changePercentage.toFixed(2)}% (${totalChange.toLocaleString()})
            </p>
            <div className="space-y-2 grid grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Beta</p>
                <p className="text-lg font-semibold">1.2</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                <p className="text-lg font-semibold">1.5</p>
              </div>
              <div className="col-span-2 flex items-center">
                <AlertTriangleIcon className="text-yellow-500 mr-2" />
                <p className="text-sm">Moderate Risk</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={portfolioAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {portfolioAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Current Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockHoldings.map((holding) => (
                <TableRow key={holding.symbol}>
                  <TableCell className="font-medium">{holding.symbol}</TableCell>
                  <TableCell>{holding.name}</TableCell>
                  <TableCell>{holding.quantity}</TableCell>
                  <TableCell>${holding.value.toLocaleString()}</TableCell>
                  <TableCell className={holding.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {holding.change >= 0 ? <ArrowUpIcon className="inline mr-1" /> : <ArrowDownIcon className="inline mr-1" />}
                    {holding.change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.symbol}</TableCell>
                  <TableCell>{transaction.quantity}</TableCell>
                  <TableCell>${transaction.price.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}