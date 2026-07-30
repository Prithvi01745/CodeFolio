function DashboardCard({ title, value, icon, bg }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Background Glow */}
      <div
        className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${bg} opacity-10 blur-3xl`}
      ></div>

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">

            {title}

          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-slate-800 dark:text-white">

            {value}

          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

            Total {title.toLowerCase()}

          </p>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${bg} text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

      </div>

      {/* Bottom Progress Line */}
      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">

        <div
          className={`h-full rounded-full bg-gradient-to-r ${bg}`}
          style={{ width: "75%" }}
        ></div>

      </div>

    </div>
  );
}

export default DashboardCard;