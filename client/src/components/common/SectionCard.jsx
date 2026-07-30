function SectionCard({
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">

      <h2 className="text-xl font-bold mb-6 text-gray-800">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default SectionCard;