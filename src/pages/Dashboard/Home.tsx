import PageMeta from "../../components/common/PageMeta";
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Shopdit | Business"
        description="This is React.js Ecommerce Dashboard page for Shopdit - React.js Tailwind CSS Admin Dashboard Template"
      />
      <h1 className="text-2xl font-bold py-2">Dashboard</h1>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <StatisticsChart />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <MonthlySalesChart />
        </div>
      </div>
    </>
  );
}
