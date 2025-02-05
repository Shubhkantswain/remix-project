import { serialize } from "cookie";

export const createAuthCookie = (token: string) => {
    return serialize("__FlowTune_Token_server", token, {
        maxAge: 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "none",
    });
};

export const getErrorMessage = (error: any, defaultMessage: string) => {
    return error?.response?.errors?.[0]?.message || defaultMessage;
};