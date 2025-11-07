
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";

export default function CampaignAnalytics() {
  return (
    <>
     
      <h1 className="text-2xl font-bold py-2">Analytics</h1>
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
