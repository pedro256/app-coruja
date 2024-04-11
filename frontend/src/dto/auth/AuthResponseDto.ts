export default class AuthResponseDto{
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    //notBeforePolicy: number;
    session_state: string;
    constructor(
    ) {
        this.access_token = "";
        this.expires_in = 0;
        this.refresh_expires_in = 0;
        this.refresh_token = "";
        this.token_type = "";
        //this.notBeforePolicy = 0;
        this.session_state = "";
    }
}
