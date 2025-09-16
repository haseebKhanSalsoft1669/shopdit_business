import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import { Button, Col, Pagination, Row } from "antd";
import EventCard from "../../components/eventCard";

ModuleRegistry.registerModules([AllEnterpriseModule]);

const Events = () => {


  interface Product {
    image: string;
    name: string;
    subheading?: string;
    amount: number;
    date?: string; // ✅ new field for circle date
  }

  const products: Product[] = [
    {
      image: "event-1.png",
      name: "CAR FOR SALE",
      subheading: "Exclusive Deals",
      amount: 12,
      date: "2025-01-04",
    },
    {
      image: "event-2.png",
      name: "CAR SPARE PARTS",
      subheading: "Best Prices",
      amount: 8,
      date: "2025-02-10",
    },
    {
      image: "event-3.png",
      name: "CAR RENTAL",
      subheading: "Affordable Rates",
      amount: 15,
      date: "2025-03-22",
    },
    {
      image: "event-4.png",
      name: "CAR TIRES & WHEELS",
      subheading: "Top Quality",
      amount: 20,
      date: "2025-04-18",
    },
    {
      image: "event-1.png",
      name: "CAR FOR SALE",
      subheading: "Hot Offers",
      amount: 12,
      date: "2025-05-09",
    },
    {
      image: "event-2.png",
      name: "CAR SPARE PARTS",
      subheading: "Discounted",
      amount: 8,
      date: "2025-06-15",
    },
    {
      image: "event-3.png",
      name: "CAR RENTAL",
      subheading: "Weekend Special",
      amount: 15,
      date: "2025-07-20",
    },
    {
      image: "event-4.png",
      name: "CAR TIRES & WHEELS",
      subheading: "Limited Stock",
      amount: 20,
      date: "2025-08-25",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold uppercase">Events</h1>

      {/* Button */}
      <Button className="web-btn">+ Add Event</Button>
    </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <Row justify={"center"}>
            <Col xs={24} md={24} lg={24}>
              <Row gutter={20}>
                {products.map((product, index) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <EventCard
                      image={product.image}
                      name={product.name}
                      subheading={product.subheading}
                      amount={product.amount}
                      date={product.date}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <div className="p-4">
          <Pagination align="end" defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default Events;
