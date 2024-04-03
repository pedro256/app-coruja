export class UserDto {
    id: string;
    name: string;
    secondName: string;
    email: string;
    CPF: string;
    phone: string;
    keycloakId: string;

    constructor(id: string, name: string, secondName: string, email: string, CPF: string, phone: string, keycloakId: string) {
        this.id = id;
        this.name = name;
        this.secondName = secondName;
        this.email = email;
        this.CPF = CPF;
        this.phone = phone;
        this.keycloakId = keycloakId;
    }
}
