import ApiResponse from "@/dto/apiResponse/ApiResponse";
import axios, { isAxiosError } from "axios";

export function GetInstanceApiRequest(){
    return axios.create({
        baseURL:"http://localhost:8100"
    })
};
export function ReturnErrorApi<T>(err: any):ApiResponse<T> {
    const response = new ApiResponse<T>();
    response.data =  null;
    if (isAxiosError(err) && err.response) {

        if(err.response?.data?.messages){
            response.messages = err.response?.data?.messages;
        }else{
            response.messages = ['Algo deu erro'];
        }
        if(err.response?.data?.stt){
            response.stt = err.response?.data?.stt;
        }
        if(err.response?.data?.data){
            response.data = err.response?.data?.data;
        }
        response.sucess = false;
    }
    return response
}