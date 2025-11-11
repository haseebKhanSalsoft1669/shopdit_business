import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import { Button, Col, Pagination, Row } from "antd";
import EventCard from "../../components/eventCard";
import { useGetAllEventsQuery } from "../../redux/services/eventService";

ModuleRegistry.registerModules([AllEnterpriseModule]);

const Events = () => {
  const { data: eventsData, isLoading } = useGetAllEventsQuery();
  console.log(eventsData);
  const products =
    eventsData?.data?.docs?.map((event: any) => ({
      image: event.image,
      name: event.eventName,
      amount: event.ticketPrice || 0,
      date: event.date,
    })) || [];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold uppercase">Events</h1>
        <Button className="web-btn">+ Add Event</Button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <Row justify={"center"}>
            <Col xs={24} md={24} lg={24}>
              <Row gutter={20}>
                {isLoading ? (
                  <p className="text-center w-full">Loading events...</p>
                ) : (
                  products.map((product: any, index: any) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                      <EventCard
                        image={product.image}
                        name={product.name}
                        subheading={product.subheading}
                        amount={product.amount}
                        date={product.date}
                      />
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </div>

        <div className="p-4">
          <Pagination align="end" />
        </div>
      </div>
    </>
  );
};

export default Events;
