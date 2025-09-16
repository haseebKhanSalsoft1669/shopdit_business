import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { ImageUrl } from '../../utils/Functions';

export default function ForgotPasswordForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            navigate("/verification-code");
        }, 1000);
    };

    return (
        <div className="md:w-lg">
            <div className="bg-white p-8 rounded-lg">
                <div>
                    <Link to="/" className="block mb-4">
                        <img
                            width={100}
                            height={48}
                            src={ImageUrl("logo/logo.svg")}
                            alt="Logo"
                            className="mx-auto"
                        />
                    </Link>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
                            Forgot Password
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                            Enter your email to reset your password.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <Label>
                                    Email <span className="text-error-500">*</span>
                                </Label>
                                <Input
                                    type="email"
                                    placeholder="info@gmail.com"
                                    name="email"
                                    //   required
                                    className="web-input"
                                />
                            </div>

                            <div>
                                <Button
                                    className="w-full mt-4 web-btn"
                                    size="sm"
                                    loading={loading}
                                    type="submit"
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
