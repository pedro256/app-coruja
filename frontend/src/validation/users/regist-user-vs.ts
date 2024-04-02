
import z from "zod";
import isValidCPF from "../utils/validation-cpf";

export const RegistUserVS = z.object({
  nome: z.string().min(8),
  sobrenome: z.string().min(8),
  cpf:z.string().refine((cpf:string)=>isValidCPF(cpf)),
  tel: z.string().max(11),
  email: z.string().email(),
  senha: z.string().min(8),
  senha2: z.string().min(8),
  concordTerms: z.boolean().refine((c)=>c===true)
}).refine((refine)=>refine.senha === refine.senha2,{
  message:"Passwords don't match",
  path:['senha2']
})

export type TypeRegistUserVS = z.infer<typeof RegistUserVS>;