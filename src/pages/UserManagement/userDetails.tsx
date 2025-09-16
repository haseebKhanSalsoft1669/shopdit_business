import React from "react";
import { useParams } from "react-router";

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Example: Fetch user by ID here or use mock data
    const user = {
        id: Number(id),
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        imageUrl: "https://i.pravatar.cc/150?img=3",
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-10">
            <div className="text-end">
                <button className="web-btn">BAN USER</button>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-[#F3F8FD] dark:border-white/[0.05] dark:bg-white/[0.03] max-w-md mx-auto text-center">
                <img
                    src={user.imageUrl}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-gray-200 dark:border-white/20"
                />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {user.emailAddress}
                </p>
            </div>
        </div>
    );
};

export default UserDetails;
