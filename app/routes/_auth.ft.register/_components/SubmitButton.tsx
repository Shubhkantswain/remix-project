interface SubmitButtonProps {
  isSubmitting: boolean;
  isSignupSuccessful?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, isSignupSuccessful }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
    >
      {isSubmitting
        ? isSignupSuccessful
          ? "Verifying..."
          : "Creating account..."
        : isSignupSuccessful
        ? "Verify Email"
        : "Create account"}
    </button>
  );
};

export default SubmitButton;
