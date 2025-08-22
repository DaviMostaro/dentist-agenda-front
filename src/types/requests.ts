export type RegisterResponseType = {
    token: string;
    user: {
        name: string,
        email: string
    };
    message: string;
};

export type LoginResponseType = {
    token: string;
    user: {
        name: string,
        email: string
    }
}