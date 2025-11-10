import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import { useFormik } from "formik";
import { SuccessPopup } from "../popup/Popup";
import { useAppSelector } from "../../redux/hooks";

const validate = (values: {
  fullName: string;
  email: string;
  gender: string;
}) => {
  const errors: { fullName?: string; email?: string; gender?: string } = {};

  if (!values.fullName) {
    errors.fullName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const user = useAppSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName ?? "",
      email: user?.email ?? "",
      gender: user?.gender ?? "",
    },
    validate,
    onSubmit: async () => {
      try {
        // Update profile API call here if needed
        SuccessPopup("Profile updated successfully!");
        closeModal();
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
  });

  const formikError = (key: keyof typeof formik.errors) => (
    <>
      {formik.errors[key] && formik.touched[key] && (
        <p className="mt-1 text-sm text-red-600">
          {String(formik.errors[key])}
        </p>
      )}
    </>
  );

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Full Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {user?.fullName ?? "-"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {user?.email ?? "-"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Gender
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {user?.gender ?? "-"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Customer Id
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {user?.customerId ?? "-"}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          Edit
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <div className="custom-scrollbar h-[300px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                    />
                    {formikError("fullName")}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      disabled
                    />
                    {formikError("email")}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      name="gender"
                      type="text"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                    />
                    {formikError("gender")}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Customer Id</Label>
                    <Input value={user?.customerId ?? "-"} disabled />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
