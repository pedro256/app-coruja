import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar/>
            <div className="relative top-24 md:top-20">
            {children}
            </div>
            
        </>
    );
}