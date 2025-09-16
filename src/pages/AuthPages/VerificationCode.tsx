import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import VerificationCodeForm from "../../components/auth/verificationCodeForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Shopdit | SignIn"
        description="This is the SignIn page for Shopdit"
      />
      <AuthLayout>
        <VerificationCodeForm />
      </AuthLayout>
    </>
  );
}
