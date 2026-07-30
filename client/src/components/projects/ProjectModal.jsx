function ProjectModal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-5">

      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>

        </div>

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default ProjectModal;