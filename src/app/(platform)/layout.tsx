import Header from "./components/header";
import Sidebar from "./components/sidebar";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="ml-64 w-full ">
                {/* Header */}
                <Header />
                <div className="mt-16">
                {children}
                </div>
            </div>
        </div>
    );
}

export default Layout