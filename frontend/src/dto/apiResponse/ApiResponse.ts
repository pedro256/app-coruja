export default class ApiResponse<T> {
    sucess: boolean;
    data: T | null;
    stt: number;
    messages: string[];

    constructor() {
        this.sucess = false;
        this.messages = [];
        this.stt = 200;
        this.data = null
    }
    
}
