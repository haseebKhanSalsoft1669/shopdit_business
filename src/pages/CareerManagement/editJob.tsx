import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const EditJob: React.FC = () => {
  const navigate = useNavigate();
  // const { id } = useParams<{ id: string }>();

  // Mock job data (in real case, fetch by ID)
  const [job, setJob] = useState({
    title: "Marketing Coordinator",
    email: "hr@company.com",
    city: "Tennessee",
    state: "West Ned",
    experience: "3 - 5 Years",
    role: "Marketing",
    salaryMin: "20000",
    salaryMax: "25000",
    responsibilities:
      "Organizing and managing events such as trade shows, conferences, and promotional events.",
    education:
      "Bachelor’s degree in Marketing or related field, 3-5 years experience required.",
    certification: "Digital Marketing Certificate",
    attributes:
      "Strong communication, problem-solving, and organizational skills.",
    skills:
      "Market research, campaign management, SEO, content creation, team collaboration.",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex items-center">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold py-2">EDIT JOB</h1>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-10">
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title*
              </label>
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder="Enter Job Title"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resume Receiving Email*
              </label>
              <input
                type="email"
                name="email"
                value={job.email}
                onChange={handleChange}
                placeholder="Enter Resume Receiving Email"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City*
              </label>
              <input
                type="text"
                name="city"
                value={job.city}
                onChange={handleChange}
                placeholder="Enter City"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State*
              </label>
              <input
                type="text"
                name="state"
                value={job.state}
                onChange={handleChange}
                placeholder="Enter State"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience*
              </label>
              <input
                type="text"
                name="experience"
                value={job.experience}
                onChange={handleChange}
                placeholder="Enter Experience Years"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Role
              </label>
              <input
                type="text"
                name="role"
                value={job.role}
                onChange={handleChange}
                placeholder="Enter Job Role Here"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
          </div>

          {/* Row 4 - Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Min Salary
              </label>
              <input
                type="text"
                name="salaryMin"
                value={job.salaryMin}
                onChange={handleChange}
                placeholder="Low Range"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
              <div className="flex items-center mt-2">
                <input
                  id="hideSalary"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded bg-blue-50"
                />
                <label
                  htmlFor="hideSalary"
                  className="ml-2 text-sm text-gray-600"
                >
                  Keep salary hidden
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Max Salary
              </label>
              <input
                type="text"
                name="salaryMax"
                value={job.salaryMax}
                onChange={handleChange}
                placeholder="High Range"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-blue-50"
              />
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Key Responsibilities & Accountabilities
            </label>
            <textarea
              rows={4}
              name="responsibilities"
              value={job.responsibilities}
              onChange={handleChange}
              placeholder="Write Responsibilities Here..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Education & Experience
            </label>
            <textarea
              rows={4}
              name="education"
              value={job.education}
              onChange={handleChange}
              placeholder="Write Education Experience Here..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Certification
            </label>
            <input
              type="text"
              name="certification"
              value={job.certification}
              onChange={handleChange}
              placeholder="Write Here"
              className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Personal Attributes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personal Attributes
            </label>
            <textarea
              rows={3}
              name="attributes"
              value={job.attributes}
              onChange={handleChange}
              placeholder="Write Here..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Required Skills
            </label>
            <textarea
              rows={3}
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="Write Here..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-2 rounded-full web-btn text-white font-semibold shadow"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditJob;
