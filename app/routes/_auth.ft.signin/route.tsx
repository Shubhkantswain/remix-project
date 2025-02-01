// app/routes/ft.signin.tsx
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";

interface ActionData {
  errors?: {
    usernameOrEmail?: string;
    password?: string;
    general?: string;
  };
}

export default function SignIn() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className="space-y-6 w-full max-w-sm">
      {actionData?.errors?.general && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {actionData.errors.general}
              </h3>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">
          Username or Email
        </label>
        <div className="mt-1">
          <input
            id="usernameOrEmail"
            name="usernameOrEmail"
            type="text"
            autoComplete="username"
            required
            className={`appearance-none block w-full px-3 py-2 border ${
              actionData?.errors?.usernameOrEmail ? "border-red-300" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {actionData?.errors?.usernameOrEmail && (
            <p className="mt-2 text-sm text-red-600">{actionData.errors.usernameOrEmail}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative text-black">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className={`appearance-none block w-full px-3 py-2 border ${
              actionData?.errors?.password ? "border-red-300" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
          {actionData?.errors?.password && (
            <p className="mt-2 text-sm text-red-600">{actionData.errors.password}</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </div>

      <div className="text-sm text-center text-black">
        Don't have an account?{' '}
        <a href="/ft/register" className="font-medium text-blue-600 hover:text-blue-500">
          Sign up
        </a>
      </div>
    </Form>
  );
}
