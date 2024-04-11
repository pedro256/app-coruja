import { Autheticate } from "@/services/auth-service";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import {NextRequest, NextResponse} from "next/server";

export async function POST (req:Request){
    const {username,password,redirect_to} = await req.json()
    const resp = await Autheticate({ username, password });
    return NextResponse.json(resp);
}