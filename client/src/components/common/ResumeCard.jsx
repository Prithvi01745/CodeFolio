import FileUpload from "../common/FileUpload";
import SectionCard from "../common/SectionCard";

function ResumeCard({
  watch,
  setValue,
}) {
  const resume = watch("resume");

  return (
    <SectionCard title="Resume">

      <FileUpload
        label="Upload Resume (PDF)"
        accept=".pdf"
        value={resume}
        onUpload={(url) => setValue("resume", url)}
      />

      {resume && (
        <div className="mt-5 p-4 border rounded-xl bg-green-50">

          <p className="font-medium text-green-700">
            ✅ Resume uploaded successfully
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View Resume
          </a>

        </div>
      )}

    </SectionCard>
  );
}

export default ResumeCard;