import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import { SuccessPopup } from "../popup/Popup";
import Button from "../ui/button/Button";


export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    // Pure frontend — show popup and navigate to /
    setTimeout(() => {
      setLoading(false);
      SuccessPopup(`Signed in as ${email}`);
      navigate("/"); // redirect to homepage
    }, 1000);
  };

  return (
    <div className="md:w-lg">
      <div className="bg-white p-8 rounded-lg">
        <div>
          
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>
                  </Label>
                  <Input placeholder="info@gmail.com" name="email" className="web-input" />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      name="password"
                      className="web-input"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400">
                    <input type="checkbox" name="remember" className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500" />
                    Remember me
                  </label>
                  <Link
                    to="/forgotpassword"
                    className="text-primary-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div>
                  <Button
                    className="w-full mt-4 web-btn"
                    size="sm"
                    loading={loading}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
                <div className="auth-prompt">
            <span>Dont Have Account Signup? </span>
            <Button
              className="auth-link"
              onClick={() => navigate("/signup")}
            >
               SIGN IN
            </Button>
          </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
