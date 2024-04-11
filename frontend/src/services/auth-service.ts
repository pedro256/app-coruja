
import { ReturnErrorApi,GetInstanceApiRequest } from "./api/api";
import ApiResponse from "@/dto/apiResponse/ApiResponse";
import AuthRequestDto from "@/dto/auth/AuthRequestDto";
import AuthResponseDto from "@/dto/auth/AuthResponseDto";
import { cookies } from 'next/headers'




export async function Autheticate(auth: AuthRequestDto):Promise<ApiResponse<AuthResponseDto>> {
    console.log("auth:",auth)
    try {
        const api = GetInstanceApiRequest()
        const resp = await api.post<ApiResponse<AuthResponseDto>>("auth/login",auth);
        
        return resp.data;
    } catch (err: any) {
        return ReturnErrorApi<AuthResponseDto>(err);
    }
}