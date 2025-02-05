const PasswordField = ({ showPassword, setShowPassword, error }: { showPassword: boolean, setShowPassword: (value: boolean) => void, error?: string }) => (
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
        {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                ⚠️ {error}
            </p>
        )}
    </div>
);

export default PasswordField