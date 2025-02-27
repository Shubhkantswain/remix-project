import { LoaderFunction, redirect } from "@remix-run/node";
import { Link, Outlet, useNavigate } from "@remix-run/react";
import { parse } from "cookie";
import { useEffect } from "react";
import { useCurrentUser } from "~/hooks/auth";

// Loader function to check for the cookie
export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");

  const cookies = cookieHeader ? parse(cookieHeader) : {};

  const token = cookies["__FlowTune_Token_server"] ?? "";

  if (token) {
    return redirect("/")
  }

  return null
};

export default function FtLayout() {
  const { data, isLoading } = useCurrentUser()
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/", { replace: true })
    }
  }, [data])

  if(isLoading || data){
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back To FlowTune
          </h2>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Google Sign In Button */}
          <div>
            <button className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Center the children content */}
          <div className="flex flex-col items-center">
            <Outlet />
          </div>

          <div className="mt-6">
            <div className="text-sm text-center text-gray-600">
              Protected by reCAPTCHA and subject to our{" "}
              <Link
                to="/privacy"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/terms"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
