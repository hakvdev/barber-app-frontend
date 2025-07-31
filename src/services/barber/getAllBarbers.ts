import { apiBarber } from "../auth/api/api";

export default async function getAllBarbers () {
    try {
        const res = await apiBarber.get("/getAll")
        return res.data
    } catch (error) {
        console.error("Error obteniendo los barberos", error)
    }
}