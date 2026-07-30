function TechnologyChip({ technology, onRemove }) {
  return (
    <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
      <span>{technology}</span>

      <button
        type="button"
        onClick={onRemove}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ×
      </button>
    </div>
  );
}

export default TechnologyChip;