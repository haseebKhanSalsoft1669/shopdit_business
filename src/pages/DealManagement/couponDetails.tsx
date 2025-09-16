import React from "react";
import { ImageUrl } from '../../utils/Functions';

const CouponDetails: React.FC = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 987-6543",
    joined: "Jan 10, 2023",
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-6 space-y-6">
      {/* Product Card Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Image */}
        <div className="flex items-center gap-4 flex-1">
          <img
            src={ImageUrl("watch.png")}
            alt="Smart Gear Watch"
            className="w-28 h-28 object-contain rounded-lg border"
          />
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100">
              SMART GEAR WATCHES
            </h3>
            <a
              href="#"
              className="text-sm text-blue-500 font-medium hover:underline block"
            >
              10% Off - Smart Fitness...
            </a>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Get 10% off on all smart fitness tracker watches
            </p>
          </div>
        </div>

        {/* <div className="flex gap-3 flex-shrink-0">
          <button className="px-5 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition">
            APPROVE
          </button>
          <button className="px-5 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            DECLINE
          </button>
        </div> */}
      </div>

      {/* User Details Section */}
      <div className="p-4 rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">
          User Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium text-gray-800 dark:text-gray-100">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium text-gray-800 dark:text-gray-100">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium text-gray-800 dark:text-gray-100">{user.phone}</p>
          </div>
          <div>
            <p className="text-gray-500">Joined On</p>
            <p className="font-medium text-gray-800 dark:text-gray-100">{user.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetails;
