import InputField from "../common/InputField";
import SectionCard from "../common/SectionCard";

function SocialLinks({
  register,
  errors,
}) {
  return (
    <SectionCard title="Social Links">

      <div className="grid md:grid-cols-2 gap-6">

        <InputField
          label="GitHub"
          placeholder="https://github.com/username"
          register={register}
          name="socialLinks.github"
          errors={errors}
        />

        <InputField
          label="LinkedIn"
          placeholder="https://linkedin.com/in/username"
          register={register}
          name="socialLinks.linkedin"
          errors={errors}
        />

        <InputField
          label="Portfolio Website"
          placeholder="https://yourwebsite.com"
          register={register}
          name="socialLinks.website"
          errors={errors}
        />

        <InputField
          label="Twitter / X"
          placeholder="https://x.com/username"
          register={register}
          name="socialLinks.twitter"
          errors={errors}
        />

      </div>

    </SectionCard>
  );
}

export default SocialLinks;