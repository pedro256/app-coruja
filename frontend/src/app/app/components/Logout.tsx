"use client";

import { signOut, useSession } from "next-auth/react";
import {useRouter} from 'next/navigation'

export default function LogoutArea() {
    const r = useRouter()

    function logout() {
        signOut()
        r.push("/auth")
    }

    return (
        <button onClick={() => logout()}>
            LOGOUT
        </button>
    )
}