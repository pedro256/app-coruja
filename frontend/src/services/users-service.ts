import UserRegistDto from "@/dto/user/UserRegistDto";
import { ReturnErrorApi,GetInstanceApiRequest } from "./api/api";
import ApiResponse from "@/dto/apiResponse/ApiResponse";
import { UserDto } from "@/dto/user/UserDto";




export async function RegistUser(user: UserRegistDto):Promise<ApiResponse<UserDto>> {
    try {
        const api = GetInstanceApiRequest()
        const resp = await api.post<ApiResponse<UserDto>>("users/create", user);
        return resp.data;
    } catch (err: any) {
        return ReturnErrorApi<UserDto>(err);
    }
}