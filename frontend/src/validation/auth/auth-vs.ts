
import z from "zod";
export const AuthVS = z.object({
  username: z.string().email(),
  password: z.string(),
})

export type TypeAuthVS = z.infer<typeof AuthVS>;