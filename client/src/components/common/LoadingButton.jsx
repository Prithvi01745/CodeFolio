function LoadingButton({
  loading,
  text,
}) {
  return (
    <button
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition disabled:bg-gray-400 flex justify-center items-center gap-3"
    >
      {loading && (
        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      )}

      {loading ? "Saving..." : text}
    </button>
  );
}

export default LoadingButton;