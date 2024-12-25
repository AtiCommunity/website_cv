import type { Metadata } from "next";
import "@/src/styles/globals.css";
import { koho } from "@/src/styles/fonts";

export const metadata: Metadata = {
    title: "CV | Antoine ROBIN",
    description: "Antoine ROBIN CV",
};

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <html data-theme="synthwave" lang="en">
            <body
                className={`${koho.className} text-xl text-justify font-custom`}
            >
                {children}
            </body>
        </html>
    );
};

export default Layout;
