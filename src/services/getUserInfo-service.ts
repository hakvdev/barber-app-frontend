import { apiUser } from "./auth/api/api";


export default async function getUserInfoService (token:string) {
    try {
        if(!token) {
            throw new Error("No token provided")
        }
        const res = apiUser.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return (await res).data

    } catch (error) {
        console.error(error)
    }
}