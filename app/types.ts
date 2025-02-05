export type ScrollDirection = 'left' | 'right';

export interface Option {
    value: string;
    label: string;
}

export interface ActionData {
    isSignupSuccess: boolean;
    isVerifyEmailSuccess: boolean;
    authToken?: string;
    data?: {
        username: string;
        fullName: string;
        email: string;
        password: string;
    };
    errors?: {
        username?: string;
        fullName?: string;
        email?: string;
        password?: string;
        gender?: string;
        general?: string;
        verificationToken?: string;
    };
}