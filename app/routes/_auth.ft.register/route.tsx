import { json, type ActionFunctionArgs, redirect, createCookie } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { createGraphqlClient } from "~/clients/api";
import { signupUserMutation, verifyEmailMutation } from "~/graphql/mutations/auth";
import { serialize } from "cookie";

interface ActionData {
    isSignupSuccess: boolean;
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

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const formType = formData.get("formType")?.toString();

    if (formType === "signup") {
        // Signup logic
        const username = formData.get("username")?.toString().trim() ?? "";
        const fullName = formData.get("fullName")?.toString().trim() ?? "";
        const email = formData.get("email")?.toString().trim() ?? "";
        const password = formData.get("password")?.toString().trim() ?? "";
        const gender = formData.get("gender")?.toString().trim() ?? "";

        let errors: ActionData["errors"] = {};

        if (!username) errors.username = "Username is required.";
        if (!fullName) errors.fullName = "Full name is required.";
        if (!email) errors.email = "Email is required.";
        if (!password) errors.password = "Password is required.";
        if (!gender) errors.gender = "Please select a gender.";

        if (Object.keys(errors).length > 0) {
            return json<ActionData>({ isSignupSuccess: false, errors }, { status: 400 });
        }

        try {
            const graphqlClient = createGraphqlClient();
            const { signupUser } = await graphqlClient.request(signupUserMutation, {
                input: { username, email }
            });

            return json<ActionData>({
                isSignupSuccess: signupUser,
                data: { username, fullName, email, password }
            });

        } catch (error: any) {
            return json<ActionData>(
                {
                    isSignupSuccess: false,
                    errors: {
                        general: error?.response?.errors?.[0]?.message || "Something went wrong"
                    }
                },
                { status: 500 }
            );
        }
    } else {
        const verificationToken = formData.get("verificationToken")?.toString().trim() ?? "";
        const username = formData.get("username")?.toString().trim() ?? "";
        const fullName = formData.get("fullName")?.toString() ?? "";
        const email = formData.get("email")?.toString().trim() ?? "";
        const password = formData.get("password")?.toString().trim() ?? "";

        if (!verificationToken) {
            return json<ActionData>({
                isSignupSuccess: true,
                errors: { verificationToken: "Verification code is required." }
            }, { status: 400 });
        }

        try {
            const graphqlClient = createGraphqlClient();
            const { verifyEmail } = await graphqlClient.request(verifyEmailMutation, { input: { username, fullName, email, password, token: verificationToken } })

            const cookie = serialize("verifyemail.authToken", verifyEmail?.authToken || "", {
                maxAge: 60 * 60 * 24, // 1 day
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "none",
            });

            return redirect("/", {
                headers: { "Set-Cookie": cookie },
            });
        } catch (error: any) {
            return json<ActionData>(
                {
                    isSignupSuccess: true,
                    errors: {
                        general: error?.response?.errors?.[0]?.message || "Verification failed"
                    }
                },
                { status: 500 }
            );
        }
    }
};

export default function Register() {
    const actionData = useActionData<ActionData>();
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const isSubmitting = navigation.state === "submitting";
    const isSignupSucceded = actionData?.isSignupSuccess

    return (
        <Form method="post" className="space-y-6 w-full max-w-sm text-black">
            <input type="hidden" name="formType" value={isSignupSucceded ? "verify" : "signup"} />

            {/* General Error */}
            {actionData?.errors?.general && (
                <div className="rounded-md bg-red-600 text-white p-3 flex justify-between items-center">
                    <span className="text-sm font-medium">{actionData.errors.general}</span>
                    <button className="text-lg font-bold">❌</button>
                </div>
            )}

            {isSignupSucceded ? (
                /* Verification Token only */
                <>
                    <input type="hidden" name="username" value={actionData.data?.username} />
                    <input type="hidden" name="fullName" value={actionData.data?.fullName} />
                    <input type="hidden" name="email" value={actionData.data?.email} />
                    <input type="hidden" name="password" value={actionData.data?.password} />


                    <div>
                        <label htmlFor="verificationToken" className="block text-sm font-medium text-black">
                            Verification Code
                        </label>
                        <input
                            id="verificationToken"
                            name="verificationToken"
                            type="text"
                            placeholder="Enter verification code"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {actionData?.errors?.verificationToken && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.verificationToken}
                            </p>
                        )}
                    </div>
                </>
            ) : (
                <>
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-black">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {actionData?.errors?.username && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.username}
                            </p>
                        )}
                    </div>

                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-black">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {actionData?.errors?.fullName && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.fullName}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {actionData?.errors?.email && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-black">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {actionData?.errors?.gender && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.gender}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Password
                        </label>
                        <div className="mt-1 relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-black"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                        {actionData?.errors?.password && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                ⚠️ {actionData.errors.password}
                            </p>
                        )}
                    </div>
                </>
            )}

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {isSubmitting
                        ? (isSignupSucceded ? "Verifying..." : "Creating account...")
                        : (isSignupSucceded ? "Verify Email" : "Create account")
                    }
                </button>
            </div>
        </Form>
    );
}