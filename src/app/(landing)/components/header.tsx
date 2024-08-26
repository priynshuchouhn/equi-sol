'use client';
import ScrollLink from "@/components/ui/scroll-link";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`sticky top-0 z-50 ${scrolled ? 'bg-white' : undefined} `}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex">
                        {/* <Image className="-ml-8 h-8 w-auto" src={''} alt="" /> */}
                        <p className="text-2xl">EquiSol</p>
                        <span className='ml-5 flex items-center text-[.9rem] font-semibold text-gray-700 rounded-lg px-3 bg-gray-200'>Beta</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
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
                        <SheetContent>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <ScrollLink href={'#features'} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            <SheetClose>
                                                Features
                                            </SheetClose>
                                        </ScrollLink>
                                        <ScrollLink href={'#how_it_works'} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            <SheetClose>
                                                How it Works?
                                            </SheetClose>
                                        </ScrollLink>
                                        <Link  href={'/about'} className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            About us
                                        </Link>
                                    </div>
                                    <div className="py-6">
                                        <Link href={false ? '/dashboard' : '/login'} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {false ? 'Dashboard' : 'Get Started'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <SheetFooter>
                                <SheetClose asChild>
                                </SheetClose>
                            </SheetFooter> */}
                        </SheetContent>
                    </Sheet>

                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <ScrollLink href={'#features'} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                        Features
                    </ScrollLink>
                    <ScrollLink href={'#how_it_works'} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                        How it Works?
                    </ScrollLink>
                    <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                        About us
                    </span>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href={true ? '/dashboard' : '/login'} className="text-sm font-semibold leading-6 text-gray-900">
                        {false ? 'Dashboard' : <span className="flex gap-1 items-center">Get Started<span><ChevronRight className="h-5" /></span></span>}
                    </Link>
                </div>
            </nav>
        </header>
    )
}