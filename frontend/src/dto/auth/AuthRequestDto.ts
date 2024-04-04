export default class AuthRequestDto{
    username:string
    password:string
    constructor (username:string = "",pswd:string=""){
        this.password =pswd;
        this.username = username;
    }
}