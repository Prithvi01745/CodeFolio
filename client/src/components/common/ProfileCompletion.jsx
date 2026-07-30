import { useMemo } from "react";

function ProfileCompletion({ watch }) {
  const completion = useMemo(() => {
    let score = 0;

    if (watch("name")) score += 15;
    if (watch("title")) score += 15;
    if (watch("bio")) score += 20;
    if (watch("profileImage")) score += 20;
    if (watch("resume")) score += 15;
    if (watch("socialLinks.github")) score += 15;

    return score;
  }, [watch]);

  return (
    <div className="bg-white rounded-2xl border shadow p-6">

      <div className="flex justify-between mb-3">

        <h3 className="font-semibold">
          Profile Completion
        </h3>

        <span className="font-bold">
          {completion}%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          style={{ width: `${completion}%` }}
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
        />

      </div>

    </div>
  );
}

export default ProfileCompletion;