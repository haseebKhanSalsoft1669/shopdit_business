import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Shopdit | SignIn"
        description="This is the SignIn page for Shopdit"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
