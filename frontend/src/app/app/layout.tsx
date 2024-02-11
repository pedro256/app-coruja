import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar/>
            {
                children
            }
        </>
    );
}