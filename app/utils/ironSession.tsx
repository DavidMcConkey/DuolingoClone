import { NextApiRequest } from "next";

type UserSession = {
    id: number,
    admin: boolean
}

export type NextIronApiRequest = NextApiRequest & {
    session: {
        get (user:string) : UserSession,
        set (user: string, session:UserSession) : void,
        save () : void
    }
};

export const ironSessionOptions = {
    password: process.env.IRON_PASSWORD,
    cookieName: "next-auth-starter",
    cookieOptions: {
        httpOnly: false
    }
}