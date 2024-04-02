"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegistUserVS, TypeRegistUserVS } from "@/validation/users/regist-user-vs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function RegisterForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<TypeRegistUserVS>({
        resolver: zodResolver(RegistUserVS)
    })

    function onSubmitedOk(dat:any){
    }
    function onCancel(){
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmitedOk)}>
            <div className="grid grid-cols-4 gap-1">
                <div className="col-span-2">
                    <label htmlFor="name">NOME:</label>
                    <Input {...register("nome")} name="nome" />
                    {errors.nome && <span className="text-xs text-destructive">{errors.nome.message}</span>}
                </div>
                <div className="col-span-2">
                    <label htmlFor="name">SOBRENOME:</label>
                    <Input {...register("sobrenome")} name="sobrenome" />
                    {errors.sobrenome && <span className="text-xs text-destructive">{errors.sobrenome.message}</span>}
                </div>
                <div className="col-span-1">
                    <label htmlFor="name">CPF:</label>
                    <Input {...register("cpf")} name="cpf" />
                    {errors.cpf && <span className="text-xs text-destructive">{errors.cpf.message}</span>}
                </div>
                <div className="col-span-1">
                    <label htmlFor="name">TELEFONE:</label>
                    <Input {...register("tel")} name="tel" />
                    {errors.tel && <span className="text-xs text-destructive">{errors.tel.message}</span>}
                </div>
            </div>

            <div className="border-l-2 border-primary my-4 pl-2">
                <h1 className="text-xl">Dados de acesso</h1>
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div className="col-span-2">
                    <label>EMAIL:</label>
                    <Input {...register("email")} name="email" type="email" />
                    {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
                </div>
                <div className="col-span-1">
                    <label>SENHA:</label>
                    <Input {...register("senha")} name="senha" type="password" />
                    {errors.senha && <span className="text-xs text-destructive">{errors.senha.message}</span>}
                </div>
                <div className="col-span-1">
                    <label>CONFIRMAÇÃO DE SENHA:</label>
                    <Input {...register("senha2")} name="senha2" type="password" />
                    {errors.senha2 && <span className="text-xs text-destructive">{errors.senha2.message}</span>}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
            <div className="col-span-2 md:col-span-1 flex mt-6 ">
                <Input {...register("concordTerms")} className="w-6" type="checkbox" />
                <p className={`pl-4 text-sm ${errors.concordTerms?"text-destructive":""}`}>A partir de agora, você terá acesso a todos os recursos e funcionalidades exclusivas que oferecemos. Este é o primeiro passo para aproveitar ao máximo nossa plataforma.</p>
            </div>
            </div>

            


            <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={onCancel} ><b>Cancelar</b></Button>
                <Button type="submit">Cadastrar</Button>
                <Button variant="destructive" type="reset">Limpar</Button>
                
            </div>


        </form>
    )
}