import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import Plan from "../../components/auth/plan";


export default function SubscriptionPlan() {
  return (
    <>
      <PageMeta
        title="Shopdit | SUBSCRIPTION PLAN"
        description="Create your Shopdit admin account to manage gaming platform operations, monitor transactions, and oversee user activities."
      />
      <AuthLayout>
        <Plan/>
      </AuthLayout>
    </>
  );
}
