import RegisterForm from "./components/RegisterForm/RegisterForm";



export default function RegisterUsers() {


    return (
        <div className="p-6 md:p-10">

            <div className="rounded border border-primary-foregroundW p-10">
                <div className="border-l-4 border-primary pl-4">

                    <h1 className="text-xl md:text-2xl">Cadastro de Usuários</h1>
                </div>

                <div className="mt-10">
                    <RegisterForm/>
                </div>

            </div>
        </div>
    )
}