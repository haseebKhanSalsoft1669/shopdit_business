

const UserAvatar = ({ firstName = "", lastName = "" }) => {
  const getInitials = () => {
    const first = firstName?.charAt(0).toUpperCase() || "";
    const last = lastName?.charAt(0).toUpperCase() || "";
    return first + last;
  };

  return (
    <div className="w-full h-full rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-xl">
      {getInitials()}
    </div>
  );
};

export default UserAvatar;
