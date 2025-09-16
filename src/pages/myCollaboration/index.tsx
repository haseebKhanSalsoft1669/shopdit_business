import { Col, Pagination, Row, Tabs } from "antd";
import { useState } from "react";
import MyCollaborationCard from "../../components/myCollaborationCard";

const { TabPane } = Tabs;

function MyCollaboration() {
  const collab = [
    { image: "collab-1.png", text: "Restaurant & Dining", link: "/myCollaboration/special-1", category: "Restaurants and dining" },
    { image: "collab-2.png", text: "CULINARY CREATIONS", link: "/myCollaboration/special-2", category: "Restaurants and dining" },
    { image: "collab-3.png", text: "SAVORY SPICE SHAFTO", link: "/myCollaboration/special-3", category: "Restaurants and dining" },
    { image: "collab-1.png", text: "Restaurant & Dining", link: "/myCollaboration/special-1", category: "Restaurants and dining" },
    { image: "collab-2.png", text: "CULINARY CREATIONS", link: "/myCollaboration/special-2", category: "Restaurants and dining" },
    { image: "collab-3.png", text: "SAVORY SPICE SHAFTO", link: "/myCollaboration/special-3", category: "Restaurants and dining" },

    { image: "collab-1.png", text: "Cafe Special", link: "/myCollaboration/special-1", category: "Cafe" },
    { image: "collab-2.png", text: "Morning Brews", link: "/myCollaboration/special-2", category: "Cafe" },

    { image: "collab-3.png", text: "Sweet Coffee", link: "/myCollaboration/special-3", category: "Coffee and dessert" },
    { image: "collab-1.png", text: "Dessert Lovers", link: "/myCollaboration/special-1", category: "Coffee and dessert" },

    { image: "collab-2.png", text: "Automobile Deals", link: "/myCollaboration/special-2", category: "AUTOMOBILE" },
    { image: "collab-3.png", text: "Car Accessories", link: "/myCollaboration/special-3", category: "AUTOMOBILE" },
  ];

  const categories = [
    "Restaurants and dining",
    "Cafe",
    "Coffee and dessert",
    "AUTOMOBILE",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCollab = collab.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">MY COLLABORATION</h1>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full p-4">
          {/* Tabs */}
          <div className="collab-tabs">
          <Tabs
            defaultActiveKey={categories[0]}
            onChange={(key) => setActiveCategory(key)}
           
          >
            {categories.map((cat) => (
              <TabPane tab={cat} key={cat}>
                <Row gutter={[16, 16]}>
                  {filteredCollab.map((collab, index) => (
                    <Col xs={24} sm={12} md={8} lg={8} key={index}>
                      <MyCollaborationCard
                        image={collab.image}
                        text={collab.text}
                        link={collab.link}
                      />
                    </Col>
                  ))}
                </Row>
              </TabPane>
            ))}
          </Tabs>
          </div>
          
        </div>

        <div className="p-4">
          <Pagination align="end" defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
}

export default MyCollaboration;
