
import { auth } from "@/auth"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Verified } from "lucide-react"
import Image from "next/image"
import { ConnectWalletButton } from "./components/connect-wallet-button"
import { BalanceDisplay } from "./components/balance"

export default async function Profile() {
    const session = await auth()
    const user = session?.user


    return (
        <div className="flex flex-col items-center justify-center h-[60dvh] p-2">
            <div className="relative flex h-auto w-full max-w-md flex-col items-center justify-center rounded-lg border bg-background md:shadow-xl">
                <div className="rounded-2xl w-full max-w-md p-6 md:p-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src={user?.image || '/placeholder-images-image_large.webp'}
                            width={160}
                            height={160}
                            alt="User Profile"
                            className="rounded-full mb-4 md:mb-6"
                            style={{ aspectRatio: "160/160", objectFit: "cover" }}
                        />
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-1">{user?.name} <Verified className="text-white fill-green-500 h-7 w-7" /></h2>
                            <p className="text-muted-foreground">{user?.email}</p>
                        </div>
                        <BalanceDisplay />
                        <div className="mt-6">
                            {/* <Button variant="outline" className="w-full">
                                <WalletIcon className="mr-2 h-4 w-4" />
                                Connect Wallet
                            </Button> */}
                            <ConnectWalletButton className="bg-white" />
                        </div>
                    </div>
                </div>
                <BorderBeam size={1500} duration={12} delay={9} />
            </div>
        </div>
    )
}

function WalletIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}

