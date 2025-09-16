import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ForgotpasswordForm from "../../components/auth/ForgotpasswordForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Shopdit | SignIn"
        description="This is the SignIn page for Shopdit"
      />
      <AuthLayout>
        <ForgotpasswordForm />
      </AuthLayout>
    </>
  );
}
