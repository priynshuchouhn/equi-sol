import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Bell, ChevronDown, Menu, Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

async function Header() {
  const session = await auth();
  const user = session?.user
  return (
    <header className="z-50 fixed top-0 w-full lg:w-[83%] flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="hidden lg:flex items-center">
        <Input
          type="search"
          placeholder="Search..."
          className="w-64 mr-4"
        />
      </div>
      <div className='block lg:hidden'>
        <Sheet>

          <SheetTrigger asChild>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700  cursor-pointer">
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetTitle/>
          <SheetContent side={'left'}>
            <nav className="p-1">
              <ul className="space-y-2">
                <li>
                  <SheetClose asChild>
                    <Link href="/dashboard" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                      Dashboard
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/portfolio" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                      Portfolio
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/trade" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                      Trade
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/company" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                      Your Company
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </nav>
            <SheetFooter>
              <SheetClose asChild>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center space-x-4">
        <div className='hidden lg:flex items-center space-x-4'>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className='flex items-center'>
                <Avatar>
                  <AvatarImage src={user?.image || ''} alt="User" />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 ml-2" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <form action={async () => {
                  'use server'
                  await signOut();
                }}>
                  <button type='submit'>Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  )
}

export default Header
