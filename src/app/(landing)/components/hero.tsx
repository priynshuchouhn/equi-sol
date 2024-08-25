'use client'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import RetroGrid from '@/components/magicui/retro-grid'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import React from 'react'
import { ChevronRight } from 'lucide-react'

function Hero() {
    return (
        <div className='min-h-screen relative flex items-center justify-center'>
            <div className=''>
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto ">
                        Empower your investments <div className='md:block inline'>with {" "}
                            <Highlight className="text-black dark:text-white">
                                Decentralized and Secure Trading.
                            </Highlight>
                        </div>
                    </motion.h1>
                    <div className="mt-8">
                        <AnimatedGradientText>
                            ▶️ <hr className="mx-2 h-8 w-[1px] shrink-0 bg-gray-300" />{" "}
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                                Get Started
                            </span>
                            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedGradientText>
                    </div>
                </HeroHighlight>
            </div>
            <div className='absolute w-full h-full'>
                <RetroGrid angle={20} />
            </div>
        </div>
    )
}

export default Hero
