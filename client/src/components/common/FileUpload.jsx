import { useRef, useState } from "react";
import { uploadFile } from "../../services/uploadService";

function FileUpload({
  label,
  accept,
  value,
  onUpload,
}) {
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef();

  const upload = async (file) => {
    try {
      setUploading(true);

      const response = await uploadFile(file);

      onUpload(response.url);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    upload(file);
  };

  const drop = (e) => {
    e.preventDefault();

    setDragging(false);

    if (e.dataTransfer.files.length) {
      upload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-4">

      <label className="font-semibold text-gray-700">
        {label}
      </label>

      <div
        onClick={() => inputRef.current.click()}
        onDrop={drop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        className={`border-2 border-dashed rounded-xl p-8 cursor-pointer transition text-center ${
          dragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          hidden
          onChange={handleFile}
        />

        {uploading ? (
          <div>

            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>

            <p className="mt-4 text-blue-600">
              Uploading...
            </p>

          </div>
        ) : (
          <div>

            <p className="text-lg font-medium">
              Click or Drag File Here
            </p>

            <p className="text-gray-500 mt-2">
              Supported:
              {" "}
              {accept}
            </p>

          </div>
        )}

      </div>

      {value && accept.startsWith("image") && (
        <div>

          <img
            src={value}
            alt="Preview"
            className="rounded-xl shadow border h-40 w-40 object-cover"
          />

        </div>
      )}

      {value && accept === ".pdf" && (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Uploaded Resume
        </a>
      )}

    </div>
  );
}

export default FileUpload;