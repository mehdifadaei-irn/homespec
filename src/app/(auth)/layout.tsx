import AppLogo from "@/components/AppLogo";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="container py-1.5">
                <AppLogo className="-ml-4" />
            </header>
            {children}
        </>
    );
}