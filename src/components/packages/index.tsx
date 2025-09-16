import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface PackageBoxProps {
  heading: string;
  subHeading: string;
  price: number;
  features: { text: string; available: boolean }[];
  className?: string; // custom class for overrides
}

const PackageBox: React.FC<PackageBoxProps> = ({
  heading,
  subHeading,
  price,
  features,
  className = "",
}) => {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden border border-gray-200 ${className}`}
    >
      {/* Header */}
      <div className="p-4 text-left">
        <h2 className="text-xl font-bold uppercase">{heading}</h2>
        <p className="text-[#F6075A]">{subHeading}</p>
      </div>

      {/* Body */}
      <div className="bg-[#D4F1FF] w-full p-6 text-center">
        {/* Price */}
        <div className="mb-4">
          <span className="align-top text-lg font-bold">$</span>
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-sm text-gray-600 align-bottom">/per month</span>
        </div>
        <button className="web-btn w-full mb-3">GET STARTED</button>

        {/* Features */}
        <ul className="space-y-2 text-left mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.available ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
              <span className="text-gray-800">{feature.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        
      </div>
    </div>
  );
};

export default PackageBox;
