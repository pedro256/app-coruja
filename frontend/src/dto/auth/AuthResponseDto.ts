export default class AuthResponseDto{
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
    tokenType: string;
    notBeforePolicy: number;
    sessionState: string;
    scope: string;
    constructor(
    ) {
        this.accessToken = "";
        this.expiresIn = 0;
        this.refreshExpiresIn = 0;
        this.refreshToken = "";
        this.tokenType = "";
        this.notBeforePolicy = 0;
        this.sessionState = "";
        this.scope = "";
    }
}
