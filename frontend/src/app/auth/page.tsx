"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
//import { Autheticate } from "@/services/auth-service"
import { AuthVS, TypeAuthVS } from "@/validation/auth/auth-vs"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { MdNavigateNext } from "react-icons/md"
import querystring from 'querystring';
import { Autheticate } from "@/services/auth-service"
import axios from "axios";
import ApiResponse from "@/dto/apiResponse/ApiResponse"
import AuthResponseDto from "@/dto/auth/AuthResponseDto"
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Auth() {

    const {toast} = useToast();
    const route = useRouter();
    const searchParams = useSearchParams();
    const session = await getServerSession(authOptions)


    if(session){
        redirect("/app")
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<TypeAuthVS>({
        resolver: zodResolver(AuthVS)
    })

    async function submited(data: TypeAuthVS) {
        const re = await signIn('app',{
            username:data.username,
            password:data.password,
            redirect:false
        })
        console.log("auth: ",re)
        if(re?.ok){
            route.push("/app")
        }

    }

    return (
        <main className="flex w-full justify-center pt-24">
            <form action="" className="border h-min p-8 bg-white" onSubmit={handleSubmit(submited)}>
                <h4 className="text-xl">Autenticação</h4>
                <div className="pt-4 pb-2">
                    <Label htmlFor="username">Usuário</Label>
                    <Input {...register("username")} id="username" />
                    {errors.username && <span className="text-xs text-destructive">{errors.username.message}</span>}
                </div>

                <div className="py-2">
                    <Label htmlFor="username">Senha</Label>
                    <Input {...register("password")} id="password" type="password" />
                    {errors.password && <span className="text-xs text-destructive">{errors.password.message}</span>}
                </div>

                <div className="flex justify-end">
                    <Button type="submit" className="bg-primary">Prosseguir<MdNavigateNext className="w-5 h-5" />
                    </Button>
                </div>

                <div className="mt-4">
                    <p className="text-sm">Criar conta <Link href="/" className="focus:text-secundary underline">aqui</Link></p>
                </div>
            </form>
        </main>
    )
}


