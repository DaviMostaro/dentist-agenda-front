import { RegisterResponseType, LoginResponseType } from "@/types/requests";
import { req } from "../lib/axios";
import { User } from "@/types/user";

export const RegisterRequest = async (name: string, email: string, password: string): Promise<RegisterResponseType | Error> => {
    try {
        const response = await req.post<RegisterResponseType>('/signup', {
            name,
            email,
            password
        })

        if (!response.data) {
            throw new Error("No data received from the server");
        }

        const newUser: User = {
            name: response.data.user.name,
            email: response.data.user.email,
        }

        const token = response.data.token;

        if (!token) {
            throw new Error("No token received from the server");
        }

        return {
            user: newUser,
            token,
            message: response.data.message
        };
    } catch (error) {
        return new Error("Error registering user");
    }
}

export const LoginRequest = async (email: string, password: string): Promise<LoginResponseType | Error> => {
    try {
        const response = await req.post<LoginResponseType>('/signin', {
            email,
            password
        })

        if (!response.data) {
            throw new Error("No data received from the server");
        }

        const loggedUser: User = {
            name: response.data.user.name,
            email: response.data.user.email,
        }

        const token = response.data.token;

        if (!token) {
            throw new Error("No token received from the server");
        }

        return {
            user: loggedUser,
            token
        }
    } catch (error) {
        return new Error("Error logging in user");
    }
}