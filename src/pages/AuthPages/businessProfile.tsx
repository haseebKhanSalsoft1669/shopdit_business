import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import BusinessProfileForm from "../../components/auth/businessProfileForm";


export default function BusinessProfile() {
  return (
    <>
      <PageMeta
        title="Shopdit | Business Profile"
        description="Create your Shopdit admin account to manage gaming platform operations, monitor transactions, and oversee user activities."
      />
      <AuthLayout>
        <BusinessProfileForm />
      </AuthLayout>
    </>
  );
}
