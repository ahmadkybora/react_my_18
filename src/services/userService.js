import { Error, Success } from "../utils/exceptionHandler"
import http from "./httpService"

export const getAllUsers = async => {
    return await http.get("/users")
        .then(res => Success(res))
        .catch(err => Error(err))
}

export const userUpdate = async(payload, id) => {
    return await http.patch(`/users/${id}`, payload)
        .then(res => Success(res))
        .catch(err => Error(err))
}