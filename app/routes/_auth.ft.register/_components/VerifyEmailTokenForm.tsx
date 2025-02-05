import React from 'react'
import InputField from '~/routes/_auth/Components/InputField'
import { ActionData } from '~/types'

interface VerifyEmailTokenFormProps {
    actionData?: ActionData
}

const VerifyEmailTokenForm: React.FC<VerifyEmailTokenFormProps> = ({ actionData }) => {
    return (
        <>
            <input type="hidden" name="username" value={actionData?.data?.username} />
            <input type="hidden" name="fullName" value={actionData?.data?.fullName} />
            <input type="hidden" name="email" value={actionData?.data?.email} />
            <input type="hidden" name="password" value={actionData?.data?.password} />

            <InputField
                id="verificationToken"
                name="verificationToken"
                type="text"
                label="Verification Code"
                placeholder="Enter verification code"
                autoComplete="verificationToken"
                error={actionData?.errors?.verificationToken}
            />
        </>
    )
}

export default VerifyEmailTokenForm