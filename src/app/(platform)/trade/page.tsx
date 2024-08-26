/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1MUuOtVKtdG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Filter } from "lucide-react"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gray-200 py-4 px-6 mt-2">
                <div className="flex items-center justify-center gap-6">
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Explore
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        My Shares
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Sell
                    </Link>
                </div>
            </div>
            <div className="flex-1 grid lg:grid-cols-[240px_1fr] gap-4 p-2 lg:p-8">
                <div className="hidden lg:block bg-background rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Filters</h3>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="company">
                            <AccordionTrigger className="text-base">Company</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="company-1" /> Acme Inc
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="company-2" /> Globex Corporation
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="company-3" /> Stark Industries
                                    </Label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="sector">
                            <AccordionTrigger className="text-base">Sector</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="sector-1" /> Technology
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="sector-2" /> Manufacturing
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="sector-3" /> Energy
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="sector-4" /> Healthcare
                                    </Label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="performance">
                            <AccordionTrigger className="text-base">Performance</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="performance-1" /> Outperforming
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="performance-2" /> Underperforming
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="performance-3" /> Stable
                                    </Label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <div className="bg-background rounded-lg flex items-center gap-2 shadow-lg p-1 lg:p-6 mb-4 lg:mb-8">
                        <div className="relative basis-[90%] lg:basis-full">
                            <div className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search company shares..."
                                className="w-full rounded-lg bg-muted pl-10 pr-4 py-2"
                            />
                        </div>
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline'}
                                        className="inline-flex items-center justify-center rounded-md text-gray-700  cursor-pointer">
                                        <span className="sr-only">Open main menu</span>
                                        <Filter className="h-6 w-6" aria-hidden="true" />
                                    </Button>
                                </SheetTrigger>
                                <SheetTitle/>
                                <SheetContent side={'right'}>
                                    <h3 className="text-lg font-semibold mb-4">Filters</h3>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="company">
                                            <AccordionTrigger className="text-base">Company</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="company-1" /> Acme Inc
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="company-2" /> Globex Corporation
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="company-3" /> Stark Industries
                                                    </Label>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="sector">
                                            <AccordionTrigger className="text-base">Sector</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="sector-1" /> Technology
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="sector-2" /> Manufacturing
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="sector-3" /> Energy
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="sector-4" /> Healthcare
                                                    </Label>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="performance">
                                            <AccordionTrigger className="text-base">Performance</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="performance-1" /> Outperforming
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="performance-2" /> Underperforming
                                                    </Label>
                                                    <Label className="flex items-center gap-2 font-normal">
                                                        <Checkbox id="performance-3" /> Stable
                                                    </Label>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/placeholder-images-image_large.webp"
                                alt="Company Share"
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                            />
                            <div className="p-2 lg:p-4">
                                <h3 className="text-sm lg:text-lg font-semibold mb-2">Globex Corporation</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-semibold">$75.80</span>
                                    <Button size="sm" variant={'destructive'}>Sell</Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/placeholder-images-image_large.webp"
                                alt="Company Share"
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                            />
                            <div className="p-2 lg:p-4">
                                <h3 className="text-sm lg:text-lg font-semibold mb-2">Globex Corporation</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-semibold">$75.80</span>
                                    <Button size="sm">Buy</Button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-images-image_large.webp"
                alt="Company Share"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Stark Industries</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$125.30</span>
                  <Button size="sm" variant={'destructive'}>Sell</Button>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-images-image_large.webp"
                alt="Company Share"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Acme Inc</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$52.90</span>
                  <Button size="sm">Buy</Button>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-images-image_large.webp"
                alt="Company Share"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Globex Corporation</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$79.20</span>
                  <Button size="sm">Buy</Button>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-images-image_large.webp"
                alt="Company Share"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Stark Industries</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$132.70</span>
                  <Button size="sm" variant={'destructive'}>Sell</Button>
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}