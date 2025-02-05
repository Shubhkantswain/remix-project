import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect } from "react";
import { createGraphqlClient } from "~/clients/api";
import { signupUserMutation, verifyEmailMutation } from "~/graphql/mutations/auth";
import { serialize } from "cookie";
import { useCurrentUser, useSetCookie } from "~/hooks/auth";
import { FORM_TYPES } from "~/constants";
import { ActionData } from "~/types";
import VerifyEmailTokenForm from "./_components/VerifyEmailTokenForm";
import SubmitButton from "./_components/SubmitButton";
import GeneralError from "./_components/GeneralError";
import RegisterForm from "./_components/RegisterForm";

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
            return json<ActionData>({ isSignupSuccess: false, isVerifyEmailSuccess: false, errors }, { status: 400 });
        }

        try {
            const graphqlClient = createGraphqlClient();
            const { signupUser } = await graphqlClient.request(signupUserMutation, {
                input: { username, email }
            });

            return json<ActionData>({
                isSignupSuccess: signupUser,
                isVerifyEmailSuccess: false,
                data: { username, fullName, email, password }
            });

        } catch (error: any) {
            return json<ActionData>(
                {
                    isSignupSuccess: false,
                    isVerifyEmailSuccess: false,
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
                isVerifyEmailSuccess: false,
                errors: { verificationToken: "Verification code is required." }
            }, { status: 400 });
        }

        try {
            const graphqlClient = createGraphqlClient();
            const { verifyEmail } = await graphqlClient.request(verifyEmailMutation, { input: { username, fullName, email, password, token: verificationToken } })

            const cookie = serialize("__FlowTune_Token_server", verifyEmail?.authToken || "", {
                maxAge: 60 * 60 * 24, // 1 day
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "none",
            });


            return json<ActionData>(
                {
                    isSignupSuccess: true,
                    isVerifyEmailSuccess: true,
                    authToken: verifyEmail?.authToken
                },
                {
                    status: 200,
                    headers: { "Set-Cookie": cookie },
                }
            );
        } catch (error: any) {
            return json<ActionData>(
                {
                    isSignupSuccess: true,
                    isVerifyEmailSuccess: false,
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
    const routerNavigation = useNavigation();
    const isSubmitting = routerNavigation.state === "submitting";

    const isSignupSuccessful = actionData?.isSignupSuccess;
    const isEmailVerificationSuccessful = actionData?.isVerifyEmailSuccess;

    const { mutateAsync } = useSetCookie();
    const navigate = useNavigate();

    useEffect(() => {
        if (isEmailVerificationSuccessful) {
            const handleSetCookie = async () => {
                try {
                    await mutateAsync(actionData?.authToken || "");
                    navigate("/", { replace: true });
                } catch (error) {
                    console.error("Failed to set cookie", error);
                }
            };

            handleSetCookie();
        }
    }, [isEmailVerificationSuccessful]);

    return (
        <Form method="post" className="space-y-6 w-full max-w-sm text-black">
            <input
                type="hidden"
                name="formType"
                value={isSignupSuccessful ? FORM_TYPES.VERIFY : FORM_TYPES.SIGNUP}
            />

            {/* General Error */}
            {actionData?.errors?.general && (
                <GeneralError error={actionData.errors.general} />
            )}

            {!isSignupSuccessful ? (
                <>
                    <RegisterForm actionData={actionData} />
                </>
            ) : (
                <>
                    <VerifyEmailTokenForm actionData={actionData} />
                </>
            )}

            {/* Submit Button */}
            <SubmitButton isSubmitting={isSubmitting} isSignupSuccessful={isSignupSuccessful} />
        </Form>
    );
}
