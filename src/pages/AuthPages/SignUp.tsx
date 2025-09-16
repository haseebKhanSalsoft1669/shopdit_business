import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Shopdit | SignUp"
        description="Create your Shopdit admin account to manage gaming platform operations, monitor transactions, and oversee user activities."
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
