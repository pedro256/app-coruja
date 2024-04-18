import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home({ children }: { children: ReactNode }) {
    
    const s = await getServerSession(authOptions)

    if(!s){
        redirect("/auth")
    }
    

    return (
        <>
            <Navbar />
            <div className="relative top-24 md:top-20">
                {children}
            </div>

        </>
    );
}