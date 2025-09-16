import React, { useState } from "react";

const Setting: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <div className="p-10 bg-white dark:bg-white/[0.03] dark:border-white/[0.05] rounded-xl border border-gray-200 overflow-hidden">
      <div className="space-y-8 max-w-4xl">
        {/* Push Notifications Toggle */}
        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-md border border-blue-100">
          <span className="text-gray-700 font-medium">Push Notifications</span>
          <button
            onClick={() => setPushEnabled(!pushEnabled)}
            className={`w-12 h-6 flex items-center rounded-full border transition-colors ${
              pushEnabled ? "bg-blue-600 border-blue-600" : "bg-gray-200 border-gray-300"
            }`}
          >
            <span
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                pushEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
