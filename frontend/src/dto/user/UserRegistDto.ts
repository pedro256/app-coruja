export default class UserRegistDto{
    firstName: string;
    lastName: string;
    email: string;
    CPF: string;
    phone: string;
    psswd:string;

    constructor(firstName: string, lastName: string, email: string, CPF: string, phone: string, psswd: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.CPF = CPF;
        this.phone = phone;
        this.psswd = psswd
    }
}