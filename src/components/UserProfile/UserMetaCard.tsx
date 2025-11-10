import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UPLOADS_URL } from "../../constants/api";
import { useUpdateProfileMutation } from "../../redux/services/userSlice";
import UserAvatar from "./UserAvatar";

export default function UserMetaCard() {
  const { user } = useSelector((state: any) => state.auth);
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgError, setImgError] = useState(false);

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);
      updateProfile(formData).unwrap();
    } catch (error) {}
  };

  const handleDeleteImage = async () => {
    updateProfile({ deleteImage: true }).unwrap();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUpdating}
        onClick={(e) => ((e.target as HTMLInputElement).value = "")}
      />

      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div
              className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800 relative group"
              onClick={() => setShowOverlay((prev: boolean) => !prev)}
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
            >
              {user?.image && !imgError ? (
                <img
                  src={UPLOADS_URL + user.image}
                  alt="user"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <UserAvatar fullName={user?.fullName} />
              )}

              {showOverlay && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 rounded-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChangeImage();
                    }}
                    className="text-white bg-blue-600 p-1 rounded-full hover:bg-blue-700"
                    title="Change Image"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>

                  {user?.image && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteImage();
                      }}
                      className="text-white bg-red-600 p-1 rounded-full hover:bg-red-700"
                      title="Delete Image"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                {user?.fullName}
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
