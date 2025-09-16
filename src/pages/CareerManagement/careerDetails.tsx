import { ArrowLeft, Pencil, Trash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const CareerDetails: React.FC = () => {
    const navigate = useNavigate();
    const job = {
        id: "1",
        title: "Marketing Coordinator",
        location: "954 Kohen Route, 11230 West Ned Tennessee",
        experience: "03 – 05 Years of Experience",
        date: "January 22, 2024",
        salary: "20k – 25k",
        sections: [
            {
                heading: "Key Responsibilities & Accountabilities",
                items: [
                    "Organizing and managing events such as trade shows, conferences, and promotional events.",
                    "Coordinating and implementing marketing campaigns across various channels such as email, social media, and print.",
                    "Conducting market research to identify trends, customer preferences, and competitive analysis.",
                    "Developing marketing materials, including blog posts, newsletters, social media content, and promotional materials.",
                    "Managing the company’s online presence, including updating the website, running social media accounts, and creating online advertisements.",
                    "Tracking the performance of marketing campaigns and preparing reports to assess effectiveness and ROI.",
                    "Working closely with other departments, such as sales, product development, and customer service, to ensure cohesive marketing strategies.",
                ],
            },
            {
                heading: "Education & Experience",
                items: [
                    "Organizing and managing events such as trade shows, conferences, and promotional events.",
                    "Coordinating and implementing marketing campaigns across various channels such as email, social media, and print.",
                    "Conducting market research to identify trends, customer preferences, and competitive analysis.",
                    "Developing marketing materials, including blog posts, newsletters, social media content, and promotional materials.",
                ],
            },
            {
                heading: "Certification",
                items: [
                    "Organizing and managing events such as trade shows, conferences, and promotional events.",
                    "Coordinating and implementing marketing campaigns across various channels such as email, social media, and print.",
                ],
            },
            {
                heading: "Personal Attributes",
                items: [
                    "Organizing and managing events such as trade shows, conferences, and promotional events.",
                    "Coordinating and implementing marketing campaigns across various channels such as email, social media, and print.",
                    "Conducting market research to identify trends, customer preferences, and competitive analysis.",
                ],
            },
            {
                heading: "Required Skills",
                items: [
                    "Organizing and managing events such as trade shows, conferences, and promotional events.",
                    "Coordinating and implementing marketing campaigns across various channels such as email, social media, and print.",
                    "Conducting market research to identify trends, customer preferences, and competitive analysis.",
                    "Developing marketing materials, including blog posts, newsletters, social media content, and promotional materials.",
                    "Managing the company’s online presence, including updating the website, running social media accounts, and creating online advertisements.",
                    "Tracking the performance of marketing campaigns and preparing reports to assess effectiveness and ROI.",
                    "Working closely with other departments, such as sales, product development, and customer service, to ensure cohesive marketing strategies.",
                ],
            },
        ],
    };

    return (
        <>
            <div className=" flex items-center ">
                <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer"/>
                <h1 className="text-2xl font-bold py-2">JOB DETAILS</h1>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-5 space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                            <span>📍 {job.location}</span>
                            <span>💼 {job.experience}</span>
                            <span>📅 {job.date}</span>
                            <span>💰 {job.salary}</span>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full bg-red-800 text-white hover:bg-red-200 transition">
                            <Trash />
                        </button>
                        <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 transition" onClick={() => navigate(`/career-management/edit-job/${job.id}`)}>
                            <Pencil />
                        </button>
                        <button className="px-5 py-2 web-btn text-white rounded-lg hover:bg-pink-600 transition" onClick={() => navigate(`/viewApplication`)}>
                            VIEW APPLICATIONS
                        </button>
                    </div>
                </div>

                {/* Sections */}
                {job.sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {section.heading}
                        </h2>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CareerDetails;
