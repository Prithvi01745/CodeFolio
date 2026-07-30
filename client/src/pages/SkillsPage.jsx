import { useEffect, useState } from "react";
import {
  getSkills,
  addSkill,
  deleteSkill,
} from "../services/skillService";

function SkillsPage() {
  const [skills, setSkills] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    level: 80,
  });

  const loadSkills = async () => {
    try {
      const res = await getSkills();
      setSkills(res.skills || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "level"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addSkill(formData);

      setFormData({
        name: "",
        category: "Frontend",
        level: 80,
      });

      loadSkills();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      loadSkills();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Skills
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>Database</option>
            <option>Languages</option>
            <option>Tools</option>
            <option>DevOps</option>
            <option>Other</option>
          </select>

          <input
            type="number"
            name="level"
            min="0"
            max="100"
            value={formData.level}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Skill
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((skill) => (
          <div
            key={skill._id}
            className="bg-white shadow rounded-xl p-5"
          >
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-xl font-semibold">
                  {skill.name}
                </h2>

                <p className="text-gray-500">
                  {skill.category}
                </p>
              </div>

              <button
                onClick={() => handleDelete(skill._id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>

            </div>

            <div className="mt-4">

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

              <p className="mt-2 text-sm">
                {skill.level}%
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SkillsPage;