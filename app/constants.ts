import { Option } from "./types";

export const genderOptions: Option[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
];

export const FORM_TYPES = {
    SIGNUP: "signup",
    VERIFY: "verify",
} as const;