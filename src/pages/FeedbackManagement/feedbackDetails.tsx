import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

const FeedbackDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Example: Mock feedback data
  const feedback = {
    id: Number(id),
    firstName: "James",
    lastName: "Anderson",
    email: "James.anderson@gmail.com",
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remain essentially unchanged. It was popularised in the with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
    like Aldus PageMaker including versions of Lorem Ipsum.

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book.`,
  };



  return (
    <div className="p-10 bg-white dark:bg-white/[0.03] dark:border-white/[0.05] rounded-xl border border-gray-200 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft size={18} /> Back to Feedback List
      </button>

      {/* Feedback Info */}
      <div className="space-y-8 max-w-4xl">
        {/* First Name */}
        <div>
          <p className="text-gray-500 text-sm mb-1">First Name</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">
            {feedback.firstName}
          </p>
        </div>

        {/* Last Name */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Last Name</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">
            {feedback.lastName}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Email Address</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">
            {feedback.email}
          </p>
        </div>

        {/* Message */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Message</p>
          <p className="font-medium text-gray-800 dark:text-gray-100 leading-relaxed whitespace-pre-line">
            {feedback.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
