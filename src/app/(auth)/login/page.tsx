import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <>
            <div className="px-5 pt-2">
                <Link href="/"><Button variant={'ghost'}><ChevronLeft/> Home</Button></Link>
            </div>
            <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome to EquiSol</h1>
                        <p className="text-muted-foreground">Sign in to access your account.</p>
                    </div>
                    <form action={async () => {
                        "use server"
                        await signIn("google", { redirectTo: "/dashboard" })
                    }}>
                        <Button variant="outline" className="flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            <ChromeIcon className="h-5 w-5" />
                            Sign in with Google
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

function ChromeIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}