import FileUpload from "../common/FileUpload";

function ProfileHeader({
  watch,
  setValue,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div>

          {watch("profileImage") ? (
            <img
              src={watch("profileImage")}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white"
            />
          ) : (
            <div className="w-36 h-36 rounded-full bg-white/20 flex justify-center items-center text-5xl font-bold">
              👤
            </div>
          )}

        </div>

        <div className="flex-1">

          <h1 className="text-3xl font-bold">
            {watch("name") || "Your Name"}
          </h1>

          <p className="mt-2 text-blue-100">
            {watch("title") ||
              "Professional Title"}
          </p>

          <div className="mt-6">

            <FileUpload
              label="Upload Profile Image"
              accept="image/*"
              value={watch("profileImage")}
              onUpload={(url) =>
                setValue("profileImage", url)
              }
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;