import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { MdNavigateNext } from "react-icons/md"


export default function Auth() {
    return (
        <main className="flex w-full justify-center pt-24">
            <div className="border h-min p-8 bg-white">
                <h4 className="text-xl">Autenticação</h4>
                <div className="pt-4 pb-2">
                    <Label htmlFor="username">Usuário</Label>
                    <Input id="username" />
                </div>

                <div className="py-2">
                    <Label htmlFor="username">Senha</Label>
                    <Input id="username" type="password" />
                </div>

                <div className="flex justify-end">
                    <Button className="bg-primary">Prosseguir<MdNavigateNext className="w-5 h-5" />
                    </Button>
                </div>

                <div className="mt-4">
                    <p className="text-sm">Criar conta <Link href="/" className="focus:text-secundary underline">aqui</Link></p>
                </div>
            </div>
        </main>
    )
}


