import PackageBox from "../packages";

const Plan: React.FC = () => {
  const packages = [
    {
      heading: "BASIC PACKAGE",
      subHeading: "For building personal business profile",
      price: 49,
      features: [
        { text: "5 Projects", available: true },
        { text: "Email Support", available: true },
        { text: "Custom Domain", available: false },
        { text: "Team Accounts", available: false },
      ],
    },
    {
      heading: "Standard PACKAGE",
      subHeading: "For building personal business profile",
      price: 100,
      features: [
        { text: "Unlimited projects", available: true },
        { text: "24/7 Support", available: true },
        { text: "Custom Domain", available: false },
        { text: "Team Accounts", available: true },
      ],
    },
    {
      heading: "PREMIUM PACKAGE",
      subHeading: "For building personal business profile",
      price: 199,
      features: [
        { text: "Unlimited projects", available: true },
        { text: "Dedicated Manager", available: true },
        { text: "Custom Domain", available: true },
        { text: "Team Accounts", available: true },
      ],
    },
  ];

  return (
    <div className="md:w-4xl my-4">
      <div className="bg-white p-8 rounded-lg">
        {/* Title */}
        <div className="mb-5 sm:mb-8 text-center">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            SUBSCRIPTION PLAN
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Choose your package plan
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <PackageBox
              key={index}
              heading={pkg.heading}
              subHeading={pkg.subHeading}
              price={pkg.price}
              features={pkg.features}
              className="my-custom-package"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
