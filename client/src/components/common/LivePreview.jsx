function LivePreview({ watch }) {
  return (
    <div className="sticky top-6">

      <div className="rounded-3xl border shadow-lg overflow-hidden">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 h-28"></div>

        <div className="-mt-14 flex justify-center">

          {watch("profileImage") ? (
            <img
              src={watch("profileImage")}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-4xl">
              👤
            </div>
          )}

        </div>

        <div className="p-6 text-center">

          <h2 className="text-2xl font-bold">
            {watch("name") || "Your Name"}
          </h2>

          <p className="text-gray-500 mt-2">
            {watch("title") || "Professional Title"}
          </p>

          <p className="mt-5 text-sm text-gray-600 leading-7">
            {watch("bio") ||
              "Your bio will appear here."}
          </p>

          <div className="mt-6 flex justify-center gap-4">

            {watch("socialLinks.github") && (
              <a
                href={watch("socialLinks.github")}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                GitHub
              </a>
            )}

            {watch("socialLinks.linkedin") && (
              <a
                href={watch("socialLinks.linkedin")}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                LinkedIn
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default LivePreview;